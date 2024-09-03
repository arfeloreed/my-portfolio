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
import passGen from "../assets/images/passGen.webp";
import crypto from "../assets/images/crypto-app.webp";
import notes from "../assets/images/booknotes.webp";
import keeper from "../assets/images/keeper.webp";
import blog2 from "../assets/images/blog-flask.webp";
import nike from "../assets/images/nike1.webp";

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
  {
    img: keeper,
    name: "Keeper",
    desc: "Made with React, NodeJs and PostgreSQL",
    link: "https://keeper-ol3w.onrender.com/",
  },
  {
    img: nike,
    name: "Nike Landing Page",
    desc: "Made with React and Tailwindcss",
    link: "https://nikereed.netlify.app/",
  },
  {
    img: blog2,
    name: "Blog Web App",
    desc: "Made with Flask and Jinja templating",
    link: "https://reedtorz.pythonanywhere.com/",
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
