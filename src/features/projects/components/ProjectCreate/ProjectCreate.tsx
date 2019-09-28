import React from "react";
import { Button, Modal, Select, Switch } from "antd";

// hooks
import useProjectCreate from "features/projects/hooks/useProjectCreate";

// components
import ColorBadge from "components/elements/ColorBadge";

// styles
import * as S from "features/projects/styles/projectsStyles";

const { Option } = Select;

const ProjectCreate = () => {
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
  } = useProjectCreate();

  return (
    <S.StyledListItem>
      <Modal
        title="Add Project"
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
          defaultValue={projectColors[0].hash}
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
          <Switch onChange={toggleIsFavorite} checked={isFavorite} />
          <S.FavoriteTogglerText>Add to favorite</S.FavoriteTogglerText>
        </S.FavoriteToggler>
      </Modal>
      <S.AddProjectWrapper>
        <Button
          onClick={toggleIsProjectModalOpen}
          type="primary"
          icon="plus"
          size="default"
          shape="round"
        >
          Add project
        </Button>
      </S.AddProjectWrapper>
    </S.StyledListItem>
  );
};

export default ProjectCreate;
