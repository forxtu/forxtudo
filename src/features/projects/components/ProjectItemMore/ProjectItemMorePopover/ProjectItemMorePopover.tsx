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
  MoreItemIconsWrapper,
  MoreItemBtn,
  MoreItemIcon
} from "components/elements/List";

const { confirm } = Modal;
const { Text } = Typography;

type ProjectItemMorePopover = {
  project: Project;
  isFavorite?: boolean;
  setIsMoreOpenToggle: () => void;
};

const ProjectItemMorePopover = ({
  project,
  isFavorite,
  setIsMoreOpenToggle
}: ProjectItemMorePopover) => {
  const {
    setProjectFavoriteStatusToFalse,
    setProjectFavoriteStatusToTrue,
    editProjectModalHandler,
    deleteProjectHandler
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
        deleteProjectHandler(project.id as string);
      },
      onCancel() {}
    });
  };

  return (
    <MoreWrapper>
      {isFavorite ? (
        <MoreItemBtn onClick={setProjectFavoriteStatusToFalse}>
          <MoreItemIconsWrapper>
            <MoreItemIcon type="eye-invisible" />
            <Text>Remove from favorites</Text>
          </MoreItemIconsWrapper>
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
                <MoreItemIconsWrapper>
                  <MoreItemIcon type="edit" />
                  <Text>Edit project</Text>
                </MoreItemIconsWrapper>
              </MoreItemBtn>
            )}
          />
          {!project.isFavorite ? (
            <MoreItemBtn onClick={setProjectFavoriteStatusToTrue}>
              <MoreItemIconsWrapper>
                <MoreItemIcon type="heart" />
                <Text>Add to favorites</Text>
              </MoreItemIconsWrapper>
            </MoreItemBtn>
          ) : null}
          <MoreItemBtn onClick={showDeleteConfirm}>
            <MoreItemIconsWrapper>
              <MoreItemIcon type="delete" style={{ color: "red" }} />
              <Text type="danger">Delete project</Text>
            </MoreItemIconsWrapper>
          </MoreItemBtn>
        </>
      )}
    </MoreWrapper>
  );
};

export default ProjectItemMorePopover;
