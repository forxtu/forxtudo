import React from "react";
import { Button, Input } from "antd";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react";

// hooks
import useProjects from "features/projects/hooks/useProjects";

// utils
import { Project } from "features/projects/store/ProjectsStore";

const Projects = observer(({ history }: any) => {
  const {
    initialProjects,
    allProjects,
    addProjectHandler,
    projectValue,
    setProjectValueHandler
  } = useProjects();
  const handleNavigate = (project: Project) => {
    history.push(`/project/${project.id}`);
  };

  return (
    <div>
      {initialProjects.map((defaultProject: Project) => (
        <p onClick={() => handleNavigate(defaultProject)}>
          {defaultProject.name}
        </p>
      ))}
      {allProjects.map((project: Project) => (
        <p onClick={() => handleNavigate(project)}>{project.name}</p>
      ))}
      <Input
        placeholder="Type something..."
        onChange={setProjectValueHandler}
        value={projectValue}
      />
      <Button
        onClick={addProjectHandler}
        type="primary"
        icon="plus"
        size="large"
        shape="round"
      >
        Add project
      </Button>
    </div>
  );
});

export default withRouter(Projects);
