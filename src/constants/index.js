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
 
  back,
  font,
  whetherapp,
  modern,

food,
mobilemart,
TMV,
japura,
dev,
reserve,
weblink,
realtime,
object,
advance

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
    id: "project",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
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
    title: "Web Application Developer",
    icon: font,
  },
  {
    title: "Backend Developer",
    icon: back,
  },
 
  {
    title: "Swift Ui Developer",
    icon: iosdeveloper,
  },
];

const technologies = [

 
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "git",
    icon: git,
  },

];
export const education = [
  {
    date: "2018-2020",
    degree: "A/L Engineering Technology Steam ",
    institution_name: "A/Thalawa National School ",
    icon:TMV,
    iconBg: "#ffffff",
    points: [
      "Engineering Technology ",
      "Science for Technology ",
      "Information  & Communication Technology",
    ],
   
  },
  {
    date: "2023-2024 ",
    degree: "Master programme diploma",
    institution_name: "Developer Stack Acedamy",
    icon: dev,
    iconBg: "#ffffff",
    points: [
      "developed java and java-fx project",
      "react , javascript and node js learned",
      "developed inonic mobile applications and back end with  firebase",
    ],
  },
  {
    date: "2021 - 2025",
    degree: "Bachelor of Information and Communication Tech. Honors(Specialized in Software)",
    institution_name: "Faculty Of Technology,University of Sri jayawardhenepura",
    icon: japura,
    iconBg: "#ffffff",
    points: [
      
      "Member of ICTS at Faculty Of Technology.",
      "Member of Astronomy club at University of Sri jayawardhenepura",
    ],
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "................................................................",
    icon: starbucks,
    iconBg: "#383E6",
    date: "March 2### - April 2###",
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
    image: "https://media.istockphoto.com/id/1499761455/photo/portrait-of-smiling-50s-stylish-confident-mature-businesswoman-middle-aged-company-ceo.jpg?s=612x612&w=0&k=20&c=rZmKoShimq1enUcdJveCEAe3OxE-cwgKw8moRx_1pvo=",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://media.istockphoto.com/id/1513285157/photo/leader-ceo-and-manager-in-a-boardroom-meeting-with-his-team-for-planning-strategy-and.jpg?s=612x612&w=0&k=20&c=5pazFxAN8yRzwVdhNsyxtSEqLfEdMlGVGdDbbe7L5Ec=",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://media.istockphoto.com/id/1499761455/photo/portrait-of-smiling-50s-stylish-confident-mature-businesswoman-middle-aged-company-ceo.jpg?s=612x612&w=0&k=20&c=rZmKoShimq1enUcdJveCEAe3OxE-cwgKw8moRx_1pvo=",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://media.istockphoto.com/id/1499761455/photo/portrait-of-smiling-50s-stylish-confident-mature-businesswoman-middle-aged-company-ceo.jpg?s=612x612&w=0&k=20&c=rZmKoShimq1enUcdJveCEAe3OxE-cwgKw8moRx_1pvo=",
  },
];

const projects = [
  {
    name: "Food Order-App",
    points: [
      "used fire base Authentication",
      "used storage Management for upload images and retrive functionalities",
      "used fire base database for saving paswords and emails",
    ],
  

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
    name: "Object Detection ",
   
    tags: [
      {
        name: "Jupyter Notebook,google collabse",
        color: "blue-text-gradient",
      },
      {
        name: "python,cocoma model",
        color: "green-text-gradient",
      },
      {
        name: "Html,css",
        color: "pink-text-gradient",
      },
    ],

    points: [
      "captured objectes of any photos ",         
      "when insert vidoes captured  it's objects.",
    ],
    image: object, 
    source_code_link: "https://github.com/Sandalu-Xe/Object-detection",
  },
  {
    name: "Apple Frameworks ",
    points: [
      "used SF symbols",
      "used re-usable functionalities",
      "developed  using stacks",
    ],

    tags: [
      {
        name: "SwiftUI",
        color: "blue-text-gradient",
      },
      {
        name: "Sf symbols",         
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
    name: "Apple Frameworks ",
    points: [
      "Created a sleek and intuitive user interface.",
      "Integrated API for real-time weather updates.",
      "Enhanced performance for a smooth user experience.",
    ],

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
  
    image: advance,
    source_code_link: "https://github.com/Sandalu01/Apple-Framework",
  },
  
  {
    name: "Weather App",

    points: [
      "Created a sleek and intuitive user interface.",
      "Integrated API for real-time weather updates.",
      "Enhanced performance for a smooth user experience.",
    ],
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

const teamworks = [
  {
    name: "Reserve Tt",
   
    tags: [
      {
        name: "next js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css,Aws",
        color: "pink-text-gradient",
      },
    ],
    pointss: [
      "Created a sleek and intuitive user interface.",
      "Integrated API for real-time weather updates.",
      "Enhanced performance for a smooth user experience.",
    ],
    image: reserve,
    source_code_link: "https://github.com/RavanaDevs/classroom-booking-system",
    webpage : "https://classroom-booking-system-dev.vercel.app/",
  },

  {
    name: "Real-Time Train Monitoring System",
  

    tags: [
      {
        name: "GPS,ESP32,keypad,Node Mcu,Lcd Dispaly",
        color: "blue-text-gradient",
      },
      {
        name: "Mongo-DB ,Linode",
        color: "green-text-gradient",
      },
      {
        name: "React-boostrap,tailwind css,Ract,NodeJS",
        color: "pink-text-gradient",
      },
    ],
    pointss: [
      
      "Created a sleek and intuitive user interface.",
      "Integrated API for real-time weather updates.",
      "Enhanced performance for a smooth user experience.",
    ],
    image: realtime,
    source_code_link: "https://github.com/Ravana-ac",
    webpage : "https://train-tracking-system-tau.vercel.app/",
  },
];




export { services, technologies, experiences, testimonials, projects ,teamworks};
