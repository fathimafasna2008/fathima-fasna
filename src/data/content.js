/**
 * =============================================================================
 * PORTFOLIO CONTENT & CONFIGURATION
 * =============================================================================
 * All text, images, projects, and links are managed in this single file.
 * You can customize the entire website without modifying any React components!
 * Simply change the values below and save.
 */

export const siteConfig = {
  // Personal Details
  name: "Fathima Fasna C A",
  shortName: "Fasna",
  role: "B.Tech CSE (AI) Student",
  statusTag: "B.TECH CSE (AI) · THRISSUR, KERALA",
  college: "Thejus Engineering College",
  location: "Thrissur, Kerala, India",
  copyrightYear: "2026",

  // Navigation Links
  navLinks: [
    { label: "WORK", href: "#projects" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "JOURNEY", href: "#journey" },
  ],

  // Header CTA Link
  navCta: {
    label: "GET IN TOUCH",
    href: "#contact",
  },

  // ---------------------------------------------------------------------------
  // 1. HERO SECTION
  // ---------------------------------------------------------------------------
  hero: {
    eyebrow: "B.TECH CSE (AI) · THRISSUR, KERALA",
    headingSolid: "Fasna",
    headingOutlined: "Portfolio",
    tagline: "CODE. CURIOSITY. A DIFFERENT KIND OF INTELLIGENCE.",
    
    // Background image (Replace with your own photo or custom visual)
    // Tip: Use a dark, moody landscape, architecture, or abstract visual
    backgroundImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80",
    backgroundAlt: "Moody coastal sea stack cliffs at dusk",

    // Bottom Left Scroll Control
    scrollText: "DISCOVER THE WORK",
    
    // Bottom Center Editorial Statement (Solid + Outlined)
    perspectiveSolid: "Fasna's perspective.",
    perspectiveOutlined: "Building with AI.",

    // Bottom Right Primary CTA
    ctaText: "Explore my projects",
    ctaHref: "#projects",

    // Micro Caption
    microCaption: "FEATURED STUDY / MY FIRST BUILD",
  },

  // ---------------------------------------------------------------------------
  // 2. ABOUT SECTION
  // ---------------------------------------------------------------------------
  about: {
    sectionTag: "01 // ABOUT ME",
    headingSolid: "Curious mind.",
    headingOutlined: "Future engineer.",
    
    // Portrait image placeholder (Replace with your headshot or avatar)
    portraitImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    portraitAlt: "Portrait of Fathima Fasna C A",

    paragraphs: [
      "I am a first-year Computer Science and Engineering (Artificial Intelligence) undergraduate at Thejus Engineering College in Thrissur, Kerala. My passion lies at the intersection of logical problem solving, elegant software design, and modern machine learning.",
      "Driven by a strong curiosity for how intelligent systems can reshape our everyday interactions, I am actively sharpening my craft in programming fundamentals, responsive web technologies, and computational thinking.",
      "When I am not coding or studying algorithmic concepts, I enjoy exploring tech communities, experimenting with minimal design aesthetics, and turning ideas into tangible digital prototypes."
    ],

    // Stats items displayed in mono block style
    stats: [
      { label: "YEAR", value: "1ST" },
      { label: "FIELD", value: "CSE-AI" },
      { label: "BASE", value: "THRISSUR" },
      { label: "FOCUS", value: "AI + WEB" }
    ],

    interests: ["Artificial Intelligence", "Machine Learning", "Frontend Engineering", "Data Structures", "Creative Design"]
  },

  // ---------------------------------------------------------------------------
  // 3. SKILLS SECTION
  // ---------------------------------------------------------------------------
  skills: {
    sectionTag: "02 // CAPABILITIES",
    headingSolid: "Core",
    headingOutlined: "stack.",
    subtitle: "A disciplined foundation in programming languages, web fundamentals, and emerging AI tools.",

    skillsList: [
      { name: "Python", category: "AI & SCRIPTING", level: "Intermediate", desc: "Core syntax, data structures, automation, OOP" },
      { name: "C Programming", category: "LOW-LEVEL CORE", level: "Foundation", desc: "Pointers, memory management, algorithm foundations" },
      { name: "Java", category: "OBJECT ORIENTED", level: "Foundation", desc: "Classes, abstraction, inheritance, data structures" },
      { name: "HTML5 / CSS3", category: "WEB FOUNDATIONS", level: "Proficient", desc: "Semantic markup, modern layouts, Flexbox & CSS Grid" },
      { name: "JavaScript", category: "DYNAMIC WEB", level: "Intermediate", desc: "ES6+, DOM manipulation, asynchronous promises, fetch API" },
      { name: "React", category: "FRONTEND FRAMEWORK", level: "Exploring", desc: "Component architecture, hooks, state, modern Vite tooling" },
      { name: "Tailwind CSS", category: "DESIGN SYSTEM", level: "Proficient", desc: "Utility-first design, high responsiveness, dark aesthetics" },
      { name: "Basics of ML", category: "INTELLIGENT SYSTEMS", level: "Exploring", desc: "Data preprocessing, linear regression, classification concepts" },
      { name: "Git & GitHub", category: "VERSION CONTROL", level: "Intermediate", desc: "Branching workflows, commits, pull requests, repository management" },
      { name: "Problem Solving", category: "LOGICAL REASONING", level: "Active", desc: "Algorithmic thinking, debugging, analytical breakdown" }
    ]
  },

  // ---------------------------------------------------------------------------
  // 4. PROJECTS SECTION
  // ---------------------------------------------------------------------------
  projects: {
    sectionTag: "03 // SELECTED WORKS",
    headingSolid: "Crafted",
    headingOutlined: "builds.",
    subtitle: "Editorial showcase of current explorations, prototypes, and coursework projects.",

    items: [
      {
        id: "01",
        number: "01",
        title: "Personal Portfolio",
        subtitle: "Minimal Editorial Web Architecture",
        description: "A dark-aesthetic, cinematic personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Engineered with tight typographic hierarchy, fluid scroll interactions, and a single-file data configuration.",
        tags: ["REACT", "TAILWIND CSS", "FRAMER MOTION", "VITE"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Code editor and minimalist web development workspace",
        githubUrl: "https://github.com/placeholder-fasna/personal-portfolio",
        liveUrl: "#",
        featured: true,
      },
      {
        id: "02",
        number: "02",
        title: "Simple ML Model",
        subtitle: "Predictive Analysis & Classification",
        description: "An exploratory machine learning project implementing supervised classification pipelines using Python, Scikit-learn, and Pandas. Includes exploratory data analysis, feature scaling, and performance metrics visualization.",
        tags: ["PYTHON", "SCIKIT-LEARN", "PANDAS", "NUMPY"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Microchip circuit board representing machine learning compute",
        githubUrl: "https://github.com/placeholder-fasna/simple-ml-model",
        liveUrl: "#",
        featured: true,
      },
      {
        id: "03",
        number: "03",
        title: "Mini Python Game",
        subtitle: "Interactive Logic & Event Loops",
        description: "A desktop arcade game developed in Python focusing on object-oriented programming, game state management, coordinate physics, and collision detection algorithms with smooth keyboard controls.",
        tags: ["PYTHON", "OOP", "ALGORITHMS", "ARCADE LOGIC"],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Retro minimal display showing geometric digital patterns",
        githubUrl: "https://github.com/placeholder-fasna/mini-python-game",
        liveUrl: "#",
        featured: true,
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 5. JOURNEY / TIMELINE SECTION
  // ---------------------------------------------------------------------------
  journey: {
    sectionTag: "04 // TRAJECTORY",
    headingSolid: "Academic",
    headingOutlined: "journey.",
    subtitle: "Milestones, ongoing education, and key engineering growth phases.",

    timeline: [
      {
        period: "2026 - PRESENT",
        title: "B.Tech Computer Science & Engineering (AI)",
        institution: "Thejus Engineering College, Thrissur, Kerala",
        badge: "CURRENT DEGREE",
        description: "Pursuing specialized undergraduate studies in AI & CSE. Focusing on foundational mathematics, discrete structures, algorithms, object-oriented programming, and modern software engineering principles.",
      },
      {
        period: "2024 - 2026",
        title: "Higher Secondary Education (Class XII)",
        institution: "State Board of Kerala / Higher Secondary",
        badge: "COMPLETED",
        description: "Specialized in Computer Science, Mathematics, and Physical Sciences. Developed initial enthusiasm for computational logic and computer systems.",
      },
      {
        period: "2026",
        title: "Foundations in Artificial Intelligence & Python",
        institution: "Online Coursework & Guided Self-Study",
        badge: "CERTIFICATION",
        description: "Completed hands-on modules in Python scripting, foundational statistics, Git version control workflows, and automated problem-solving methodologies.",
      },
      {
        period: "ACTIVE",
        title: "Campus Tech Clubs & Peer Coding Circles",
        institution: "Thejus College Technical Society",
        badge: "COMMUNITY",
        description: "Participating in collaborative study sprints, tech talks, coding challenges, and campus open-source hackathon activities.",
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 6. CONTACT SECTION & FOOTER
  // ---------------------------------------------------------------------------
  contact: {
    sectionTag: "05 // REACH OUT",
    headingSolid: "Let's",
    headingOutlined: "talk.",
    statement: "I am always excited to connect with fellow students, engineers, mentors, and collaborators. Whether you have a project idea, feedback, or want to discuss AI, feel free to reach out.",
    
    // Contact information (Replace with your actual links and email)
    email: "fathimafasna.ca@example.com",
    emailSubject: "Hello Fasna — Connecting from your portfolio",
    
    // Social Links
    socials: [
      {
        label: "GITHUB",
        username: "@fathima-fasna",
        url: "https://github.com/placeholder-fasna",
      },
      {
        label: "LINKEDIN",
        username: "Fathima Fasna C A",
        url: "https://linkedin.com/in/placeholder-fasna",
      },
      {
        label: "INSTAGRAM",
        username: "@fasna.codes",
        url: "https://instagram.com/placeholder_fasna",
      },
      {
        label: "RESUME",
        username: "Download PDF ↗",
        url: "#resume",
        isDownload: true,
      }
    ],

    // Footer info
    footerText: "© 2026 FATHIMA FASNA C A",
    footerSubtitle: "ENGINEERED WITH REACT, TAILWIND & CINEMATIC MINIMALISM",
    locationDetail: "THRISSUR, KERALA · INDIA"
  }
};

