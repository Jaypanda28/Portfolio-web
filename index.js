import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

import { getDb, incrementViews, likeProject, addMessage } from './db.js';
import { answerUserQuestion } from './aiEngine.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'pandajaynarayan49@gmail.com';
const EMAIL_USER = process.env.EMAIL_USER || 'pandajaynarayan49@gmail.com';
const EMAIL_PASS = (process.env.EMAIL_PASS || '').replace(/\s+/g, '');

app.use(cors());
app.use(express.json());

// Helper function to send email notification to pandajaynarayan49@gmail.com
async function sendContactNotificationEmail(msgData) {
  let nodemailerResult = { sent: false };

  if (EMAIL_PASS && EMAIL_PASS.length === 16) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"Portfolio Contact Form" <${EMAIL_USER}>`,
        to: RECIPIENT_EMAIL,
        replyTo: msgData.email,
        subject: `[Portfolio Inquiry] ${msgData.subject || 'New Contact Form Submission'} from ${msgData.name}`,
        text: `You have received a new contact message from your portfolio site!\n\n` +
              `Name: ${msgData.name}\n` +
              `Email: ${msgData.email}\n` +
              `Subject: ${msgData.subject || 'N/A'}\n` +
              `Date: ${msgData.createdAt || new Date().toLocaleString()}\n\n` +
              `Message:\n${msgData.message}\n` +
              `------------------------------------\n` +
              `Sent to ${RECIPIENT_EMAIL}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #ffffff;">
            <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">New Portfolio Contact Message</h2>
            <p><strong>Recipient:</strong> <a href="mailto:${RECIPIENT_EMAIL}">${RECIPIENT_EMAIL}</a></p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 8px; font-weight: bold; background-color: #f8fafc; width: 120px;">From Name:</td>
                <td style="padding: 8px; background-color: #f8fafc;">${msgData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold;">Sender Email:</td>
                <td style="padding: 8px;"><a href="mailto:${msgData.email}">${msgData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; background-color: #f8fafc;">Subject:</td>
                <td style="padding: 8px; background-color: #f8fafc;">${msgData.subject || 'Portfolio Inquiry'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold;">Date & Time:</td>
                <td style="padding: 8px;">${msgData.createdAt || new Date().toLocaleString()}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 15px; background-color: #f1f5f9; border-left: 4px solid #4f46e5; border-radius: 4px;">
              <h4 style="margin-top: 0; color: #1e293b;">Message Content:</h4>
              <p style="white-space: pre-wrap; color: #334155; margin-bottom: 0;">${msgData.message}</p>
            </div>
            <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
              This email was sent automatically from your Jaynarayan Panda Portfolio Express Server to <strong>${RECIPIENT_EMAIL}</strong>.
            </div>
          </div>
        `
      };

      const info = await transporter.sendMail(mailOptions);
      console.log(`[Nodemailer Sent] Delivered to ${RECIPIENT_EMAIL}: ${info.messageId}`);
      return { sent: true, provider: 'Nodemailer SMTP', messageId: info.messageId };
    } catch (err) {
      console.log(`[Nodemailer Notice] Gmail SMTP rejected standard password (${err.message}). Using FormSubmit cloud relay...`);
      nodemailerResult = { sent: false, error: err.message };
    }
  }

  // Cloud Email Relay fallback directly to RECIPIENT_EMAIL
  try {
    const fsRes = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Referer': 'https://jaynarayanportfolio.netlify.app'
      },
      body: JSON.stringify({
        name: msgData.name,
        email: msgData.email,
        _subject: `[Portfolio Inquiry] ${msgData.subject || 'New Contact Form Submission'} from ${msgData.name}`,
        message: msgData.message,
        submittedAt: msgData.createdAt || new Date().toLocaleString()
      })
    });
    const fsData = await fsRes.json();
    console.log(`[FormSubmit Relay] Response for ${RECIPIENT_EMAIL}:`, fsData);
    return {
      sent: fsData.success === 'true' || fsData.success === true,
      provider: 'FormSubmit Cloud Relay',
      details: fsData,
      smtpStatus: nodemailerResult
    };
  } catch (err) {
    console.error(`[FormSubmit Error] Failed to relay message to ${RECIPIENT_EMAIL}:`, err.message);
    return { sent: false, error: err.message, smtpStatus: nodemailerResult };
  }
}

// Increment visitor views on load
app.get('/api/stats', (req, res) => {
  const stats = incrementViews();
  res.json({ success: true, stats });
});

// Main Portfolio Data API
app.get('/api/portfolio-data', (req, res) => {
  const data = getDb();
  res.json({ success: true, data });
});

// Projects API
app.get('/api/projects', (req, res) => {
  const db = getDb();
  res.json({ success: true, projects: db.projects });
});

// Like a project
app.post('/api/projects/:id/like', (req, res) => {
  const projectId = req.params.id;
  const result = likeProject(projectId);
  if (result) {
    res.json({ success: true, ...result });
  } else {
    res.status(404).json({ success: false, message: 'Project not found' });
  }
});

// Contact Form API
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, Email, and Message are required.' });
  }
  const newMessage = addMessage({ name, email, subject, message });
  const emailStatus = await sendContactNotificationEmail(newMessage);
  res.json({
    success: true,
    message: `Message sent successfully! Direct notification dispatched to ${RECIPIENT_EMAIL}.`,
    data: newMessage,
    emailStatus
  });
});

// Get Messages / Guestbook
app.get('/api/messages', (req, res) => {
  const db = getDb();
  res.json({ success: true, messages: db.messages });
});

// AI Chatbot API
app.post('/api/ai-chat', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ success: false, reply: 'Please provide a valid question.' });
  }
  const reply = answerUserQuestion(message);
  res.json({ success: true, reply });
});

// Downloadable Resume Endpoint
app.get('/api/download-resume', (req, res) => {
  const db = getDb();
  const profile = db.profile;
  
  const resumeTxt = `====================================================================
${profile.name}
${profile.title}
${profile.location} | Phone: ${profile.phone} | Email: ${profile.email}
LinkedIn: ${profile.linkedin} | GitHub: ${profile.github}
====================================================================

SUMMARY:
${profile.summary}

EDUCATION:
${db.education.map(e => `• ${e.institution} | ${e.degree} (${e.period}) | ${e.score}`).join('\n')}

TECHNICAL SKILLS:
${db.skills.map(s => `• ${s.category}: ${s.items.map(i => i.name).join(', ')}`).join('\n')}

EXPERIENCE:
${db.experiences.map(e => `• ${e.role} @ ${e.company} (${e.period})\n  ${e.points.join('\n  ')}`).join('\n\n')}

PROJECTS:
${db.projects.map(p => `• ${p.title}\n  Tech: ${p.tech.join(', ')}\n  ${p.description}`).join('\n\n')}

ACHIEVEMENTS:
${db.achievements.map(a => `• ${a.title}: ${a.description}`).join('\n')}
`;

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Disposition', 'attachment; filename="Jaynarayan_Panda_Resume.txt"');
  res.send(resumeTxt);
});

// Serve frontend static assets in production build
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));
app.get('*', (req, res) => {
  if (req.url.startsWith('/api')) return res.status(404).json({ error: 'API route not found' });
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Jaynarayan Panda Portfolio Express Server running on http://localhost:${PORT}`);
});
