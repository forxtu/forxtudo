import React, { useEffect } from "react";
import { Icon, Button } from "antd";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react";

// hooks
import useLabels from "features/labels/hooks/useLabels";

// utils
import { Label } from "features/labels/store/LabelsStore";

// components
import LabelItem from "features/labels/components/LabelItem";
import LabelSetup from "features/labels/components/LabelSetup";

// styles
import * as S from "components/blocks/Sidebar";

const Labels = observer(({ history, globalProjectId }: any) => {
  const { allLabels } = useLabels();

  return (
    <>
      <S.SidebarMenu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
      >
        <S.SidebarSubMenu
          key="sub1"
          title={
            <span>
              <Icon type="tags" />
              Labels
            </span>
          }
        >
          {allLabels.map((label: Label) => (
            <LabelItem label={label} history={history} />
          ))}
          <LabelSetup
            btnComponent={(toggleIsLabelModalOpen: () => void) => (
              <S.SidebarItem>
                <S.SidebarAddWrapper>
                  <Button
                    onClick={toggleIsLabelModalOpen}
                    type="primary"
                    icon="plus"
                    size="default"
                    shape="round"
                  >
                    Add label
                  </Button>
                </S.SidebarAddWrapper>
              </S.SidebarItem>
            )}
          />
        </S.SidebarSubMenu>
      </S.SidebarMenu>
    </>
  );
});

export default withRouter(Labels);
