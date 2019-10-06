import React from "react";
import { Modal, Typography } from "antd";

// hooks
import useLabelMore from "features/labels/hooks/useLabelMore";

// utils
import { Label } from "features/labels/store/LabelsStore";

// components
import LabelSetup from "features/labels/components/LabelSetup";

// styles
import {
  MoreWrapper,
  MoreItemIconsWrapper,
  MoreItemBtn,
  MoreItemIcon
} from "components/elements/List";

const { confirm } = Modal;
const { Text } = Typography;

type LabelItemMorePopover = {
  label: Label;
  isFavorite?: boolean;
  setIsMoreOpenToggle: () => void;
};

const LabelItemMorePopover = ({
  label,
  isFavorite,
  setIsMoreOpenToggle
}: LabelItemMorePopover) => {
  const {
    setLabelFavoriteStatusToFalse,
    setLabelFavoriteStatusToTrue,
    editLabelModalHandler,
    deleteLabelHandler
  } = useLabelMore({ label, setIsMoreOpenToggle });

  const showDeleteConfirm = () => {
    setIsMoreOpenToggle();
    confirm({
      title: `${label.label}`,
      content: "Are you sure you want to delete this label?",
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        deleteLabelHandler(label.id as string);
      },
      onCancel() {}
    });
  };

  return (
    <MoreWrapper>
      {isFavorite ? (
        <MoreItemBtn onClick={setLabelFavoriteStatusToFalse}>
          <MoreItemIconsWrapper>
            <MoreItemIcon type="eye-invisible" />
            <Text>Remove from favorites</Text>
          </MoreItemIconsWrapper>
        </MoreItemBtn>
      ) : (
        <>
          <LabelSetup
            isEditMode
            label={label}
            btnComponent={(toggleIsLabelModalOpen: () => void) => (
              <MoreItemBtn
                onClick={() => editLabelModalHandler(toggleIsLabelModalOpen)}
              >
                <MoreItemIconsWrapper>
                  <MoreItemIcon type="edit" />
                  <Text>Edit label</Text>
                </MoreItemIconsWrapper>
              </MoreItemBtn>
            )}
          />
          {!label.isFavorite ? (
            <MoreItemBtn onClick={setLabelFavoriteStatusToTrue}>
              <MoreItemIconsWrapper>
                <MoreItemIcon type="heart" />
                <Text>Add to favorites</Text>
              </MoreItemIconsWrapper>
            </MoreItemBtn>
          ) : null}
          <MoreItemBtn onClick={showDeleteConfirm}>
            <MoreItemIconsWrapper>
              <MoreItemIcon type="delete" style={{ color: "red" }} />
              <Text type="danger">Delete label</Text>
            </MoreItemIconsWrapper>
          </MoreItemBtn>
        </>
      )}
    </MoreWrapper>
  );
};

export default LabelItemMorePopover;
