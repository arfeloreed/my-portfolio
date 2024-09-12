import {
  faPython,
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faSquareJs,
  faReact,
  faSquareXTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
// assets
import iphone from "../assets/images/iphone1.webp";
import brainwave from "../assets/images/brainwave.webp";
import nike from "../assets/images/nike1.webp";
import passGen from "../assets/images/passGen.webp";
import crypto from "../assets/images/crypto.webp";
import notes from "../assets/images/booknotes.webp";

// for navbar
const sectionIds = ["home", "about", "skills", "work", "contact"];

// about section
const aboutIcons = [
  { icon: faPython, color: "#42b4e6" },
  { icon: faCss3Alt, color: "#28a4d9" },
  { icon: faGitAlt, color: "#ec4d28" },
  { icon: faHtml5, color: "#f06529" },
  { icon: faSquareJs, color: "#efd81d" },
  { icon: faReact, color: "#5ed4f4" },
];

// for iconify in skills section
const skills = [
  { icon: "fa-brands:react", name: "ReactJS" },
  { icon: "akar-icons:javascript-fill", name: "Javascript" },
  { icon: "teenyicons:nodejs-solid", name: "NodeJS" },
  { icon: "simple-icons:python", name: "Python" },
  { icon: "cib:postgresql", name: "PostgreSQL" },
  { icon: "icomoon-free:html-five", name: "HTML5" },
  { icon: "devicon-plain:css3", name: "CSS3" },
  { icon: "skill-icons:bash-dark", name: "BASH" },
  { icon: "devicon-plain:linux", name: "Linux" },
  { icon: "iconoir:git-solid", name: "GIT" },
  { icon: "bi:github", name: "Github" },
  { icon: "devicon-plain:go", name: "Go" },
  { icon: "file-icons:electron", name: "ElectronJS" },
  { icon: "akar-icons:sass-fill", name: "SASS" },
  { icon: "ri:bootstrap-fill", name: "Bootstrap" },
];

// work section
const projects = [
  {
    img: iphone,
    name: "Iphone Landing Page",
    desc: "Made with React-TS and Tailwindcss",
    link: "https://reediphone.netlify.app",
  },
  {
    img: brainwave,
    name: "Brainwave Landing Page",
    desc: "Made with React-TS and Tailwindcss",
    link: "https://aisupremacy.netlify.app",
  },
  {
    img: nike,
    name: "Nike Landing Page",
    desc: "Made with React and Tailwindcss",
    link: "https://nikereed.netlify.app/",
  },
  {
    img: passGen,
    name: "Password Generator",
    desc: "Made with React, NodeJs and PostgreSQL",
    link: "https://reedpassgen.netlify.app/",
  },
  {
    img: crypto,
    name: "Crypto Web App",
    desc: "Made with React and API from coingecko",
    link: "https://reedcryptos.netlify.app/",
  },
  {
    img: notes,
    name: "Booknotes",
    desc: "Made with React, NodeJs and PostgreSQL",
    link: "https://reednotes.netlify.app/",
  },
];

// contact section
const socials = [
  { icon: faSquareXTwitter, link: "https://twitter.com/ReedTorralba" },
  { icon: faInstagram, link: "https://www.instagram.com/reedtorz" },
  { icon: faLinkedinIn, link: "https://www.linkedin.com/in/arfeloreed" },
  { icon: faGithub, link: "https://github.com/arfeloreed" },
];

export { sectionIds, aboutIcons, skills, projects, socials };
