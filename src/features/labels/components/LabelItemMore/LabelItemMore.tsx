import React from "react";
import { Popover, Tooltip } from "antd";

// utils
import { Label } from "features/labels/store/LabelsStore";

// components
import LabelItemMorePopover from "features/labels/components/LabelItemMore/LabelItemMorePopover";

// styles
import * as S from "features/tasks/styles/tasksStyles";

type LabelItemMore = {
  label: Label;
  isMoreOpen: boolean;
  isFavorite?: boolean;
  setIsMoreOpenToggle: () => void;
};

const LabelItemMore = ({
  label,
  isMoreOpen,
  setIsMoreOpenToggle,
  isFavorite
}: LabelItemMore) => (
  <Tooltip placement="right" title="More">
    <Popover
      placement="bottomRight"
      content={
        <LabelItemMorePopover
          isFavorite={isFavorite}
          label={label}
          setIsMoreOpenToggle={setIsMoreOpenToggle}
        />
      }
      title={label.label}
      trigger="click"
      visible={isMoreOpen}
      onVisibleChange={setIsMoreOpenToggle}
    >
      <S.More type="ellipsis" />
    </Popover>
  </Tooltip>
);

export default LabelItemMore;
