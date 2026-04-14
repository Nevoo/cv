import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/icons";

export const RESUME_DATA = {
  name: "Rouven Lührs",
  initials: "RL",
  location: "World",
  locationLink: "https://www.google.com/maps/place/Earth",
  about:
    "Full-stack developer shipping AI agents and cross-platform apps for businesses.",
  summary:
    "Been shipping production software for 8+ years. Full-stack web (React, Angular, Node.js), cross-platform mobile with Flutter, and AI in products since 2018. Led teams from kickoff to ship along the way.\n\nWhen I'm not coding, I'm behind a camera. Photo and video are the other half of how I see the world, and most of it happens on the move. Digital nomad life, so wherever I land tends to shape what I make.\n\nThese days I run arlou, where I build custom AI agents for businesses that want to put the tech to real work.",
  avatarUrl: "profilepic.png",
  personalWebsiteUrl: "https://luehrs.dev",
  contact: {
    email: "rouven@luehrs.dev",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Nevoo",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rouvenluehrs/",
        icon: LinkedInIcon,
      },
      {
        name: "Twitter",
        url: "https://twitter.com/truenevo",
        icon: XIcon,
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/channel/UCF5p-sUVFges9QqO_48eYBQ",
        icon: YouTubeIcon,
      },
    ],
  },
  education: [
    {
      school: "State Vocational School Center Bamberg",
      degree: "State-certified technical assistant for computer science",
      start: "2016",
      end: "2018",
    },
  ],
  work: [
    {
      company: "arlou",
      link: "https://arlou.dev",
      badges: ["Freelance", "AI Agents", "Founder"],
      title: "Freelance Developer",
      start: "2025",
      end: "present",
      description:
        "One-person AI agent studio. I design, build, ship, and maintain custom AI agents for businesses.",
      highlights: [
        "Still working with Amgen on Onkobutler, a cancer patient companion app I first built during my bytabo years and now maintain freelance.",
        "Mensorai: Chrome extension for active learning from YouTube. Research agent, video chat, RAG over a saved library, summaries and quizzes.",
        "ClaryAI: AI-powered relationship advice app, live on the App Store.",
        "Pharma Trainer: Flutter learning app for medical students studying pharmaceutics.",
        "Stack: TypeScript, Node.js, React, Flutter, Python.",
      ],
    },
    {
      company: "bytabo",
      link: "https://bytabo.de",
      badges: ["Team Lead", "Full Stack", "Enterprise"],
      title: "Full Stack Developer & Technical Project Manager",
      start: "2019",
      end: "2025",
      description:
        "Led technical delivery on client projects across mobile (Flutter) and web (React, Angular, Node.js). Ran teams of 6 to 12 as technical project manager.",
      highlights: [
        "Onkobutler (Amgen, 2019–2025): cancer patient companion app. Therapy tracking, vitals journal, automated PDF reports sent to doctors. Flutter, Node.js, Firebase, MongoDB. Team of 10. Still ongoing, now freelance.",
        "Dabeipackzettel (Dr. Pfleger, 2019–2022): digitizing pharmaceutical package inserts. Led a 12-person team over 2.5 years.",
        "Conia (2022–2025): employee communication platform for mid-sized companies. Flutter, Django, Wagtail, Firebase. Team of 6.",
        "LEGO Brick Flash App (2019): seasonal campaign app for LEGO promotions and coupons. Flutter, Firebase. Team of 10.",
        "Fitness nutrition app (2020–2022): algorithmic meal recommendations for sport. Flutter, Node.js, MongoDB. Team of 10.",
        "\"Paul\" chatbot (2019): AI chatbot searching an internal knowledge base for a healthcare client. IBM Watson, Node.js, AWS. Team of 10. My first AI work in production.",
        "Bosch (2018): tablet-first shortcut configurator with admin panel. Angular, Node.js, MongoDB, Electron. Team of 8.",
        "Belsana (2019): knowledge management tool for product data search. Angular, Node.js, MongoDB, ElasticSearch, Docker. Team of 7.",
        "Brose (2019): location data visualization dashboard. Angular, Node.js, MongoDB. Team of 6.",
      ],
    },
    {
      company: "bytabo",
      link: "https://bytabo.de",
      badges: ["Trainee"],
      title: "Trainee Developer",
      start: "2018",
      end: "2019",
      description:
        "Joined bytabo as a trainee after vocational IT training. Worked hands-on on early client projects in web and mobile before moving into a full-time developer role.",
    },
    {
      company: "fewclicks",
      link: "https://fewclicks.io",
      badges: ["Intern"],
      title: "Development Intern",
      start: "2017",
      end: "2017",
      description:
        "Internship during vocational IT training. Built a Laravel backend for an online shop and hand-coded HTML email templates.",
    },
  ],
  skills: [
    "Flutter",
    "Dart",
    "TypeScript",
    "JavaScript",
    "React",
    "Angular",
    "Node.js",
    "Python",
    "Django",
    "Claude",
    "OpenAI",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Docker",
    "AWS",
    "Azure DevOps",
    "Three.js",
    "Figma",
  ],
  projects: [
    {
      title: "arlou",
      techStack: [
        "Company",
        "AI Agents",
        "Claude",
        "Node.js",
        "Python",
        "TypeScript",
      ],
      description:
        "One-person studio building and maintaining custom AI agents for businesses.",
      link: {
        label: "arlou.dev",
        href: "https://arlou.dev",
      },
    },
    {
      title: "Mensorai",
      techStack: [
        "Product",
        "Chrome Extension",
        "RAG",
        "Claude",
        "TypeScript",
      ],
      description:
        "Chrome extension for active learning from YouTube. Research agent, video chat, RAG over a saved library, summaries and quizzes.",
      link: {
        label: "mensorai.com",
        href: "https://mensorai.com",
      },
    },
    {
      title: "Onkobutler (Amgen)",
      techStack: [
        "Team Lead",
        "App",
        "Flutter",
        "Node.js",
        "Firebase",
        "MongoDB",
      ],
      description:
        "Cancer patient companion for Amgen. Therapy tracking, vitals journal, automated PDF reports sent to treating doctors. Ongoing since 2019.",
      link: {
        label: "onkobutler",
        href: "https://onkobutler.de/",
      },
    },
    {
      title: "Dabeipackzettel (Dr. Pfleger)",
      techStack: ["Team Lead", "App", "Flutter", "Node.js", "Azure"],
      description:
        "Digitizing pharmaceutical package inserts. Led a 12-person team over 2.5 years.",
    },
    {
      title: "Conia",
      techStack: ["Team Lead", "App", "Flutter", "Django", "Firebase"],
      description:
        "Employee communication platform for mid-sized companies. Built at bytabo with a team of 6.",
      link: {
        label: "conia",
        href: "https://conia.app/",
      },
    },
    {
      title: "ClaryAI",
      techStack: ["Side Project", "App", "Flutter", "AI"],
      description:
        "AI-powered relationship advice app, live on the App Store.",
    },
  ],
} as const;
