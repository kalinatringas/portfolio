export interface Project {
  name: string;
  image: string;
  link: string;
  description: string[];
}

export const projects: Project[] = [
  {
    name: "Dance Assignments",
    image: "/dance.png",
    link: "https://danceassignment.netlify.app/",
    description: [
      "Full-stack scheduling tool with React and FastAPI",
      "Custom matching algorithm reduced manual work by 70%",
      "Scalable deployment with data processing and validation"
    ]
  },
  {
    name:"Dress Up Game",
    image:"/tumi.png",
    link:"https://tumi-dress-up.netlify.app/",
    description:[
        "Personal dress up game build in React and Typescript",
        "Hand-drew eleven custom wardrobe elements as a gift",
        "Clean component architecture with custom illustrations"
    ]
  },
  {
    name:"Plan Your Care",
    image:"/planyourcare.png",
    link:"https://devpost.com/software/planurcare",
    description:[
        "Award Winning Hackathon Project, best overall and best use of MongoDB",
        "First hackathon, completed in 36 hours and compeated against 30+ teams",
        "Integrated Google Maps API and built an interactive states map from scratch"
    ]
  },
  {
    name: "Kogna",
    image: "/kogna.png",
    link: "https://kogna.io/",
    description: [
      "Production UI with React, TypeScript, and TailwindCSS",
      "AI-powered business intelligence dashboards",
      "RESTful API integration and chatbot development",
      "Agile team collaboration and code reviews"
    ]
  },
  {
    name: "Movie Recommendations",
    image: "/movie.png",
    link: "https://github.com/kalinatringas/DSA-Proj-two",
    description: [
    "Recommendation engine with cosine similarity algorithms",
      "Large dataset processing and cleaning",
      "Optimized data structures for efficiency"
    ]
  }
  
];