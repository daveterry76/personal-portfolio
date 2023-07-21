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
  meta,
  starbucks,
  tesla,
  shopify,
  helixgade,
  edtify,
  carrent,
  jobit,
  tripguide,
  informher,
  expensetracker,
  airbnb,
  threejs,
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
    title: "Frontend Engineer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  {
    title: "Writer",
    icon: creator,
  },
];

const technologies = [
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "Helixgade Technologies",
    icon: helixgade,
    iconBg: "#383E56",
    date: "April 2022 - January 2023",
    points: [
      "Worked in an agile environment with daily stand-ups, kept track of userstories/bugs in GitHub projects, and participated in 1/2 hours of sprint reviews and sprint retrospectives per week.",
      "Assisted the development team in developing a WordPress website with testing, deployment, and updates.",
      "Used source control tools (GitHub) appropriately depending on the task at hand and participated in daily standups when applicable.",
      "Collaborated with the product design and mobile app development teams to build applications for clients.",
      "Identified and implemented dynamic web solutions in accordance to company standards and best practices.",
      "Learnt new frontend technologies and techniques while building projects with the team.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Edtify",
    icon: edtify,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Developing themes for web applications using React.js, Next.js and other related technologies.",
      ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "InformHer",
    description:
      "Web-based platform that allows users, especially young female teens and adults to ask questions about their mental and sexual health and experts to answer it to the best of their knowledge.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: informher,
    link: "https://infrom-her-cea867eis-helixgade.vercel.app/",
    source_code_link: "https://github.com/daveterry76/",
  },
  {
    name: "Expense tracker",
    description:
      "Web application that enables users to manage their income and expenses efficiently.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "contextapi",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
    ],
    image: expensetracker,
    link: "https://expense-tracker-zeta-ten.vercel.app/",
    source_code_link: "https://github.com/daveterry76/",
  },
  {
    name: "Airbnb",
    description:
      "A minimalistic booking platform (airbnb) that allows users to book hotels with ease.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    link: "https://hotel-booking-app-p3pm.vercel.app/",
    source_code_link: "https://github.com/daveterry76/",
  },
];

export { services, technologies, experiences, testimonials, projects };
