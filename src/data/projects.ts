// projects.ts
import cloudnovaImg from "../assets/cloudnovaH.png";
import cloudnovaImg2 from "../assets/cblog.png";
import cloudnovaImg3 from "../assets/cproj.png";
import ralahamiImg from "../assets/RalaHamiF.png";
import YummyImg from "../assets/yummyH.png"; 

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  points: string[];

  // ✅ added (placeholders supported)
  image?: string; // primary image (thumbnail/cover)
  images?: string[]; // ✅ added: gallery (3 images)
  demoUrl?: string; // live link
  repoUrl?: string; // github link
  year?: string; // "2025"
  role?: string; // "Full-Stack Developer"
  category?: string; // "Web App", "Android", etc
};

export const projects: Project[] = [
  {
    title: "CloudNova — Company Portfolio (MERN)",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "Tailwind CSS",
      "EmailJS/Nodemailer",
    ],
    description:
      "Modern company portfolio website for CloudNova with service pages, project/case-study showcase, and a contact workflow.",
    points: [
      "Built a responsive React UI with clean sections (Hero, Services, About, Projects, Testimonials, Contact) and smooth animations for a modern brand feel.",
      "Developed Express + MongoDB REST APIs to manage portfolio content (projects/services/testimonials) with JWT-based admin access for secure updates.",
      "Implemented a contact form with validation + email notifications and deployed the app with environment-based config and production-ready routing.",
    ],

    image: cloudnovaImg,
    images: [cloudnovaImg, cloudnovaImg2, cloudnovaImg3],
    demoUrl:
      "https://cloud-nova-portfolio-git-main-sulakshana-kalugamages-projects.vercel.app?_vercel_share=KBHRddu0GHX2DNPB9Gm8sOYTGItuVQyE",
    repoUrl: "https://github.com/sulakshana2003/CloudNova-Portfolio",
    year: "2025",
    role: "Full-Stack Developer",
    category: "Company Portfolio / Web App",
  },

  {
    title: "Ralahami.lk — Restaurant Ordering & Ops Platform",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "WebSockets",
    ],
    description:
      "End-to-end restaurant ordering platform with inventory and operations tools.",
    points: [
      "Built responsive Next.js front-end with Tailwind CSS and strong Lighthouse scores.",
      "Developed API with JWT-based RBAC, inventory (BOM) tracking, supplier workflows, and real-time KOT updates via Pusher.",
      "Integrated Stripe (sandbox) and Cash-on-Delivery with audit logs and CI/CD deployments.",
    ],

    image: ralahamiImg,
    images: [ralahamiImg, ralahamiImg, ralahamiImg],
    demoUrl:
      "https://ralahami-website-f35c.vercel.app?_vercel_share=dFKFq3UA7A6SqzHpq71h4ZO2teCUtiGc",
    repoUrl: "https://github.com/sulakshana2003/Ralahami-website",
    year: "2025",
    role: "Full-Stack Developer",
    category: "SaaS / Platform",
  },
  {
    title: "Yummy Food Delivery Website",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Node.js",
      "MongoDB",
    ],
    description:
      "Responsive food delivery site with online ordering and real-time order status.",
    points: [
      "Front-end optimized for mobile with 95+ Lighthouse performance score.",
      "Implemented Node.js/Express backend with MongoDB for menu, cart and order workflows plus Stripe payments and WebSocket-based live order status.",
    ],

    image: YummyImg,
    images: [YummyImg, YummyImg, YummyImg],
    demoUrl: "https://your-demo-link.com",
    repoUrl: "https://github.com/sulakshana2003/YummYDemo-2.0",
    year: "2024",
    role: "Full-Stack Developer",
    category: "Web App",
  },
];
