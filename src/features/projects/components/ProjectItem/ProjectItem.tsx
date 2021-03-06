import React from "react";
import { observer } from "mobx-react";

// hooks
import useItemMore from "hooks/useItemMore";

// utils
import { Project } from "features/projects/store/ProjectsStore";

// components
import ProjectItemMore from "features/projects/components/ProjectItemMore";
import ColorBadge from "components/elements/ColorBadge";
import DefaultProjectItem from "components/blocks/DefaultProjectItem";

// styles
import * as S from "features/projects/styles/projectsStyles";

type ProjectProps = {
  project: Project;
  history: any;
  isFavorite?: boolean;
};

const ProjectItem = observer(
  ({ project, history, isFavorite = false }: ProjectProps) => {
    const {
      isMoreVisible,
      setIsMoreVisibleTrue,
      setIsMoreVisibleHandler,
      isMoreOpen,
      setIsMoreOpenFalse,
      setIsMoreOpenToggle
    } = useItemMore();

    const handleNavigate = (project: Project) => {
      history.push({
        pathname: `/project/${project.name === "Inbox" ? "inbox" : project.id}`,
        state: { project: JSON.stringify(project) }
      });
    };

    return (
      <>
        <S.StyledListItem
          onMouseOver={setIsMoreVisibleTrue}
          onMouseLeave={setIsMoreVisibleHandler}
          key={project.id}
          onClick={() => handleNavigate(project)}
        >
          <S.ProjectTitle>
            {project.isDefault ? (
              <DefaultProjectItem project={project} />
            ) : (
              <ColorBadge color={project.color} text={project.name} />
            )}
          </S.ProjectTitle>
          {!project.isDefault && isMoreVisible ? (
            <ProjectItemMore
              isMoreOpen={isMoreOpen}
              setIsMoreOpenToggle={setIsMoreOpenToggle}
              project={project}
              isFavorite={isFavorite}
            />
          ) : null}
        </S.StyledListItem>
      </>
    );
  }
);

export default ProjectItem;
