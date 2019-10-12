import { Badge } from "antd";
import { BadgeProps } from "antd/lib/badge";
import styled from "styled-components";
import { prop } from "styled-tools";

interface BadgeExtendedProps extends BadgeProps {
  width?: string;
  height?: string;
  fontSize?: string;
}

export const CountBadgeText = styled(Badge)<BadgeExtendedProps>`
  sup {
    right: -10px;
    font-size: 10px;
    min-width: 14px;
    height: 14px;
    line-height: 15px;
    padding: 0 5px;
  }
`;
