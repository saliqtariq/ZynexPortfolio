export const NAV_LINKS = ["Home", "About", "Services", "Courses", "Stats", "Contact"];

export const SERVICES = [
  { icon: "💻", title: "Custom Software Development", desc: "Enterprise-grade custom software tailored to your complex business workflows. From ERP systems to backend APIs, we build scalable solutions for modern enterprises." },
  { icon: "🔍", title: "SEO Services", desc: "Dominate search rankings and drive sustainable organic traffic. We combine technical audits with keyword intelligence to build your brand's digital authority." },
  { icon: "🎨", title: "UI/UX Design", desc: "User-focused design that blends creativity with usability. We create intuitive interfaces that increase engagement and drive higher conversions." },
  { icon: "📣", title: "Digital Marketing", desc: "Results-driven marketing strategies designed to increase brand visibility, generate leads, and maximize ROI across multiple digital channels." },
  { icon: "📱", title: "Social Media Marketing", desc: "Build a loyal community and drive engagement across all major social platforms. We turn likes into loyalty through strategic content and community management." },
  { icon: "🌐", title: "Web Development", desc: "Enterprise-grade custom web applications tailored to your business needs. We build scalable, secure, and high-performance solutions that drive digital transformation." },
  { icon: "⚡", title: "WordPress Development", desc: "Results-driven marketing strategies designed to increase brand visibility, generate leads, and maximize ROI across multiple digital channels." },
  { icon: "📊", title: "Data Analysis Services", desc: "Turn raw data into actionable insights. Our analytics solutions help you optimize operations, improve performance, and identify new growth opportunities." },
];

export const COURSES = [
  {
    icon: "MERN",
    title: "MERN Full Stack Development",
    badge: "POPULAR",
    color: "from-green-500 to-emerald-700",
    duration: "6 Months",
    level: "Beginner → Pro",
    topics: ["MongoDB & Express", "React & Next.js", "Node.js & APIs", "State Management", "Cloud Deployment"],
    cert: true,
    jobs: ["MERN Stack Developer", "Full Stack Engineer", "Frontend Architect"],
  },
  {
    icon: "AI",
    title: "Full Stack AI (ML + DL)",
    badge: "ADVANCED",
    color: "from-emerald-400 to-green-600",
    duration: "6 Months",
    level: "Intermediate → Expert",
    topics: ["Python for AI", "Machine Learning", "Deep Learning", "Neural Networks", "AI Model Deployment"],
    cert: true,
    jobs: ["AI Engineer", "ML Specialist", "Data Scientist"],
  },
  {
    icon: "SEC",
    title: "Cybersecurity & Ethical Hacking",
    badge: "ELITE",
    color: "from-green-600 to-teal-700",
    duration: "6 Months",
    level: "Beginner → Advanced",
    topics: ["Ethical Hacking", "Network Security", "Vulnerability Assessment", "Penetration Testing", "Digital Forensics"],
    cert: true,
    jobs: ["Security Researcher", "Ethical Hacker", "Security Consultant"],
  },
  {
    icon: "DATA",
    title: "Data Analysis Professional",
    badge: "IN-DEMAND",
    color: "from-emerald-500 to-teal-600",
    duration: "4 Months",
    level: "Beginner → Pro",
    topics: ["Advanced Excel", "SQL Databases", "Power BI / Tableau", "Python for Data", "Statistical Modeling"],
    cert: true,
    jobs: ["Data Analyst", "BI Specialist", "Business Analyst"],
  },
  {
    icon: "ENG",
    title: "Spoken English Mastery",
    badge: "ESSENTIAL",
    color: "from-green-400 to-emerald-500",
    duration: "3 Months",
    level: "All Levels",
    topics: ["Fluency & Accent", "Business Communication", "Public Speaking", "Vocabulary Building", "IELTS Preparation"],
    cert: true,
    jobs: ["Corporate Trainer", "Client Manager", "Public Speaker"],
  },
  {
    icon: "UX",
    title: "UI / UX Design",
    badge: "CREATIVE",
    color: "from-teal-400 to-green-500",
    duration: "4 Months",
    level: "Beginner → Pro",
    topics: ["Figma Mastery", "User Research", "Wireframing", "Prototyping", "Visual Design Principles"],
    cert: true,
    jobs: ["Product Designer", "UI/UX Designer", "UX Researcher"],
  },
  {
    icon: "OPS",
    title: "DevOps Engineering",
    badge: "TECHNICAL",
    color: "from-emerald-600 to-green-800",
    duration: "5 Months",
    level: "Intermediate → Pro",
    topics: ["Docker & Kubernetes", "CI/CD Pipelines", "AWS / Azure", "Infrastructure as Code", "Monitoring Tools"],
    cert: true,
    jobs: ["DevOps Engineer", "Cloud Architect", "SRE Engineer"],
  },
  {
    icon: "SOC",
    title: "SOC Analyst",
    badge: "FOCUSED",
    color: "from-green-700 to-emerald-900",
    duration: "4 Months",
    level: "Intermediate",
    topics: ["SIEM Tools", "Incident Response", "Threat Hunting", "Security Monitoring", "Compliance Frameworks"],
    cert: true,
    jobs: ["SOC Analyst L1/L2", "Incident Responder", "Security Engineer"],
  },
  {
    icon: "MKT",
    title: "Digital Marketing with AI",
    badge: "MODERN",
    color: "from-emerald-400 to-teal-500",
    duration: "3 Months",
    level: "Beginner → Pro",
    topics: ["AI for Content", "Social Media Ads", "Email Automation", "Analytics & ROI", "Growth Hacking"],
    cert: true,
    jobs: ["Growth Marketer", "AI Content Strategist", "Ads Manager"],
  },
  {
    icon: "DSN",
    title: "Graphic Designing",
    badge: "ARTISTIC",
    color: "from-green-500 to-teal-400",
    duration: "4 Months",
    level: "Beginner → Pro",
    topics: ["Photoshop & Illustrator", "Brand Identity", "Typography", "Ad Creative Design", "Portfolio Building"],
    cert: true,
    jobs: ["Brand Designer", "Visual Artist", "Creative Director"],
  },
  {
    icon: "SEO",
    title: "SEO (Search Engine Optimization)",
    badge: "RANKING",
    color: "from-teal-600 to-emerald-700",
    duration: "3 Months",
    level: "Beginner → Intermediate",
    topics: ["Technical SEO", "Keyword Research", "On-Page / Off-Page", "Backlink Strategy", "Local SEO"],
    cert: true,
    jobs: ["SEO Specialist", "Search Strategist", "Content Optimizer"],
  },
];

export const STATS = [
  { value: "10,000+", num: 10000, suffix: "+", label: "Graduates Trained", sub: "across various disciplines", icon: "🎓" },
  { value: "500+", num: 500, suffix: "+", label: "Projects Delivered", sub: "successful client deployments", icon: "🚀" },
  { value: "80%", num: 80, suffix: "%", label: "Client Satisfaction", sub: "based on post-project surveys", icon: "⭐" },
];

export const FEATURES = [
  {
    title: "24/7 Support",
    desc: "Dedicated support for students & clients.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5.172V18a2 2 0 002 2h3.28a1 1 0 01.948.684l1.404 4.213a1 1 0 001.872 0l1.404-4.213a1 1 0 01.948-.684H19a2 2 0 002-2V5.172a2 2 0 00-.586-1.414l-1-1A2 2 0 0018 2H6a2 2 0 00-1.414.586l-1 1A2 2 0 003 5.172z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18V10m-4 4h8" />
      </svg>
    )
  },
  {
    title: "Modern Tech",
    desc: "Innovative software & learning stacks.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Global Standards",
    desc: "Serving excellence in 10+ countries.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    title: "Impactful Results",
    desc: "Proven 98% satisfaction track record.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
];

export const TESTIMONIALS = [
  { 
    name: "Ahmad Hassan", 
    role: "MERN Graduate", 
    company: "Software Engineer at TechCorp",
    text: "Zynex Solutions transformed my career. The MERN stack course was comprehensive, and the instructors were outstanding in delivering industry-relevant skills.",
    avatar: "AH",
    stars: 4
  },
  { 
    name: "Fatima Ali", 
    role: "Data Analyst Graduate", 
    company: "Data Analyst at DataTech",
    text: "The Data Analyst course at Zynex provided me with practical, hands-on experience that I apply daily in my role. The project-based learning approach was invaluable.",
    avatar: "FA",
    stars: 4
  },
  { 
    name: "Sarah Khan", 
    role: "AI Course Graduate", 
    company: "ML Engineer at AI Solutions",
    text: "The AI course exceeded my expectations. In-depth knowledge combined with real-world applications helped me secure my dream role in machine learning.",
    avatar: "SK",
    stars: 5
  },
  { 
    name: "TechStart Inc.", 
    role: "Software Development Client", 
    company: "Startup Company",
    text: "Zynex Solutions delivered a robust, scalable web application on time and within budget. Their technical expertise and seamless communication made the collaboration effortless.",
    avatar: "TS",
    stars: 5
  },
];

export const WHY_ZYNEX = [
  { 
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ), 
    title: "Certificate on Completion", 
    desc: "Every course ends with a globally recognized certificate you can proudly display on LinkedIn and your resume." 
  },
  { 
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ), 
    title: "Job Placement Support", 
    desc: "Our career team connects graduates directly with hiring partners. We don't stop until you're placed." 
  },
  { 
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ), 
    title: "Community Access", 
    desc: "Join a thriving community of 100+ alumni, get peer support, and access lifetime updates to course material." 
  },
  { 
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ), 
    title: "Industry Expert Mentors", 
    desc: "Learn from professionals actively working in cybersecurity, development, and data — not just theorists." 
  },
  { 
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ), 
    title: "Hands-On Projects", 
    desc: "Build a real portfolio with capstone projects, CTF challenges, and live client work during your course." 
  },
  { 
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ), 
    title: "Flexible Scheduling", 
    desc: "Morning, evening, and weekend batches to fit your lifestyle. Learn at your pace without sacrificing quality." 
  },
];
