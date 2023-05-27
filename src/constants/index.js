import {
  mobile,
  backend,
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
  threejs,
  luminous,
  nestle,
  express,
  proompt,
  netflixclone,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Fullstack Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "expressjs",
    icon: express,
  },
];

const experiences = [
  {
    title: "IT Intern",
    company_name: "Nestle Pakistan",
    icon: nestle,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Sept 2022",
    points: [
      "Developed a deep understanding of crisis management procedures, meticulously studying and analysing documentations to ensure preparedness for potential incidents.",
      "Demonstrated exceptional analytical skills in proactively identifying and addressing minor risks using their Cybersecurity Risk Management System.",
      "Collaborated closely with brand managers, facilitating meetings to enhance understanding of the business process of applying for and approving new products ad changes in existing products",
    ],
  },
];

const projects = [
  {
    name: "LUMINOUS",
    description:
      "A React Native Android application that allows Student Societies and University Administration to add Events which would be added to a map in the app using the Google Maps API.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "orange-text-gradient",
      },
      {
        name: "expo",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: luminous,
    source_code_link:
      "https://github.com/nibi420/Luminous_2.0/tree/HickeryDickery-patch-1",
  },
  {
    name: "Proompt",
    description:
      "An AI Prompt Sharing platform to allow everyone to benefit from ingenious ways of getting excellent results from prompt-based AI tools and softwares.",
    tags: [
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },

      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: proompt,
    source_code_link: "https://github.com/HickeryDickery/proompt",
  },
  {
    name: "Netflix Clone (Frontend)",
    description:
      "A simple frontend React app which fetches information about movies and TV shows from TMDB and displays them in the format of the Netflix website.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: netflixclone,
    source_code_link: "https://github.com/HickeryDickery/netflix-clone",
  },
];

export { services, technologies, experiences, projects };
