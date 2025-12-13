import SenseSecure from '../img/SenseSecure.png'
import UniVerse from '../img/UniVerse.png'
import Bohnanza from '../img/Bohnanza.png'
import Population from '../img/Population.png'
import elevateHER from '../img/elevateHER.png'
import fitspiration from '../img/fitspiration.png'
import credit from '../img/credit+.png'


const projects = [
  {
    id: 1,
    image: fitspiration,
    alt: "picture of fitspiration project",
    name: "Fitspiration",
    description: "Fitspiration is an AI-powered fashion assistant that enables users to digitize their wardrobe and receive intelligent outfit recommendations. The system integrates an ESP32 camera to capture clothing images, transmits them over Wi-Fi to a Node.js backend, and leverages CLIP-based vector embeddings to perform similarity search and generate personalized outfit suggestions.",
    skills: [
      "next.js",
      "node.js",
      "esp32",
      "pinecone DB",
      "PostgreSQL",
      "CLIP",
    ],
    github: "https://github.com/samiksha-satthy/Fitspiration"
  },

  {
    id: 2,
    image: credit,
    alt: "picture of credit+ project",
    name: "Credit+",
    description: "AI-powered personal finance app that recommends the best credit cards, visualizes budgets with interactive 3D or AR “money buckets,” and teaches with gamified micro-lessons. A conversational coach personalizes guidance. Clear compliance, analytics, and a milestone roadmap support a practical, privacy‑minded MVP.",
    skills: [
      "next.js",
      "fastAPI",
      "openai api",
      "postgreSQL",
      "three.js + webXR",
      "LangChain",
    ],
    github: "https://github.com/shaivisahni/creditPlus"
  },
  {
    id: 3,
    image: elevateHER,
    alt: "picture of elevateHER project",
    name: "elevateHER",
    description: "ElevateHer is a mobile app that connects women with mentors and mentees to exchange skills, gain guidance, and build confidence. The app uses a Tinder-style swiping interface that makes it simple and engaging for users to discover and connect with potential mentors or mentees. Once matched, users can view profiles, explore skill offerings, and begin building meaningful connections. With personalized recommendations powered by AI, ElevateHer ensures mentorship is both accessible and relevant.",
    skills: [
      "react native",
      "typescript",
      "mongoDB",
      "node.js",
      "gemini api",
      "sentence transformers",
    ],
    github: "https://github.com/m76domi98/technova2025"
  },
      {
    id: 11,
    image: Population,
    alt: "picture of canada population simulator project",
    name: "Canada Population Simulator",
    description: "A dynamic Canada Population Simulation tool that has map-based visualizations to help users track national growth trends",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "D3.js",
    ],
    github: "https://github.com/shaivisahni/population-simulator/tree/main"
  },
  {
    id: 4,
    image: SenseSecure,
    alt: "picture of senseSecure project",
    name: "SenseSecure",
    description: "Developed a motion-triggered alarm system using C and STM32 microcontrollers to enhance safety for legally blind individuals. The system integrates ultrasonic sensors for motion detection, audio output for voice instructions, and LED indicators to provide real-time alerts.",
    skills: [
      "c",
      "stm32",
    ],
    github: "https://github.com/samiksha-satthy/ece-198-SenseSecure"
  },
    {
    id: 5,
    image: UniVerse,
    alt: "picture of universe project",
    name: "UniVerse",
    description: "Developed an interactive map application using the JXMapViewer API to help prospective students explore over 10 universities in Ontario. The application integrates program offerings, university descriptions, and direct website links, enhancing accessibility and decision-making.",
    skills: [
      "Java",
      "JXMapViewer API",
      "Web Scraping"
    ],
    github: "https://github.com/samiksha-satthy/UniVerse"
  },
      {
    id: 6,
    image: Bohnanza,
    alt: "picture of bohnanza project",
    name: "Bohnanza",
    description: "Developed the Bohnanza game with an opponent.",
    skills: [
      "Java",
    ],
    github: "https://github.com/samiksha-satthy/Bohnanza/tree/master"
  },
];

export default projects;
