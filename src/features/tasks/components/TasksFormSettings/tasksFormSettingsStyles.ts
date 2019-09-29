import styled from "styled-components";

// components
import { MoreItemBtn } from "components/elements/List";

// styles
import { flexRowSpaceBetween, flexAlignItemsCenter } from "styles/utils";

const SelectProjectItem = styled(MoreItemBtn)`
  ${flexRowSpaceBetween};
  min-width: 200px;
`;

const ControlItem = styled.div``;
const ControlSelections = styled.div`
  ${flexAlignItemsCenter}

  ${ControlItem} {
    margin-left: 8px;
  }
`;

export { SelectProjectItem, ControlSelections, ControlItem };
