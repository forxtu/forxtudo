import React from "react";
import { observer } from "mobx-react";

// utils
import { Project } from "features/projects/store/ProjectsStore";

// styles
import * as S from "features/projects/styles/projectsStyles";

type ProjectProps = {
  project: Project;
  history: any;
  deleteProjectHandler?: any;
};

const ProjectItem = observer(
  ({ project, history, deleteProjectHandler }: ProjectProps) => {
    const handleNavigate = (project: Project) => {
      history.push({
        pathname: `/project/${project.name === "Inbox" ? "inbox" : project.id}`,
        state: { project: JSON.stringify(project) }
      });
    };

    return (
      <S.StyledListItem
        key={project.id}
        onClick={() => handleNavigate(project)}
      >
        <S.StyledText>{project.name}</S.StyledText>
        {!project.isDefault && (
          <S.StyledIcon
            onClick={() => deleteProjectHandler(project.id as string)}
            type="delete"
          />
        )}
      </S.StyledListItem>
    );
  }
);

export default ProjectItem;
