import React, { useEffect } from "react";
import styled from "styled-components";
import { List, Icon } from "antd";
import { autorun } from "mobx";
import { observer } from "mobx-react";

// hooks
import useProjects from "features/projects/hooks/useProjects";

// utils
import { Project } from "features/projects/store/ProjectsStore";

const StyledListItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  cursor: pointer;
`;

const SyledIcon = styled(Icon)`
  font-size: 16px;
`;

const SyledText = styled.span`
  font-size: 16px;
  padding-left: 12px;
  color: #fff;
`;

type ProjectProps = {
  project: Project;
  history: any;
  deleteProjectHandler?: any;
  setSelectedProjectId: any;
};

const ProjectItem = observer(
  ({
    project,
    history,
    deleteProjectHandler,
    setSelectedProjectId
  }: ProjectProps) => {
    // const { deleteProjectHandler, setSelectedProjectId } = useProjects();

    const handleNavigate = (project: Project) => {
      history.push({
        pathname: `/project/${project.id}`,
        state: { project: JSON.stringify(project) }
      });

      // setSelectedProjectId(project.id as string);
    };

    useEffect(() => {
      setSelectedProjectId(project.id as string);
    }, [project.id]);

    return (
      <StyledListItem key={project.id} onClick={() => handleNavigate(project)}>
        <SyledText>{project.name}</SyledText>
        {!project.isDefault && (
          <SyledIcon
            onClick={() => deleteProjectHandler(project.id as string)}
            type="delete"
          />
        )}
      </StyledListItem>
    );
  }
);

export default ProjectItem;
