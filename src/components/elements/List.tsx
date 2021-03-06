import styled from "styled-components";
import { List, Icon } from "antd";

// styles
import { flexRowSpaceBetween } from "styles/utils";

const { Item } = List;

const MoreItemIconsWrapper = styled.div``;
const MoreItemIcon = styled(Icon)``;
const MoreItemBtn = styled(Item)``;
const MoreItem = styled(Item)``;
const MoreWrapper = styled(List)`
  padding: 6px 0;

  ${MoreItem} {
    padding: 12px;
    display: block;

    ${MoreItemIcon} {
      padding-right: 5px;
      font-size: 16px;
    }
  }

  ${MoreItemIconsWrapper} {
    ${flexRowSpaceBetween};
    align-items: center;
  }

  ${MoreItemBtn} {
    ${flexRowSpaceBetween};

    cursor: pointer;
    padding: 12px;
    min-width: 200px;

    &:hover {
      background: rgba(0, 0, 0, 0.03);
    }

    ${MoreItemIcon} {
      padding-right: 5px;
    }
  }
`;

export {
  MoreWrapper,
  MoreItem,
  MoreItemBtn,
  MoreItemIcon,
  MoreItemIconsWrapper
};
