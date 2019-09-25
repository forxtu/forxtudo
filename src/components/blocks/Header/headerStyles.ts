import styled from "styled-components";
import { Container, Col } from "styled-bootstrap-grid";

// utils
import { flexRowSpaceBetween } from "styles/utils";

export const InnerWrapper = styled(Col)`
  ${flexRowSpaceBetween};
  align-items: center;
`;

export const Wrapper = styled(Container)``;

export const Logo = styled.div`
  font-size: 24px;
`;

export const Menu = styled.div`
  button {
    margin-left: 8px;
  }
`;
