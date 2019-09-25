import styled from "styled-components";
import { Menu, Input, List, Icon } from "antd";

// Projects
const { SubMenu } = Menu;

const AddProjectWrapper = styled.div`
  padding: 12px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 12px;
`;

const ProjectsMenu = styled(Menu)`
  background: #f0f2f5;
  border: none;
`;

const ProjectsSubMenu = styled(SubMenu)`
  background: #f0f2f5;
`;

// ProjectItem
const StyledListItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  cursor: pointer;
  background: #f0f2f5;
`;

const StyledIcon = styled(Icon)`
  font-size: 16px;
`;

const StyledText = styled.span`
  font-size: 16px;
  padding-left: 12px;
`;

export {
  AddProjectWrapper,
  StyledInput,
  ProjectsMenu,
  ProjectsSubMenu,
  StyledListItem,
  StyledText,
  StyledIcon
};
