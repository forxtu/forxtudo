import React from "react";
import { Button, Input } from "antd";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react";

// hooks
import useProjects from "features/projects/hooks/useProjects";

const Projects = observer(({ history }: any) => {
  const {
    projects,
    setProjectsHandler,
    projectValue,
    setProjectValueHandler
  } = useProjects();

  const handleNavigate = (project: any) => {
    history.push(`/project/${project.id}`);
  };

  return (
    <div>
      {projects.map((project: any) => (
        <p onClick={() => handleNavigate(project)}>{project.name}</p>
      ))}
      <Input
        placeholder="Type something..."
        onChange={setProjectValueHandler}
        value={projectValue}
      />
      <Button
        onClick={setProjectsHandler}
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
