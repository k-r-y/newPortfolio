import { BiCodeAlt, BiServer, BiPaintRoll } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa6";

import Aperture from "../assets/aperture.webp";
import Pfp from "../assets/pic.webp";
import SkillBuilderImg from "../assets/skillBuilder.png";
import RandomyImg from "../assets/randomy.png";
import PcgImg from "../assets/pcg.png";
import YazzieImg from "../assets/yazzie.png";

export const contactDetails = [
  { id: 1, Title: "Email", Data: "casianoprince5@gmail.com" },
  { id: 2, Title: "School", Data: "Kolehiyo ng Lungsod ng Dasmariñas" },
  { id: 3, Title: "Location", Data: "Dasmariñas City, Cavite" },
];

export const stats = [
  { id: 1, Title: "Projects", Value: 5 },
  { id: 2, Title: "Technologies", Value: "10+" },
  { id: 3, Title: "Reviews", Value: 4.5 },
];

export const techStack = [
  { id: 1, Type: "Backend & System", Skills: ["Node.js", "PHP", "RESTful APIs"] },
  { id: 2, Type: "Frontend & UI", Skills: ["Vite", "React", "Tailwind CSS", "CSS", "HTML", "Javascript (ES6+)"] },
  { id: 3, Type: "Database & DevOps", Skills: ["Git", "MySQL", "AI-Assisted Workflow"] },
  { id: 4, Type: "Design Architecture", Skills: ["Minimalism", "BentoGrid", "UI/UX", "Responsive Web Design"] },
];

export const projectList = [
  {
    id: 1,
    repoName: "yazzie-2.0",
    Title: "Yazzie Catering OMS",
    ImgLink: YazzieImg,
    Description: "A web-based order management system designed for catering businesses to streamline event bookings, manage client relationships, process payments, and coordinate job assignments with role-based scoped access.",
    ProjectLink: "https://github.com/k-r-y/yazzie-2.0",
    Tech: ["PHP", "MySQL", "CSS3", "Bootstrap", "JavaScript"],
    Category: "Fullstack",
    Views: "0",
    Stars: "0",
    Updated: "Jun 2026",
  },
  {
    id: 2,
    repoName: "skill-builder",
    Title: "Skill Builder",
    ImgLink: SkillBuilderImg,
    Description: "A platform for building and showcasing skills with integrated AI generation and Markdown previews.",
    ProjectLink: "https://github.com/k-r-y/skill-builder",
    DemoLink: "https://kry-skill-builder.vercel.app",
    Tech: ["React", "Tailwind CSS", "Vite", "GenAI"],
    Category: "Frontend",
    Views: "0",
    Stars: "0",
    Updated: "Aug 2026",
  },
  {
    id: 3,
    repoName: "project-context-generator",
    Title: "Project Context Generator",
    ImgLink: PcgImg,
    Description: "A utility tool designed to generate project context for AI workflows and development environments with Firebase integration.",
    ProjectLink: "https://github.com/k-r-y/project-context-generator",
    DemoLink: "https://kry-project-context-generator.vercel.app",
    Tech: ["React", "Firebase", "Zustand", "Framer Motion"],
    Category: "Frontend",
    Views: "0",
    Stars: "0",
    Updated: "Aug 2026",
  },
  {
    id: 4,
    repoName: "apertureProject",
    Title: "Aperture Appointment System",
    ImgLink: Aperture,
    Description: "A web-based booking and management platform for photography and videography studios. Streamlines online package booking, consultation scheduling, invoicing, and image gallery uploads.",
    ProjectLink: "https://github.com/k-r-y/apertureProject",
    Tech: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    Category: "Fullstack",
    Views: "0",
    Stars: "0",
    Updated: "Jul 2026",
  },
  {
    id: 5,
    repoName: "randomGenerator",
    Title: "Random Generator Utility",
    ImgLink: RandomyImg,
    Description: "A fast, interactive application for generating random values with visual feedback. Built with React 19, TypeScript, and Tailwind CSS, complete with celebratory confetti animations.",
    ProjectLink: "https://github.com/k-r-y/randomGenerator",
    DemoLink: "https://kry-random-generator.vercel.app",
    Tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    Category: "Frontend",
    Views: "0",
    Stars: "0",
    Updated: "Jul 2026",
  },
];

export const galleryImages = [
  { id: 1, title: "Profile", src: Pfp },
];

export const categories = [
  {
    id: 1,
    title: "Frontend & UI Development",
    icon: <BiCodeAlt className="text-xl text-neutral-800 dark:text-neutral-200" />,
    skills: [
      { name: "React / React 19", level: "30%" },
      { name: "Vite & Build Tools", level: "35%" },
      { name: "Tailwind CSS v4", level: "75%" },
      { name: "JavaScript (ES6+)", level: "70%" },
      { name: "HTML5 / Semantic markup", level: "85%" },
      { name: "CSS3 / Custom properties", level: "80%" },
    ]
  },
  {
    id: 2,
    title: "Backend & Systems",
    icon: <BiServer className="text-xl text-neutral-800 dark:text-neutral-200" />,
    skills: [
      { name: "Node.js / Express", level: "20%" },
      { name: "PHP (OOP & MVC)", level: "35%" },
      { name: "RESTful API Design", level: "15%" },
      { name: "Middleware & Auth (JWT)", level: "10%" },
      { name: "Asynchronous Workflows", level: "10%" },
    ]
  },
  {
    id: 3,
    title: "Database & DevOps",
    icon: <FaDatabase className="text-lg text-neutral-800 dark:text-neutral-200" />,
    skills: [
      { name: "MySQL / Relational Design", level: "75%" },
      { name: "Git & Version Control", level: "40%" },
      { name: "Vercel / Netlify Deployments", level: "35%" },
      { name: "AI-Assisted Dev Workflows", level: "10%" },
    ]
  },
  {
    id: 4,
    title: "Design Architecture",
    icon: <BiPaintRoll className="text-xl text-neutral-800 dark:text-neutral-200" />,
    skills: [
      { name: "Responsive Web Design", level: "85%" },
      { name: "BentoGrid Layout Design", level: "70%" },
      { name: "Minimalist Aesthetic Design", level: "75%" },
      { name: "UI/UX Prototyping (Figma)", level: "65%" },
    ]
  }
];

export const tools = ["VS Code", "Git / GitHub", "npm / Node Package Manager", "Chrome DevTools", "Postman", "Web3Forms", "Figma"];

export const fallbackReadmes = {
  "yazzie-2.0": `## Yazzie Catering OMS

Order management system for catering operations with booking, payments, and staff coordination.

### Key Features:
- **Booking Management:** Pax-based pricing tiers and dynamic quotations.
- **Payment Processing:** Deposit tracking with audit trails.
- **Role-Based Access:** Super admin, admin, frontdesk, and staff roles.
- **Comprehensive Audit Log:** History of financial and booking changes.

### Tech Stack:
- **Backend:** PHP 8.0+ (procedural, no framework)
- **Database:** MySQL 8.0+
- **Frontend:** HTML5, CSS3, Bootstrap 5, Vanilla JavaScript
- **Email:** PHPMailer + Gmail SMTP`,

  apertureProject: `## Aperture Studio Management System

A web-based booking and management platform for photography and videography studios.

### Key Features:
- **Online Booking:** Select packages, add-ons, and dates with real-time price calculation.
- **Admin Dashboard:** Overview of bookings, revenue, and activity metrics.
- **Event Calendar:** Visual schedule of upcoming and completed events.
- **Invoicing:** Generate PDF invoices.

### Tech Stack:
- **Backend:** PHP
- **Database:** MySQL
- **Frontend:** HTML, CSS, JavaScript`,

  "skill-builder": `## Skill Builder

A platform for building and showcasing skills with integrated AI generation and Markdown previews.

### Key Features:
- **AI Integration:** Automatically generate context and content.
- **Markdown Previews:** Real-time rendering of complex markdown structures.
- **Dynamic Portfolios:** Export and showcase generated skills.

### Tech Stack:
- **Frontend:** React, Tailwind CSS, Vite
- **AI Integration:** Google GenAI
- **State Management:** React Hooks Context`,

  "project-context-generator": `## Project Context Generator

A utility tool designed to generate project context for AI workflows and development environments with Firebase integration.

### Key Features:
- **Context Aggregation:** Bundle code structures into single context files.
- **Firebase Sync:** Store and retrieve context across devices.
- **Animated UI:** Smooth transitions with Framer Motion.

### Tech Stack:
- **Frontend:** React, Vite
- **State Management:** Zustand
- **Database & Auth:** Firebase
- **Styling & Animation:** Tailwind CSS, Framer Motion`,

  "randomGenerator": `## Random Generator Utility

A fast, interactive application for generating random values with visual feedback. Built with React 19, TypeScript, and Tailwind CSS, complete with celebratory confetti animations.

### Key Features:
- **Number Generation:** Min/max ranged generation with immediate feedback.
- **List Randomization:** Pick a random winner from a custom list.
- **Celebration Effects:** Confetti animations trigger on successful picks.
- **Modern Stack:** Fully typed with TypeScript on React 19.

### Tech Stack:
- **Framework:** React 19, Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS`
};
