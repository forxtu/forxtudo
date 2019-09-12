import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";

// hooks
import useAuthInfo from "features/auth/hooks/useAuthInfo";

// styles
import * as S from "./headerStyles";

const Header = () => {
  const { logOut } = useAuthInfo();

  return (
    <S.Wrapper fluid>
      <Row>
        <S.InnerWrapper>
          <S.Logo>FORXTUDO</S.Logo>
          <S.Menu>
            <button onClick={logOut}>Logout</button>
            Settings
          </S.Menu>
        </S.InnerWrapper>
      </Row>
    </S.Wrapper>
  );
};

export default Header;
