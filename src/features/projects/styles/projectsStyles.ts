import styled from "styled-components";
import { Menu, Input, List, Icon, Badge } from "antd";

// Projects
const { SubMenu } = Menu;

const AddProjectWrapper = styled.div`
  padding: 0 12px;
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
const ProjectTitle = styled.div`
  padding-left: 12px;
`;

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
`;

// ProjectCreate
const FavoriteTogglerText = styled.span``;
const FavoriteToggler = styled.div`
  margin: 12px 0;
  display: flex;
  align-items: center;

  ${FavoriteTogglerText} {
    margin-left: 12px;
  }
`;

export {
  AddProjectWrapper,
  StyledInput,
  ProjectTitle,
  ProjectsMenu,
  ProjectsSubMenu,
  StyledListItem,
  StyledText,
  StyledIcon,
  FavoriteToggler,
  FavoriteTogglerText
};
