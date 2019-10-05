import React from "react";
import { Modal, Select, Switch } from "antd";

// hooks
import useLabelSetup from "features/labels/hooks/useLabelSetup";

// utils
import { Label } from "features/labels/store/LabelsStore";

// components
import ColorBadge from "components/elements/ColorBadge";
import FavoriteToggler from "components/blocks/FavoriteToggler";

// styles
import * as S from "components/blocks/Sidebar";
import { StyledInput } from "components/elements/Form/Input";

const { Option } = Select;

type LabelSetupProps = {
  btnComponent: any;
  label?: Label;
  isEditMode?: boolean;
};

const LabelSetup = ({
  isEditMode = false,
  btnComponent,
  label = {} as any
}: LabelSetupProps) => {
  const {
    labelValue,
    isLabelModalOpen,
    setLabelConfirm,
    setLabelCancel,
    setLabelValueHandler,
    toggleIsLabelModalOpen,
    labelColors,
    labelColor,
    setLabelColorHandler,
    isFavorite,
    toggleIsFavorite
  } = useLabelSetup({ label, isEditMode });

  return (
    <>
      <Modal
        title={isEditMode ? "Edit Label" : "Add label"}
        visible={isLabelModalOpen}
        onOk={setLabelConfirm}
        onCancel={setLabelCancel}
      >
        <StyledInput
          placeholder="Label name"
          onChange={setLabelValueHandler}
          value={labelValue}
        />
        <Select
          defaultValue={isEditMode ? label.color : labelColors[0].hash}
          style={{ width: "100%" }}
          value={labelColor}
          onChange={setLabelColorHandler}
        >
          {labelColors.map((color: any) => (
            <Option value={color.hash}>
              <ColorBadge color={color.hash} />
              {color.name}
            </Option>
          ))}
        </Select>
        <FavoriteToggler
          toggleIsFavorite={toggleIsFavorite}
          isFavorite={isFavorite}
          isEditMode={isEditMode}
          itemIsFavorite={label.isFavorite}
        />
      </Modal>
      {btnComponent(toggleIsLabelModalOpen)}
    </>
  );
};

export default LabelSetup;
