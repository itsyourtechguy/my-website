import React from "react";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    name: "Portfolio Website",
    description:
      "A personal portfolio website built with React and styled-components.",
    technologies: ["React", "CSS", "JavaScript"],
    link: "https://yourportfolio.com",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    id: 2,
    name: "E-commerce App",
    description:
      "An e-commerce web application with a complete product catalog and cart functionality.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://yourshop.com",
    github: "https://github.com/yourusername/e-commerce-app",
  },
  {
    id: 3,
    name: "Weather App",
    description:
      "A weather forecast application using OpenWeather API, showing current and weekly forecasts.",
    technologies: ["React", "API Integration", "Bootstrap"],
    link: "https://yourweatherapp.com",
    github: "https://github.com/yourusername/weather-app",
  },
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    <p>
      <strong>Technologies:</strong> {project.technologies.join(", ")}
    </p>
    <div className="project-links">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="ProjectsPage">
      <h1>Projects</h1>
      <p>
        Here are some of my recent projects. Click to view details or explore
        the code on GitHub.
      </p>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
