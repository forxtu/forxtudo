import React from "react";
import { observer } from "mobx-react";
import { Icon } from "antd";

// hooks
import useItemMore from "hooks/useItemMore";

// utils
import { Label } from "features/labels/store/LabelsStore";

// components
import LabelItemMore from "features/labels/components/LabelItemMore";
import ColorBadge from "components/elements/ColorBadge";

// styles
import * as S from "components/blocks/Sidebar";

type LabelItem = {
  label: Label;
  history: any;
  isFavorite?: boolean;
};

const LabelItem = observer(
  ({ label, history, isFavorite = false }: LabelItem) => {
    const {
      isMoreVisible,
      setIsMoreVisibleTrue,
      setIsMoreVisibleHandler,
      isMoreOpen,
      setIsMoreOpenFalse,
      setIsMoreOpenToggle
    } = useItemMore();

    const handleNavigate = (label: Label) => {
      history.push({
        pathname: `/label/${label.id}`,
        state: { label: JSON.stringify(label) }
      });
    };

    return (
      <>
        <S.SidebarItem
          onMouseOver={setIsMoreVisibleTrue}
          onMouseLeave={setIsMoreVisibleHandler}
          key={label.id}
          onClick={() => handleNavigate(label)}
        >
          <S.SidebarItemTitle>
            <S.SidebarItemTitleIcon type="tag" style={{ color: label.color }} />
            <S.SidebarItemTitleText>{label.label}</S.SidebarItemTitleText>
          </S.SidebarItemTitle>
          {isMoreVisible ? (
            <LabelItemMore
              isMoreOpen={isMoreOpen}
              setIsMoreOpenToggle={setIsMoreOpenToggle}
              label={label}
              isFavorite={isFavorite}
            />
          ) : null}
        </S.SidebarItem>
      </>
    );
  }
);

export default LabelItem;
