import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/icons";

export const RESUME_DATA = {
  name: "Rouven Lührs",
  initials: "RL",
  location: "Bamberg, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Bamberg",
  about: "Experienced Full Stack Developer with expertise in Flutter and React",
  summary:
    "Over 5 years of experience in coding full-stack applications. Specialized in building cross-platform mobile apps with Flutter and web apps with React, often including a Node.js backend. Skilled in leading development teams and working with various clients.",
  avatarUrl: "profilepic.png",
  personalWebsiteUrl: "https://luehrs.dev",
  contact: {
    email: "rouven@luehrs.dev",
    // tel: "+49 123 456789",
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
      // You can add more social links if needed
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
      company: "bytabo",
      link: "https://bytabo.de",
      badges: ["Team Lead", "Photographer"],
      title: "Full Stack Developer",
      start: "2019",
      end: "2024",
      description:
        "Leading the Mobile Development Team at bytabo. Built apps like dabeipackzettel, conia, onkobutler. Started with development of full-stack web apps in Angular, later switched to React and backends in Node.js with MongoDB.",
    },
    {
      company: "bytabo",
      link: "https://bytabo.de",
      badges: ["Trainee"],
      title: "Trainee Developer",
      start: "2018",
      end: "2019",
      description:
        "Started as a trainee developer where I dived deeper into web development with Angular while working on real projects.",
    },
    {
      company: "fewclicks",
      link: "https://fewclicks.example.com",
      badges: ["Intern"],
      title: "Development Intern",
      start: "2017",
      end: "2017",
      description:
        "Internship at fewclicks. Built a small ecommerce project with Laravel.",
    },
  ],
  skills: [
    "JavaScript",
    "Flutter",
    "React",
    "Dart",
    "Rust",
    "Three.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
  ],
  projects: [
    {
      title: "My Personal Portfolio",
      techStack: ["Website", "Three.js", "React"],
      description:
        "A Three.js web experience to showcase my photo-/ and videography and coding projects.",
      link: {
        label: "rouvens.work",
        href: "https://rouvens.work/",
      },
    },
    {
      title: "Pharma Trainer",
      techStack: ["App", "Flutter", "Dart", "Loopback.js", "Typescript"],
      description:
        "Learning app for pharmaceutics for medicine students. Side Project.",
      link: {
        label: "pharma trainer",
        href: "https://pharmatrainer.example.com/",
      },
    },
    {
      title: "conia",
      techStack: ["App", "Flutter", "Dart", "Django"],
      description:
        "Connects employees of a company with each other. Built by bytabo.",
      link: {
        label: "conia",
        href: "https://conia.app/",
      },
    },
    {
      title: "Onkobutler",
      techStack: ["App", "Flutter", "Dart", "Node.js"],
      description: "App for cancer patients to help them with their treatment.",
      link: {
        label: "onkobutler",
        href: "https://onkobutler.de/",
      },
    },
  ],
} as const;
