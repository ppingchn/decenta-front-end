import React from 'react';
import CreateProjectButton from '../component/Project/CreateProjectButton';
import ProjectCard from '../component/Project/ProjectCard';
import { useProject } from '../context/ProjectContext';

function ProjectPage() {
  const { project } = useProject();

  return (
    <div className="m-2">
      <div className="d-flex justify-content-between">
        <h2>Project</h2>
        <CreateProjectButton />
      </div>
      <div className="row mx-1 d-flex gap-2">
        {project.map((el, idx) => {
          return (
            <ProjectCard
              key={idx}
              projectName={el.projectName}
              dueDate={el.dueDate}
              projectType={el.projectType}
              data={el}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectPage;
