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
  seanergy,
  nic,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  chrome_Devtools,
  jhub,
  hackerrank,
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
    id: "certificates",
    title: "Endorsements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Application Developer",
    icon: web,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
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
    name: "Chrome DevTools",
    icon :chrome_Devtools,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Seanergy Digital Services Pvt. Ltd.",
    icon: seanergy,
    iconBg: "#dfdede",
    date: "December 2023 - Current",
    points: [
      "Contributed in the development and maintainance of web application in the domain of Healthcare using React.js, FastAPI, SQL and so on.....",
      "Implemented responsive design, ensuring cross-browser compatibility.",
      "Struggled hard enough not to leave any use case left undiscussed related to all the features of Application.",
      "Participated in code reviews, architecture planning and provided constructive feedback to other developers and product managers.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Seanergy Digital Services Pvt. Ltd.",
    icon: seanergy,
    iconBg: "#dfdede",
    date: "May 2022 - November 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Product Developer Intern",
    company_name: "National Informatics Centre, Hyderabad",
    icon: nic,
    iconBg: "#383E56",
    date: "May 2021 - Jun 2021",
    points: [
      "Developing Healthcare Monitoring Smart Device (To monitor Heartbeat, Temperature) using Internet of Things(IoT) Technology.",
      "Collaborating with team members including Scientist of NIC to create high-quality products.",
    ],
  },
  {
    title: "Product Developer",
    company_name: "J Hub",
    icon: jhub,
    iconBg: "#dfdede",
    date: "May 2021 - Jun 2021",
    points: [
      "Participated in a six-week Product Engineering Workshop organised by J-HUB, JNTUH as a team",
      "Our proposed Idea was 'Food Dart' which was to provide the Regional Home prepared Food to the Migrants at reasonable prices.",
      "As a product we tried to build an Application and Website also we reached to few customers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];


const projects = [
  {
    name: "React",
    title: 'HackerRank',
    description:
      "Concepts covered in the assessment includes Routing, Rendering Elements, State Management, Handling Events, ES6 and JavaScript and Form Validation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "assessment",
        color: "pink-text-gradient",
      },
    ],
    image: hackerrank,
    source_code_link: "https://www.hackerrank.com/certificates/2a9b3b6939c8",
  },
  {
    name: "Python",
    title: 'HackerRank',
    description:
      "Topics covered in assessment are Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "assessment",
        color: "pink-text-gradient",
      },
    ],
    image: hackerrank,
    source_code_link: "https://www.hackerrank.com/certificates/085188d3984c",
  },
  {
    name: "Problem Solving",
    title: 'HackerRank',
    description:
      "This assessment covered topics of Data Structures (such as Arrays, Strings, operations on strings) and Algorithms (such as Sorting and Searching).",
    tags: [
      {
        name: "problemsolving",
        color: "blue-text-gradient",
      },
      {
        name: "assessment",
        color: "pink-text-gradient",
      },
    ],
    image: hackerrank,
    source_code_link: "https://www.hackerrank.com/certificates/b2b67698239a",
  },
];

export { services, technologies, experiences, projects
   };
