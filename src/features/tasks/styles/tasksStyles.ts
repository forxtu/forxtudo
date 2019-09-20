import styled from "styled-components";
import { Input, Button, List, Icon, Popover, Tooltip, Typography } from "antd";

const { Text } = Typography;

// TaskForm
const Wrapper = styled.div``;

const TaskInput = styled(Input)`
  margin-bottom: 12px;
  margin-top: 12px;
`;

const TaskFormButton = styled(Button)`
  margin-right: 12px;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ControlsButtons = styled.div``;

// TaskListItem
const StyledIcon = styled(Icon)``;
const StyledText = styled(Text)``;
const StyledListItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;

  ${StyledIcon} {
    font-size: 16px;
  }

  ${StyledText} {
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
const MoreListItemIcon = styled(Icon)``;
const DeleteIcon = styled(Icon)``;
const MoreListItem = styled.li``;
const MoreListWrapper = styled.ul`
  padding: 0;

  ${MoreListItem} {
    cursor: pointer;
    margin: 0 -16px 0 -16px;
    padding: 12px;

    &:hover {
      background: rgba(0, 0, 0, 0.03);
    }

    ${DeleteIcon} {
      color: red;
      padding-right: 5px;
    }

    ${MoreListItemIcon} {
      padding-right: 5px;
    }
  }
`;

export {
  Wrapper,
  TaskInput,
  TaskFormButton,
  Controls,
  ControlsButtons,
  StyledText,
  StyledListItem,
  StyledIcon,
  More,
  DeleteIcon,
  MoreListItem,
  MoreListItemIcon,
  MoreListWrapper
};
