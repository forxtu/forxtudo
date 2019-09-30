import React from "react";
import { Modal, Typography } from "antd";

// hooks
import useProjectMore from "features/projects/hooks/useProjectMore";

// utils
import { Project } from "features/projects/store/ProjectsStore";

// components
import ProjectSetup from "features/projects/components/ProjectSetup";

// styles
import {
  MoreWrapper,
  MoreItem,
  MoreItemBtn,
  MoreItemIcon
} from "components/elements/List";

const { confirm } = Modal;
const { Text } = Typography;

type ProjectItemMorePopover = {
  project: Project;
  isFavorite?: boolean;
  deleteProject: (project: Project) => void;
  setIsMoreOpenToggle: () => void;
};

const ProjectItemMorePopover = ({
  project,
  isFavorite,
  deleteProject,
  setIsMoreOpenToggle
}: ProjectItemMorePopover) => {
  const {
    setProjectFavoriteStatusToFalse,
    setProjectFavoriteStatusToTrue,
    editProjectModalHandler
  } = useProjectMore({ project, setIsMoreOpenToggle });

  const showDeleteConfirm = () => {
    setIsMoreOpenToggle();
    confirm({
      title: `${project.name}`,
      content: "Are you sure you want to delete this project?",
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        deleteProject(project);
      },
      onCancel() {}
    });
  };

  return (
    <MoreWrapper>
      {isFavorite ? (
        <MoreItemBtn onClick={setProjectFavoriteStatusToFalse}>
          <MoreItemIcon type="eye-invisible" />
          <Text>Remove from favorites</Text>
        </MoreItemBtn>
      ) : (
        <>
          <ProjectSetup
            isEditMode
            project={project}
            btnComponent={(toggleIsProjectModalOpen: () => void) => (
              <MoreItemBtn
                onClick={() =>
                  editProjectModalHandler(toggleIsProjectModalOpen)
                }
              >
                <MoreItemIcon type="edit" />
                <Text>Edit project</Text>
              </MoreItemBtn>
            )}
          />
          {!project.isFavorite ? (
            <MoreItemBtn onClick={setProjectFavoriteStatusToTrue}>
              <MoreItemIcon type="heart" />
              <Text>Add to favorites</Text>
            </MoreItemBtn>
          ) : null}
          <MoreItemBtn onClick={showDeleteConfirm}>
            <MoreItemIcon type="delete" style={{ color: "red" }} />
            <Text type="danger">Delete project</Text>
          </MoreItemBtn>
        </>
      )}
    </MoreWrapper>
  );
};

export default ProjectItemMorePopover;