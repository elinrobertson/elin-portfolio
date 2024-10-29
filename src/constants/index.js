import projectone from "../assets/projectone.png";
import projecttwo from "../assets/projecttwo.png";
import projectthree from "../assets/projectthree.png";
import projectfour from "../assets/projectfour.png";
import projectfive from "../assets/projectfive.png";
import projectsix from "../assets/projectsix.png";


import html from "../assets/html-icon.png";
import css from "../assets/css-icon.png";
import javascript from "../assets/javascript-icon.png";
import typescript from "../assets/typescript-icon.png";
import react from "../assets/react-js-icon.png";
import tailwind from "../assets/tailwind-css-icon.png";
import framer from "../assets/framer-black-icon.png";
import socketio from "../assets/socket-io-icon.png";
import nodejs from "../assets/node-js-icon.png";
import npm from "../assets/npm-icon.png";
import mongodb from "../assets/mongodb-icon.png";
import api from "../assets/api-icon.png";
import php from "../assets/php-icon.png";
import wordpress from "../assets/wordpress-icon.png";
import woocommerce from "../assets/woocommerce-icon.png";
import shopify from "../assets/shopify-icon.png";


export const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hi there! 🖐️",
  introduction:
    "I’m Elin Robertson, a newly graduated fullstack developer, looking for my first opportunity in the world of coding.",
  description:
    "I have a strong passion for frontend but I love the challange of backend.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  {
    name: "PosterWorld",
    description: "Degree project - Fullstack e-commerce using MERN stack",
    image: projectthree,
    siteLink: "https://github.com/elinrobertson/PosterWorld",
    showGitHubButton: true, // Knappen visas
  },
  {
    name: "CandleStore",
    description: "School project – Integrated Stripe as a payment method.",
    image: projectone,
    siteLink: "https://github.com/elinrobertson/CandleStore",
    showGitHubButton: true, // Knappen visas
  },
  {
    name: "Chatify",
    description: "School project – Built a chat application using Socket.io.",
    image: projecttwo,
    siteLink: "https://github.com/elinrobertson/Chatify4",
    showGitHubButton: true, // Knappen visas
  },
  {
    name: "Just in Case",
    description:
      "School project - Made a small e-commerce, focus in this project was the agile work.",
    image: projectfour,
    siteLink: "https://github.com/Medieinstitutet/wie22d-projektmetodik-grupparbete-lingonen",
    showGitHubButton: true, // Knappen visas
  },
  {
    name: "TechStore",
    description: "First group project - made an e-commerce store using HTML, CSS and JavaScript",
    image: projectfive,
    siteLink: "https://github.com/samzih/tech-store",
    showGitHubButton: true, // Knappen visas
  },
  {
    name: "Blomman för dagen",
    description: "Internship project - Created a Shopify store for a local flower shop",
    image: projectsix,
    siteLink: "https://www.blommanfordagen.se",
    showGitHubButton: false, // Knappen visas
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I recently graduated from Mediainstitutet where I have studied Web development E-commerce. We have worked with both frontend and backend technologies such as HTML, CSS, JavaScript, React, NodeJS and much more.",
    "I have a strong passion for development and from our first course in school I knew that this is what I want to do for the rest of my career. I love the problem-solving aspects of the job and I like that there is always something new to learn. I also love seeing my code actually bringing something to life.",
    "I have over 15 years of experience working in sales at a customer service and with technical support. With this background I have great skills in handling customers and understanding their wants and needs. From this I am also great at setting a goal for myself and trying everything I can to reach it. I have always been a hard worker and for the lastest years I have been working in a smaller team which I really enjoyed.",
    "But now it is time for me to spread my wings and fly off to new opportunities and I would love to find a company that would take the chance on me. ",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2023 — Now",
    title: "Senior Frontend Engineer at TechCorp",
    location: "Paris, France",
    description: [
      "Leading the development of scalable frontend architecture for enterprise-level applications.",
      "Collaborating with cross-functional teams to deliver high-quality, user-centric solutions.",
      "Driving innovation through continuous improvements in performance and UI/UX design.",
    ],
  },
  {
    yearRange: "2021 — 2023",
    title: "Frontend Engineer at Startup Inc.",
    location: "Remote",
    description: [
      "Built dynamic, responsive, and accessible web applications using React, Next.js, and Tailwind CSS.",
      "Spearheaded frontend optimization efforts, resulting in a 40% performance boost.",
      "Mentored junior developers and led internal frontend workshops.",
    ],
  },
  {
    yearRange: "2018 — 2021",
    title: "Frontend Developer at Creative Solutions",
    location: "London, UK",
    description: [
      "Developed and maintained user interfaces for high-traffic websites.",
      "Worked closely with designers to implement pixel-perfect designs.",
      "Optimized websites for SEO and performance, resulting in a 30% increase in traffic.",
    ],
  },
];

export const SKILLS = [
  {
    name: "HTML",
    image: html,
  },
  {
    name: "CSS",
    image: css,
  },
  {
    name: "JavaScript",
    image: javascript,
  },
  {
    name: "TypeScript",
    image: typescript,
  },
  {
    name: "React",
    image: react,
  },
  {
    name: "Tailwind",
    image: tailwind,
  },
  {
    name: "FramerMotion",
    image: framer,
  },
  {
    name: "Socket.io",
    image: socketio,
  },
  {
    name: "NodeJS/Express",
    image: nodejs,
  },
  {
    name: "Npm",
    image: npm,
  },
  {
    name: "API Developement",
    image: api,
  },
  {
    name: "MongoDB",
    image: mongodb,
  },
  {
    name: "PHP",
    image: php,
  },
  {
    name: "Shopify",
    image: shopify,
  },
  {
    name: "WordPress",
    image: wordpress,
  },
  {
    name: "WooCommerce",
    image: woocommerce,
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "robertsonelin@gmail.com",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/yourprofile",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Elin Robertson. All rights reserved.`,
};
