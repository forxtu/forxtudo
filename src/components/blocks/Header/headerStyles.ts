import styled from "styled-components";
import { Container, Col } from "styled-bootstrap-grid";

// utils
import { flexRowSpaceBetween } from "styles/utils";

export const InnerWrapper = styled(Col)`
  ${flexRowSpaceBetween};
`;

export const Wrapper = styled(Container)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.33);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.13);
`;

export const Logo = styled.div`
  color: #fff;
  font-size: 24px;
`;

export const Menu = styled.div``;