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
  about:
    "Experienced Full Stack Developer with expertise in Flutter and React. Hobby Photographer and Videographer.",
  summary:
    "Over 5 years of experience in coding full-stack applications. Specialized in building cross-platform mobile apps with Flutter and web apps with React, often with a Node.js backend.\n\nI am a passionate photographer and videographer and love to combine my coding skills with my creative skills.",
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
      // {
      //   name: "Twitter",
      //   url: "https://twitter.com/truenevo",
      //   icon: XIcon,
      // },
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
      company: "Freelance App-/ Webdeveloper",
      link: "",
      badges: ["Self Employed"],
      title: "Full Stack Developer",
      start: "2025",
      end: "now",
      description:
        "Started my journey as a freelancer March 2025. Realizing all kinds of projects - Apps, Landingpages or whatever you might need!",
    },
    {
      company: "bytabo",
      link: "https://bytabo.de",
      badges: ["Team Lead", "Photographer"],
      title: "Full Stack Developer",
      start: "2019",
      end: "2025",
      description:
        "Leading the Mobile Development Team at bytabo. Built apps like dabeipackzettel, conia and onkobutler. Started with development of full-stack web apps in Angular, later switched to React and Flutter.",
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
      link: "https://fewclicks.io",
      badges: ["Intern"],
      title: "Development Intern",
      start: "2017",
      end: "2017",
      description:
        "Internship at fewclicks. Built a small ecommerce project with Laravel.",
    },
  ],
  skills: [
    "Flutter",
    "Dart",
    "JavaScript",
    "TypeScript",
    "React",
    "Three.js",
    "Node.js",
    "Go",
    "Rust",
    "MongoDB",
  ],
  projects: [
    {
      title: "My Personal Portfolio",
      techStack: ["Side Project", "WIP", "Website", "Three.js", "React"],
      description:
        "A Three.js web experience to showcase my photo-/ and videography and coding projects.",
      link: {
        label: "rouvens.work",
        href: "https://rouvens.work/",
      },
    },
    {
      title: "Pharma Trainer",
      techStack: [
        "Side Project",
        "App",
        "Flutter",
        "Dart",
        "Loopback.js",
        "Typescript",
      ],
      description: "Learning app for pharmaceutics for medicine students.",
      link: {
        label: "pharma trainer",
        href: "https://apps.apple.com/de/app/pharma-trainer/id6476123242",
      },
    },
    {
      title: "conia",
      techStack: ["App Team Lead", "App", "Flutter", "Dart", "Django"],
      description:
        "Connects employees of a company with each other. Built by bytabo.",
      link: {
        label: "conia",
        href: "https://conia.app/",
      },
    },
    {
      title: "Onkobutler",
      techStack: ["App Team Lead", "App", "Flutter", "Dart", "Node.js"],
      description: "App for cancer patients to help them with their treatment.",
      link: {
        label: "onkobutler",
        href: "https://onkobutler.de/",
      },
    },
    {
      title: "dabeipackzettel",
      techStack: ["App Team Lead", "App", "Flutter", "Dart"],
      description: "App to digitize the package inserts of your medicine.",
      link: {
        label: "dabeipackzettel",
        href: "https://dabeipackzettel.de/",
      },
    },
    {
      title: "ClaryAI",
      techStack: ["App Team Lead", "App", "Flutter", "Dart", "Supabase"],
      description: "AI-Relationship Advice",
      link: {
        label: "dabeipackzettel",
        href: "https://apps.apple.com/de/app/clary-ai/id6745343055",
      },
    },
  ],
} as const;
