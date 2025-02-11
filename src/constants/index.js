import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  swift,
  kotlin,
  reactjs,
  bootstrap,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  aws,
  klick,
  apple,
  td,
  bmo,
  carrent,
  jobit,
  tripguide,
  angular,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "iOS App Developer",
    icon: mobile,
  },
  {
    title: "Android App Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
  {
    title: "Mobile Application Developer",
    icon: mobile,
  },
  {
    title: "Quality Assurance Analyst",
    icon: web,
  },
];
const technologies = [
  // Web technologies
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
    name: "Angular",
    icon: angular,
  },
  {
    name: "Bootstrap",
    icon: bootstrap, 
  },

  // Mobile technologies
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },

  // Backend & Database technologies
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  // Other important tools
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "App Developer Mentor",
    company_name: "Apple & CEC",
    icon: apple,
    iconBg: "#383E56",
    date: "Feb 2023 – Jan 2025",
    points: [
      "Managed and mentored high school students in designing, developing, testing, and deploying iOS apps using Swift.",
      "Also responsible for developing web applications using HTML, CSS, and JavaScript, enhancing program tools and resources.",
      "Provided comprehensive support through the app development lifecycle, ensuring high standards in both web and mobile projects.",
      "Led initiatives that resulted in a 25% increase in program applications and a 90% success rate in project completions.",
    ],
  },
  {
    title: "Software Developer - Mobile",
    company_name: "TD Bank",
    icon: td,
    iconBg: "#E6DEDD",
    date: "May 2023 – Aug 2023",
    points: [
      "Designed, developed, tested, and deployed mobile applications within the financial sector, focusing on enhancing user engagement.",
      "Worked extensively with Swift for iOS and Kotlin for Android platforms, implementing features tailored to banking needs.",
      "Collaborated closely with cross-functional teams to ensure seamless integration and deployment of banking applications.",
      "Applied best practices in software development to meet high standards for security and user data protection.",
    ],
  },
  {
    title: "Quality Assurance Analyst",
    company_name: "BMO: The Bank of Montreal",
    icon: bmo,
    iconBg: "#383E56",
    date: "Jan 2023 – May 2023",
    points: [
      "Conducted extensive testing across web and mobile platforms, including UI, unit, and performance tests in various environments.",
      "Implemented both manual and automated testing strategies to enhance application quality and user experience.",
      "Collaborated with development teams to identify and resolve defects, ensuring robust product releases.",
      "Communicated effectively with technical and non-technical stakeholders to translate testing results into actionable insights.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Klick Health",
    icon: klick,
    iconBg: "#E6DEDD",
    date: "May 2022 – Aug 2022",
    points: [
      "Engaged in the full lifecycle of designing, developing, testing, and deploying web solutions in the healthcare marketing sector.",
      "Utilized HTML, CSS, JavaScript, and Adobe Experience Manager (AEM) to deliver high-quality client-focused solutions.",
      "Interfaced directly with clients to align development projects with their expectations and business goals.",
      "Facilitated communications and project requirements with non-technical stakeholders to ensure clarity and project alignment.",
    ],
  },
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
