import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";

// styles
import * as S from "./headerStyles";

const Header = () => {
  return (
    <S.Wrapper fluid>
      <Row>
        <S.InnerWrapper>
          <S.Logo>FORXTUDO</S.Logo>
          <S.Menu>Settings</S.Menu>
        </S.InnerWrapper>
      </Row>
    </S.Wrapper>
  );
};

export default Header;
