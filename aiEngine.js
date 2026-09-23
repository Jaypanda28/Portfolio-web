import { getDb } from './db.js';

export function answerUserQuestion(userQuery) {
  const db = getDb();
  const q = userQuery.toLowerCase().trim();
  const profile = db.profile;

  if (q.includes('ai') || q.includes('ml') || q.includes('python') || q.includes('machine learning') || q.includes('deep learning') || q.includes('yolo') || q.includes('opencv') || q.includes('pytorch') || q.includes('tensorflow')) {
    return `Jaynarayan is an AI/ML Engineer & Intelligent Systems Specialist! Python is his absolute strongest language, with core expertise in:
• AI/ML & Deep Learning: TensorFlow, Keras, PyTorch, Scikit-learn, LSTM, ANN/CNN.
• Computer Vision: OpenCV, YOLOv8, Face Recognition, SORT Tracker, Image Processing.
• Data Science: NumPy, Pandas, Matplotlib, Data Pipelines.
• Real-World Projects: SIH Winner Rockfall Prediction, Biometric Attendance, AI Healthcare System with Gemini API.`;
  }

  if (q.includes('nalco') || q.includes('work order') || q.includes('internship') || q.includes('experience')) {
    return `Jaynarayan worked as a System Engineer Intern at NALCO (National Aluminium Company Limited) in Jun–Jul 2026. He engineered a full-stack Work Order Management System using React.js, Node.js, Express.js, and Microsoft SQL Server with Role-Based Access Control (RBAC). He also completed an AI/ML Internship at OCAC Bhubaneswar developing TensorFlow, PyTorch, and YOLOv8 models.`;
  }

  if (q.includes('sih') || q.includes('hackathon') || q.includes('rockfall') || q.includes('lstm')) {
    return `Jaynarayan was the Team Leader for Smart India Hackathon (SIH)! He led a team that engineered an early-warning Rockfall Prediction System using LSTM (Long Short-Term Memory) deep neural networks, TensorFlow, Keras, and real-time IoT sensor telemetry.`;
  }

  if (q.includes('gita') || q.includes('education') || q.includes('college') || q.includes('cgpa') || q.includes('degree')) {
    return `Jaynarayan is pursuing B.Tech in Computer Science & Engineering at GITA Autonomous College (2023–2027) with an impressive CGPA of 8.56 / 10! He completed 12th from SBD International School with 65.6% and 10th with 83.6%.`;
  }

  if (q.includes('stack') || q.includes('skill') || q.includes('tech') || q.includes('db') || q.includes('database')) {
    return `Jaynarayan's primary tech stack includes:
• Programming: Python (Advanced), C, Java
• AI/ML & CV: TensorFlow, Keras, PyTorch, Scikit-learn, OpenCV, YOLOv8, SORT Tracker
• Data Science: NumPy, Pandas, Matplotlib
• Web & Backend: Node.js, Express.js, Flask, React.js, Next.js, RESTful APIs
• Databases & Cloud: Microsoft SQL Server, Supabase, AWS, GCP, Docker, Firebase
• Tools: Git, GitHub, VS Code, Jupyter Notebook, Google Colab.`;
  }

  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire') || q.includes('reach')) {
    return `You can reach Jaynarayan directly!
📧 Email: ${profile.email}
📞 Phone: ${profile.phone}
📍 Location: ${profile.location}
🔗 LinkedIn: ${profile.linkedin}
🐙 GitHub: ${profile.github}`;
  }

  return `Hello! I am Jaynarayan's AI Assistant 🤖 Jaynarayan Panda is an AI/ML Engineer & Intelligent Systems Specialist with deep expertise in Python, TensorFlow, PyTorch, OpenCV, YOLOv8, Data Science, and Full-Stack Development. How can I help you today? You can ask about his AI projects, SIH hackathon win, or technical skills!`;
}
