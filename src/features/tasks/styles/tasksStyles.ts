import styled from "styled-components";
import { List, Icon, Popover, Tooltip } from "antd";

// TaskListItem
const StyledIcon = styled(Icon)``;
const StyledText = styled.span``;
const StyledListItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;

  ${StyledIcon} {
    font-size: 16px;
  }

  ${StyledText} {
    font-size: 16px;
    padding-left: 12px;
  }
`;

// TaskItemMore
const More = styled(Icon)`
  position: absolute;
  right: 0;
  font-size: 20px;
`;

// TaskItemMorePopover
const DeleteIcon = styled(Icon)``;
const MoreListItem = styled.li``;
const MoreListWrapper = styled.ul`
  padding: 0;

  ${MoreListItem} {
    cursor: pointer;
    margin: -12px -16px -8px -16px;
    padding: 12px;

    &:hover {
      background: rgba(0, 0, 0, 0.03);
    }

    ${DeleteIcon} {
      color: red;
      padding-right: 5px;
    }
  }
`;

export {
  StyledText,
  StyledListItem,
  StyledIcon,
  More,
  DeleteIcon,
  MoreListItem,
  MoreListWrapper
};
