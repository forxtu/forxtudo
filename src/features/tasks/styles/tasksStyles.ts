import styled, { css } from "styled-components";
import {
  Input,
  Mentions,
  DatePicker,
  Button,
  List,
  Icon,
  Typography,
  Collapse
} from "antd";
import { ifProp } from "styled-tools";

// utils
import { flexStartEnd } from "styles/utils";

// components
import ColorBadge from "components/elements/ColorBadge";

const { Text } = Typography;
const { Panel } = Collapse;

// TaskForm
const Wrapper = styled.div`
  margin: 12px 0;
`;

const TaskInput = styled(Input)`
  margin-bottom: 12px;
  margin-top: 12px;
  .ant-input-group > input {
    height: 35px;
  }
  .ant-input-group-addon {
    padding: 0;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  width: 150px;
  input {
    border: none;
    text-align: left !important;
  }
`;

const TaskFormButton = styled(Button)`
  margin-right: 12px;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ControlsButtons = styled.div``;

// TasksList
const StyledPanel = styled(Panel)``;
const StyledCollapse = styled(Collapse)`
  background: #fffff2;

  .ant-collapse-item {
    border-bottom: none !important;
  }

  .ant-collapse-content-box {
    padding: 0 !important;
  }

  .ant-collapse-header {
    padding: 12px 0 !important;
    border-bottom: 1px solid #ccc;

    .ant-collapse-arrow {
      right: 0 !important;
    }
  }

  ${StyledPanel} {
    padding: 0;
  }
`;

// TaskListItem
const DateWrapper = styled.div``;
const LabelsItem = styled.span``;
const LabelsWrapper = styled.div``;
const TaskProjectBadge = styled(ColorBadge)``;
const StyledMentions = styled(Mentions)``;
const StyledIcon = styled(Icon)``;
const StyledText = styled(Text)``;
const StyledListItem = styled(List.Item as any)`
  display: flex;
  padding: 15px 12px;
  margin: 12px 0;
  border-radius: 5px;
  position: relative;

  ${ifProp(
    "isHighlighted",
    css`
      background: #4b6fde1f !important;
    `
  )}

  ${ifProp(
    "isCompleted",
    css`
      opacity: 0.6;
    `
  )}

  &:hover {
    background: #f0f2f5;
  }

  ${DateWrapper} {
    ${flexStartEnd};
    min-width: 130px;
    margin-right: 12px;
  }

  ${StyledIcon} {
    font-size: 16px;
  }

  .ant-typography-edit-content {
    position: absolute;
  }

  ${StyledText} {
    padding-left: 12px;
    width: 95%;
  }

  ${StyledMentions} {
    border: none;
    background: transparent;
    box-shadow: none;
    &:focus {
    }
    textarea {
      cursor: pointer;
      background: transparent;
    }
  }

  ${TaskProjectBadge} {
    display: flex;
    align-items: center;
    margin-right: 24px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    .ant-badge-status {
      &-dot {
        top: 1px;
      }
    }
  }

  ${LabelsWrapper} {
    display: flex;
    font-size: 10px;
    position: absolute;
    top: 40px;
    left: 40px;

    ${LabelsItem} {
      margin-right: 8px;
    }
  }
`;

// TaskItemMore
const More = styled(Icon)`
  position: absolute;
  right: 8px;
  font-size: 20px;
`;

// TaskItemMorePopover
const ScheduleControls = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MoreListItemIcon = styled(Icon)``;
const DeleteIcon = styled(Icon)``;
const MoreListItemBtn = styled(List.Item)``;
const MoreListItem = styled(List.Item)``;
const MoreListWrapper = styled.ul`
  padding: 0;

  ${MoreListItem} {
    padding: 12px;
    display: block;

    ${MoreListItemIcon} {
      padding-right: 5px;
      font-size: 16px;
    }
  }

  ${MoreListItemBtn} {
    cursor: pointer;
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
  StyledDatePicker,
  TaskFormButton,
  Controls,
  ControlsButtons,
  TaskProjectBadge,
  StyledMentions,
  StyledText,
  StyledListItem,
  StyledIcon,
  LabelsItem,
  LabelsWrapper,
  More,
  DeleteIcon,
  ScheduleControls,
  MoreListItem,
  MoreListItemBtn,
  MoreListItemIcon,
  MoreListWrapper,
  StyledCollapse,
  StyledPanel,
  DateWrapper
};
