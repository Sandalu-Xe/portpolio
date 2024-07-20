import {
  mobile,
  backend,
  creator,
  iosdeveloper,
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
  carrent,
  jobit,
  tripguide,
  threejs,
  back,
  font,
  whetherapp,
  modern,
food,

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
    title: "java Developer",
    icon: web,
  },
  {
    title: "Fontend Developer",
    icon: font,
  },
  {
    title: "Backend Developer",
    icon: back,
  },
 
  {
    title: "Ios developer",
    icon: iosdeveloper,
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

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ios-App Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining applications using SwiftUI and other related technologies: Focus on creating and updating applications for iOS and macOS using SwiftUI, ensuring modern and efficient UI design.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products: Work closely with various teams to ensure the development of cohesive and high-quality applications that meet user and business needs",
      "Implementing responsive design and ensuring cross-device compatibility: Ensure the application interfaces are adaptive and function seamlessly across different iOS devices, providing a consistent user experience.",
      "Participating in code reviews and providing constructive feedback to other developers: Engage in regular code reviews to maintain code quality and share insights, fostering a culture of continuous improvement and collaboration.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [

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
    name: "Food Order-App",
    description:
      "This is a food ordering application built using the Anguler framework. The app allows users to register, log in ,location, view new products, browse the home page, contact support, and learn about the app. ",
    tags: [
      {
        name: "Anguler",
        color: "blue-text-gradient",
      },
      {
        name: "fire-base",
        color: "green-text-gradient",
      },
      {
        name: "css,scss",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/Sandalu01/Food-Order-App",
  },
  {
    name: "Apple Frameworks ",
    description:
      "This SwiftUI project displays various Apple frameworks in a grid layout. When a framework is selected, it shows detailed information about the framework.",
    tags: [
      {
        name: "SwiftUI",
        color: "blue-text-gradient",
      },
      {
        name: "fire-base",
        color: "green-text-gradient",
      },
      {
        name: "Swift",
        color: "pink-text-gradient",
      },
    ],
    image: modern,
    source_code_link: "https://github.com/Sandalu01/Apple-Framework",
  },
  {
    name: "Weather App",
    description:
      "A simple weather app built using SwiftUI that displays the current weather and forecast for a specific location.",
    tags: [
      {
        name: "SwiftUI",
        color: "blue-text-gradient",
      },
      {
        name: "fire-base",
        color: "green-text-gradient",
      },
      {
        name: "Swift",
        color: "pink-text-gradient",
      },
    ],
    image: whetherapp,
    source_code_link: "https://github.com/Sandalu01/Weather-App",
  },
];

export { services, technologies, experiences, testimonials, projects };
