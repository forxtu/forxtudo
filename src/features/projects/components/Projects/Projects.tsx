import React, { useEffect } from "react";
import { Icon } from "antd";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react";

// hooks
import useProjects from "features/projects/hooks/useProjects";

// utils
import { Project } from "features/projects/store/ProjectsStore";

// components
import ProjectItem from "features/projects/components/ProjectItem";
import ProjectCreate from "features/projects/components/ProjectCreate";

// styles
import * as S from "features/projects/styles/projectsStyles";

const Projects = observer(({ history, globalProjectId }: any) => {
  const {
    defaultProjects,
    customProjects,
    deleteProjectHandler,
    setSelectedProjectId
  } = useProjects();

  useEffect(() => {
    setSelectedProjectId(globalProjectId);
  }, [globalProjectId]);

  return (
    <>
      {defaultProjects.map((defaultProject: Project) => (
        <ProjectItem project={defaultProject} history={history} />
      ))}
      {customProjects.map((favoriteProject: Project) => {
        return favoriteProject.isFavorite ? (
          <ProjectItem
            isFavorite={favoriteProject.isFavorite}
            project={favoriteProject}
            history={history}
          />
        ) : null;
      })}
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
          <ProjectCreate />
        </S.ProjectsSubMenu>
      </S.ProjectsMenu>
    </>
  );
});

export default withRouter(Projects);
