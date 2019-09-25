import React, { useEffect } from "react";
import { Button, Icon } from "antd";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react";

// hooks
import useProjects from "features/projects/hooks/useProjects";

// utils
import { Project } from "features/projects/store/ProjectsStore";

// components
import ProjectItem from "features/projects/components/ProjectItem";

// styles
import * as S from "features/projects/styles/projectsStyles";

const Projects = observer(({ history, globalProjectId }: any) => {
  const {
    defaultProjects,
    customProjects,
    addProjectHandler,
    projectValue,
    setProjectValueHandler,
    deleteProjectHandler,
    setSelectedProjectId
  } = useProjects();

  useEffect(() => {
    setSelectedProjectId(globalProjectId);
  }, [globalProjectId]);

  return (
    <div>
      {defaultProjects.map((defaultProject: Project) => (
        <ProjectItem project={defaultProject} history={history} />
      ))}
      <S.ProjectsMenu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
      >
        <S.ProjectsSubMenu
          key="sub1"
          title={
            <span>
              <Icon type="project" />
              Projects
            </span>
          }
        >
          {customProjects.map((project: Project) => (
            <ProjectItem
              project={project}
              history={history}
              deleteProjectHandler={deleteProjectHandler}
            />
          ))}
        </S.ProjectsSubMenu>
      </S.ProjectsMenu>
      <S.AddProjectWrapper>
        <S.StyledInput
          placeholder="Type something..."
          onChange={setProjectValueHandler}
          value={projectValue}
        />
        <Button
          onClick={addProjectHandler}
          type="primary"
          icon="plus"
          size="default"
          shape="round"
        >
          Add project
        </Button>
      </S.AddProjectWrapper>
    </div>
  );
});

export default withRouter(Projects);
