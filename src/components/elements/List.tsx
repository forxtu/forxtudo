import styled from "styled-components";
import { List, Icon } from "antd";

const { Item } = List;

const MoreItemIcon = styled(Icon)``;
const MoreItemBtn = styled(Item)``;
const MoreItem = styled(Item)``;
const MoreWrapper = styled.ul`
  padding: 0;

  ${MoreItem} {
    padding: 12px;
    display: block;

    ${MoreItemIcon} {
      padding-right: 5px;
      font-size: 16px;
    }
  }

  ${MoreItemBtn} {
    cursor: pointer;
    padding: 12px;

    &:hover {
      background: rgba(0, 0, 0, 0.03);
    }

    ${MoreItemIcon} {
      padding-right: 5px;
    }
  }
`;

export { MoreWrapper, MoreItem, MoreItemBtn, MoreItemIcon };
