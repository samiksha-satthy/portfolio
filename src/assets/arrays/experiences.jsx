import uwaterloo from "../img/uwaterloo.png";
import avant from "../img/avant.jpg";
import electrium from "../img/electrium.jpg";

const experiences = [
  {
    id: 1,
    image:  avant ,
    title: "Junior Full-Stack Developer",
    extra: "Avant Global Cash Management || Sep. 2025 - Dec. 2025",
    points: [
      "Worked on UI/UX functionality using React.js by creating new components and fixing bugs.",
      "Created and maintained backend endpoints",
      "Created unit tests with Jest",
      "Participated in code reviews",
    ],
  },
  {
    id: 2,
    image: uwaterloo ,
    title: "Technology Solutions Intern",
    extra: "University of Waterloo || Jan. 2025 - Apr. 2025",
    points: [
      "Worked on AI Projects",
      "Helped modify the website",
      "Solved IT issues and monitored running Docker container logs",
    ],
  },
  {
    id: 3,
    image:  electrium ,
    title: "Software Developer",
    extra: "Electrium Mobility || Sep. 2025 - Present",
    points: [
      "Contributed to Discord Bot",
      "Worked on Task Request Platform",
    ],
  },
];

export default experiences;
