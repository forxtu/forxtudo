import styled from "styled-components";
import { Menu, Input, List, Icon, Badge } from "antd";

const { Item } = List;
const { SubMenu } = Menu;

const SidebarItemTitleText = styled.span``;
const SidebarItemTitleIcon = styled(Icon)``;
const SidebarItemTitle = styled.div`
  padding-left: 12px;
  ${SidebarItemTitleIcon} {
    font-size: 14px;
    padding-right: 6px;
  }
  ${SidebarItemTitleText} {
    font-size: 14px;
  }
`;
const SidebarAddWrapper = styled.div``;

const SidebarItem = styled(Item)`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  cursor: pointer;
  background: #f0f2f5;
`;

const SidebarSubMenu = styled(SubMenu)``;
const SidebarMenu = styled(Menu)`
  background: #f0f2f5;
  border: none;

  ${SidebarSubMenu} {
    background: #f0f2f5;

    ${SidebarAddWrapper} {
      padding: 0 12px;
    }
  }
`;

export {
  SidebarItemTitle,
  SidebarItemTitleIcon,
  SidebarItemTitleText,
  SidebarAddWrapper,
  SidebarItem,
  SidebarSubMenu,
  SidebarMenu
};
