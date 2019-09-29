import React from "react";
import { Modal, Select, Switch } from "antd";

// hooks
import useProjectSetup from "features/projects/hooks/useProjectSetup";

// utils
import { Project } from "features/projects/store/ProjectsStore";

// components
import ColorBadge from "components/elements/ColorBadge";

// styles
import * as S from "features/projects/styles/projectsStyles";

const { Option } = Select;

type ProjectSetupProps = {
  btnComponent: any;
  project?: Project;
  isEditMode?: boolean;
};

const ProjectSetup = ({
  isEditMode = false,
  btnComponent,
  project = {} as any
}: ProjectSetupProps) => {
  const {
    projectValue,
    isProjectModalOpen,
    setProjectConfirm,
    setProjectCancel,
    setProjectValueHandler,
    toggleIsProjectModalOpen,
    projectColors,
    projectColor,
    setProjectColorHandler,
    isFavorite,
    toggleIsFavorite
  } = useProjectSetup({ project, isEditMode });

  return (
    <>
      <Modal
        title={isEditMode ? "Edit Project" : "Add Project"}
        visible={isProjectModalOpen}
        onOk={setProjectConfirm}
        onCancel={setProjectCancel}
      >
        <S.StyledInput
          placeholder="Project name"
          onChange={setProjectValueHandler}
          value={projectValue}
        />
        <Select
          defaultValue={isEditMode ? project.color : projectColors[0].hash}
          style={{ width: "100%" }}
          value={projectColor}
          onChange={setProjectColorHandler}
        >
          {projectColors.map((color: any) => {
            return (
              <Option value={color.hash}>
                <ColorBadge color={color.hash} />
                {color.name}
              </Option>
            );
          })}
        </Select>
        <S.FavoriteToggler>
          <Switch
            onChange={toggleIsFavorite}
            checked={isFavorite}
            defaultChecked={isEditMode ? project.isFavorite : isFavorite}
          />
          <S.FavoriteTogglerText>Add to favorite</S.FavoriteTogglerText>
        </S.FavoriteToggler>
      </Modal>
      {btnComponent(toggleIsProjectModalOpen)}
    </>
  );
};

export default ProjectSetup;
