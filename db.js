import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const initialData = {
  profile: {
    name: "JAYNARAYAN PANDA",
    title: "AI/ML Engineer & Intelligent Systems Specialist",
    location: "Bhubaneswar, Odisha, India",
    phone: "+91-7846803792",
    whatsapp: "https://wa.me/917846803792",
    email: "pandajaynarayan49@gmail.com",
    linkedin: "https://www.linkedin.com/in/jaynarayan-panda-8531831b6",
    github: "https://github.com/Jaypanda28",
    portfolioUrl: "https://jaynarayanportfolio.netlify.app",
    summary: "Computer Science undergraduate specializing in Artificial Intelligence, Machine Learning, Deep Learning, and Computer Vision with advanced expertise in Python, Data Science, and Full-Stack Systems. Proven leadership in real-world AI applications including SIH-winning LSTM sensor telemetry, OpenCV face recognition systems, and LLM-powered healthcare platforms."
  },
  stats: {
    views: 1640,
    projectLikes: 435,
    messagesCount: 35,
    sihProjects: 1
  },
  education: [
    {
      id: "edu-1",
      institution: "GITA Autonomous College",
      degree: "B.Tech, Computer Science & Engineering",
      period: "2023 – 2027",
      score: "CGPA: 8.56 / 10",
      description: "Specializing in Artificial Intelligence, Neural Networks, Deep Learning, Computer Vision, Data Structures & Algorithms, and Cloud Computing."
    },
    {
      id: "edu-2",
      institution: "SBD International School",
      degree: "Intermediate (12th)",
      period: "2021 – 2023",
      score: "65.6%",
      description: "Science stream with Physics, Chemistry, Mathematics, and Computer Science foundation."
    },
    {
      id: "edu-3",
      institution: "SBD International School",
      degree: "Secondary (10th)",
      period: "2019 – 2021",
      score: "83.6%",
      description: "High academic performance with distinction in Mathematics and Science."
    }
  ],
  experiences: [
    {
      id: "exp-0",
      role: "Founder & Software Developer",
      company: "Jovix",
      location: "Bhubaneswar / Remote",
      period: "2026 – Present",
      type: "Software Development Startup",
      logo: "/jovix-logo.jpg",
      points: [
        "Founded and developed Jovix, a software solutions startup focused on delivering customized applications and technology solutions for businesses.",
        "Designed and developed responsive web applications and cross-platform mobile solutions based on client requirements and business workflows.",
        "Worked on custom software solutions, including business management systems, dashboards, APIs, and database-driven applications.",
        "Implemented cloud-based deployment and DevOps practices, including server configuration, application deployment, and CI/CD workflows.",
        "Developed and integrated REST APIs and backend services with databases to build scalable and maintainable applications.",
        "Performed testing, debugging, security checks, and performance optimization to improve application reliability.",
        "Provided post-development maintenance, troubleshooting, feature enhancements, and technical support for deployed solutions."
      ],
      tags: ["Startup Founder", "Full-Stack Dev", "Web & Mobile", "REST APIs", "Databases", "DevOps", "CI/CD", "Client Solutions"]
    },
    {
      id: "exp-3",
      role: "AI/ML Intern",
      company: "OCAC (Odisha Computer Application Centre)",
      location: "Bhubaneswar",
      period: "May 2025 – Jul 2025",
      type: "AI & Machine Learning Specialization",
      logo: "/ocac-logo.jpg",
      points: [
        "Developed end-to-end AI/ML solutions using Python, TensorFlow, Keras, PyTorch, and Scikit-learn across classification, regression, and clustering tasks.",
        "Built Computer Vision models with OpenCV and YOLOv8 for real-time object detection and facial recognition.",
        "Executed complete data science pipelines including data cleaning, feature engineering, model evaluation, and hyperparameter tuning on complex real-world datasets."
      ],
      tags: ["Python", "AI/ML", "TensorFlow", "Keras", "PyTorch", "Scikit-Learn", "OpenCV", "Data Science"]
    },
    {
      id: "exp-2",
      role: "System Engineer Intern",
      company: "National Aluminium Company Limited (NALCO)",
      location: "Damanjodi",
      period: "Jun 2026 – Jul 2026",
      type: "Enterprise Full-Stack Internship",
      logo: "/nalco-logo.jpg",
      points: [
        "Engineered a role-based Work Order Management System using React.js, Node.js, Express.js, and Microsoft SQL Server.",
        "Implemented Role-Based Access Control (RBAC) and JWT authentication for Tender & Contract, EIC, HOD, and Contractor approval workflows.",
        "Built work order management, contractor evaluation, authentication, and password management modules with RESTful APIs."
      ],
      tags: ["Python", "React.js", "Node.js", "Express.js", "MS SQL Server", "RBAC", "REST APIs"]
    },
    {
      id: "exp-1",
      role: "Advanced Software & Java Trainee",
      company: "OCAC (Odisha Computer Application Centre)",
      location: "Bhubaneswar",
      period: "Jul 2025 – Mar 2026",
      type: "Software Engineering & Backend Architecture",
      logo: "/ocac-logo.jpg",
      points: [
        "Developed full-stack applications using Java, Servlets, JSP, Spring Framework, and Flask.",
        "Applied OOP principles, multithreading, and client-server architecture across enterprise backend services."
      ],
      tags: ["Java", "Python", "Flask", "Spring Boot", "Servlets", "MVC", "REST APIs"]
    }
  ],
  projects: [
    {
      id: "proj-4",
      title: "SIH Winner: Rockfall Prediction System",
      subtitle: "LSTM-Based Real-Time Sensor Telemetry & Disaster Mitigation",
      category: "AI / Deep Learning",
      tech: ["Python", "TensorFlow", "Keras", "LSTM", "NumPy", "Pandas", "IoT Telemetry", "Flask"],
      likes: 185,
      image: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80",
      description: "Led the Smart India Hackathon (SIH) team to engineer an AI-powered early warning rockfall prediction system using time-series sensor data.",
      details: [
        "Trained a recurrent Long Short-Term Memory (LSTM) deep neural network model using TensorFlow & Keras to detect seismic slope anomalies.",
        "Processed real-time multi-sensor telemetry data with NumPy and Pandas to calculate risk indexes and trigger instant alert warnings.",
        "Awarded SIH Team Leader for cutting-edge AI engineering and real-world disaster management innovation."
      ],
      github: "https://github.com/Jaypanda28",
      demo: "https://jaynarayanportfolio.netlify.app"
    },
    {
      id: "proj-2",
      title: "Face Recognition Attendance System",
      subtitle: "YOLOv8 & OpenCV Real-Time Biometric Vision Pipeline",
      category: "Computer Vision & AI",
      tech: ["Python", "OpenCV", "YOLOv8", "Face Recognition", "SORT Tracker", "Django", "React.js", "SQL Server"],
      likes: 148,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      description: "Built a real-time smart attendance logging system using webcam face detection, YOLOv8 object detection, facial embeddings, and SORT tracking.",
      details: [
        "Utilized OpenCV and Python deep learning facial landmark embeddings for sub-second recognition accuracy.",
        "Implemented SORT Tracker and YOLOv8 for multi-person real-time video stream tracking.",
        "Integrated Microsoft SQL Server backend for user profile storage, timestamped attendance logs, and daily summary reporting."
      ],
      github: "https://github.com/Jaypanda28",
      demo: "https://jaynarayanportfolio.netlify.app"
    },
    {
      id: "proj-3",
      title: "AI-Based Healthcare System",
      subtitle: "Intelligent LLM Diagnostic Chatbot & Data Science Pipeline",
      category: "AI / Full-Stack",
      tech: ["Python", "Gemini API", "Scikit-learn", "NumPy", "Pandas", "React.js", "Node.js", "Supabase", "WhatsApp API"],
      likes: 140,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      description: "Built an AI-enabled medical assistant application with Google Gemini LLM integration, predictive disease risk models, and automated alerts.",
      details: [
        "Integrated Google Gemini API and custom Scikit-learn classification models for medical inquiry processing and symptom analysis.",
        "Developed automated WhatsApp and SMS notification workflows for doctor appointment reminders.",
        "Managed data pipelines using NumPy, Pandas, and Supabase database storage."
      ],
      github: "https://github.com/Jaypanda28",
      demo: "https://jaynarayanportfolio.netlify.app"
    },
    {
      id: "proj-1",
      title: "Work Order Management System – NALCO",
      subtitle: "Enterprise Role-Based Approval & Tracking Platform",
      category: "Enterprise Full-Stack",
      tech: ["React.js", "Next.js", "Node.js", "Express.js", "Microsoft SQL Server", "REST APIs", "RBAC"],
      likes: 130,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      description: "Developed a role-based enterprise application for NALCO to streamline work order allocation, contractor performance evaluations, and centralized records.",
      details: [
        "Implemented secure Role-Based Access Control (RBAC) across multi-tier user roles: Tender & Contract, EIC, HOD, and Contractor.",
        "Built centralized SQL Server database integration for real-time order lifecycle tracking and evaluation reporting."
      ],
      github: "https://github.com/Jaypanda28",
      demo: "https://jaynarayanportfolio.netlify.app"
    }
  ],
  skills: [],
  achievements: [
    {
      title: "Team Leader – Smart India Hackathon (SIH)",
      description: "Led a 6-member engineering team to build an LSTM-based rockfall prediction system using real-time IoT sensor telemetry.",
      badge: "SIH Leader",
      date: "National Level"
    },
    {
      title: "Active GDG Bhubaneswar Member",
      description: "Contributed to the execution and technical coordination of 10 major Google Developer Group (GDG) events.",
      badge: "Community Leader",
      date: "GDG Bhubaneswar"
    },
    {
      title: "BPUT State-Level Tech Innovation Finalist",
      description: "Represented GITA Autonomous College in the BPUT State-Level Tech Innovation competition.",
      badge: "State Innovation",
      date: "State Level"
    }
  ],
  messages: []
};

export function getDb() {
  if (!fs.existsSync(DB_FILE)) {
    saveDb(initialData);
    return initialData;
  }
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    const data = JSON.parse(raw);
    data.profile.github = "https://github.com/Jaypanda28";
    data.profile.linkedin = "https://www.linkedin.com/in/jaynarayan-panda-8531831b6";
    data.profile.email = "pandajaynarayan49@gmail.com";
    data.profile.whatsapp = "https://wa.me/917846803792";
    return data;
  } catch (err) {
    console.error('Error reading db.json, returning initialData:', err);
    return initialData;
  }
}

export function saveDb(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

export function incrementViews() {
  const data = getDb();
  data.stats.views = (data.stats.views || 0) + 1;
  saveDb(data);
  return data.stats;
}

export function likeProject(projectId) {
  const data = getDb();
  const project = data.projects.find(p => p.id === projectId);
  if (project) {
    project.likes = (project.likes || 0) + 1;
    data.stats.projectLikes = (data.stats.projectLikes || 0) + 1;
    saveDb(data);
    return { likes: project.likes, totalLikes: data.stats.projectLikes };
  }
  return null;
}

export function addMessage(msg) {
  const data = getDb();
  const newMessage = {
    id: 'msg-' + Date.now(),
    name: msg.name || 'Anonymous',
    email: msg.email || '',
    subject: msg.subject || 'Portfolio Inquiry',
    message: msg.message,
    createdAt: new Date().toISOString()
  };
  data.messages.unshift(newMessage);
  data.stats.messagesCount = (data.stats.messagesCount || 0) + 1;
  saveDb(data);
  return newMessage;
}
