import React from "react";
import { Row, Col } from "styled-bootstrap-grid";

// components
import Header from "components/blocks/Header";
import Sidebar from "components/blocks/Sidebar";

// styles
import { StyledContainer } from "./mainLayoutStyles";

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <StyledContainer fluid>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>{children}</Col>
        </Row>
      </StyledContainer>
    </>
  );
};

export default MainLayout;
