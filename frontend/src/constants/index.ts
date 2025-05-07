import { NavLink, Project } from "./types";

export const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  // { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with cart functionality and payment integration.",
    image: "/images/project1.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  // Add more projects...
];
