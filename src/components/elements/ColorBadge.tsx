import { Badge } from "antd";
import { BadgeProps } from "antd/lib/badge";
import styled from "styled-components";
import { prop } from "styled-tools";

interface BadgeExtendedProps extends BadgeProps {
  width?: string;
  height?: string;
  fontSize?: string;
}

const ColorBadge = styled(Badge)<BadgeExtendedProps>`
  .ant-badge-status {
    &-dot {
      width: ${prop("width", "12px")};
      height: ${prop("height", "12px")};
    }
    &-text {
      font-size: ${prop("fontSize", "14px")};
    }
  }
`;

export default ColorBadge;
