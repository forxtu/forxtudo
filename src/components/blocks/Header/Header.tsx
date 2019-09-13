import React from "react";
import { Row } from "styled-bootstrap-grid";
import { Button } from "antd";

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
            <Button onClick={logOut}>Logout</Button>
          </S.Menu>
        </S.InnerWrapper>
      </Row>
    </S.Wrapper>
  );
};

export default Header;
