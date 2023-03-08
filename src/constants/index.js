import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  aws,
  blog,
  partnerslc,
  markdown,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "blog",
    title: "Blog",
    url: "https://poetic-snickerdoodle-2591ef.netlify.app/"
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];



const projects = [
  {
    name: "Learn With Me",
    description:
      "I have created my personal blog using Next.js and Tailwind CSS, allowing the content to be sourced from markdown files and rendered with Next.js.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/andrewcaskey/nextjs-blog",
  },
  {
    name: "Partners LC",
    description:
      "A fully responsive and functional website I built and manage hosting for. Partners Loss Consulting is an Illinois based public adjusting company.",
    tags: [
      {
        name: "aws",
        color: "blue-text-gradient",
      },
      {
        name: "elementor",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: partnerslc,
    source_code_link: "https://github.com/",
  },
  {
    name: "Markdown Previewer",
    description:
      "A real time markdown preview built with React.js. Hosted on Netlify with GitHub integration. View the source code on GitHub.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "git",
        color: "green-text-gradient",
      },
      {
        name: "markdown",
        color: "blue-text-gradient",
      },
    ],
    image: markdown,
    source_code_link: "https://github.com/andrewcaskey/markdown-live",
  },
];

export { services, technologies, projects };
