import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const pComponents = projects.map(obj => {
    return (
    <ProjectItem key={obj.id} name={obj.name} about={obj.about} technologies={obj.technologies} />
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{pComponents}</div>
    </div>
  );
}

export default ProjectList;
