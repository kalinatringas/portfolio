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