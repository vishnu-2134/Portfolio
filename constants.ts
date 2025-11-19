import { Education, Experience, Profile, Skill } from './types';

export const PROFILE: Profile = {
  name: "Jithendra Vishnu",
  title: "Computer Science Engineering Student",
  about: "I am a final-year B.Tech Computer Science Engineering student at the Central University of Jammu, passionate about Cybersecurity, Cloud Computing, and System Protection. I enjoy exploring how emerging technologies like AI and Automation can enhance security operations and threat detection. Driven by curiosity and precision, I aim to contribute to a team that values innovation, security, and reliability in the digital ecosystem.",
  contact: {
    phone: "+91-8977940415",
    email: "jvienu549584@gmail.com",
    location: "Bari brahmna, Jammu",
    linkedin: "https://www.linkedin.com/in/jithendra-vishnu-a48143313/",
    github: "https://github.com/Jithendra54",
  }
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 1,
    period: "2025 - November",
    role: "Google Analytics Certified",
    company: "Google",
    description: "Completed the Google Analytics Certification, demonstrating proficiency in collecting, configuring, and analyzing web data to derive actionable insights for business growth.",
    certificate: "/certificates/google-analytics.jpg"
  },
  {
    id: 2,
    period: "2025 - November",
    role: "Responsive Web Design",
    company: "freeCodeCamp",
    description: "Earned the Legacy Responsive Web Design certification, representing approximately 300 hours of coursework in HTML5, CSS3, accessibility, and responsive design principles.",
    certificate: "/certificates/freecodecamp.jpg"
  },
  {
    id: 3,
    period: "2025 - November",
    role: "AI and Data Science Workshop",
    company: "IIT Ropar",
    description: "Participated in a two-day technical workshop covering machine learning, data science, and AI applications. Gained exposure to AI model building, data preprocessing, and analytics tools.",
    certificate: "/certificates/iit-ropar.jpg"
  },
  {
    id: 4,
    period: "2025 - August",
    role: "Microsoft IT Support Specialist",
    company: "Microsoft (Coursera)",
    description: "Completed a professional certificate program covering technical support fundamentals, computer networking, operating systems, system administration, and IT security.",
    certificate: "/certificates/microsoft-it-support.jpg"
  },
  {
    id: 5,
    period: "2025 - July",
    role: "Cloud Computing Intern",
    company: "Corizo Edutech (with Wipro)",
    description: "Worked on cloud infrastructure setup, deployment security, and data storage optimization, learning how secure cloud environments operate in real-world systems.",
    certificate: "/certificates/corizo-internship.jpg"
  },
  {
    id: 6,
    period: "2025 - July",
    role: "Data Analytics Intern",
    company: "Deloitte Australia (Forage)",
    description: "Explored data visualization and analytical problem-solving as a Virtual Data Analytics Intern, focusing on maintaining data integrity and security while deriving meaningful business insights.",
    certificate: "/certificates/deloitte-internship.jpg"
  },
  {
    id: 7,
    period: "2025 - April",
    role: "Introduction to MongoDB",
    company: "MongoDb University",
    description: "Successfully completed a foundational course on MongoDB database management, NoSQL concepts, data modeling, CRUD operations, and indexing.",
    certificate: "/certificates/mongodb.jpg"
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: 1,
    period: "2022 - 2026",
    institution: "Central University of Jammu",
    degree: "B.Tech : Computer Science",
    description: "I am pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering (Core), where I've developed a solid foundation in programming, cybersecurity, cloud computing, and data-driven technologies."
  },
  {
    id: 2,
    period: "2020 - 2022",
    institution: "Vignan College",
    degree: "Intermediate",
    description: "Completed my Intermediate (12th) from Vignan College, Vadlamudi, Guntur, where I built a strong base in mathematics, physics, and computer fundamentals. This academic path inspired my interest in technology."
  }
];

export const SKILLS_DATA: Skill[] = [
  {
    category: "Languages & Core",
    items: ["Python", "SQL", "Bash", "Data Analytics", "Problem Solving", "Communication"]
  },
  {
    category: "Web & Database",
    items: ["Flask", "Fast API", "MongoDB", "HTML/CSS", "React"]
  },
  {
    category: "Security & Cloud",
    items: ["Cybersecurity", "AWS", "Docker", "Linux", "Wireshark", "Nmap", "Metasploit"]
  },
  {
    category: "AI & ML",
    items: ["Machine Learning", "Data Science"]
  }
];