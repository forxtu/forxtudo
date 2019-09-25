import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";

// components
import MainHeader from "components/blocks/Header";
import Sidebar from "components/blocks/Sidebar";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const StyledHeader = styled(Header)`
  padding: 0;
  background: #f0f2f5;
`;

const MainContent = styled(Content)`
  background: #fffff2;
  border-radius: 10px;
  padding: 24px;
`;

const TaskDescription = styled.div`
  background: #fffff2;
  border-radius: 10px;
  padding: 24px;
`;

const MainLayout = ({
  sidebarContent,
  taskDescriptionContent,
  children
}: any) => {
  return (
    <Layout>
      <StyledHeader>
        <MainHeader />
      </StyledHeader>
      <Layout
      // style={{ marginLeft: 300, padding: "0 0 24px 0", background: "#fff" }}
      >
        <Sider
          width={300}
          style={{
            // overflow: "auto",
            height: "calc(100vh - 64px)",
            backgroundColor: "#f0f2f5"
            // position: "fixed",
            // left: 0
          }}
        >
          {sidebarContent}
        </Sider>
        <Container fluid>
          <Row>
            <Col md={6}>
              <MainContent>{children}</MainContent>
            </Col>
            <Col md={6}>
              <TaskDescription>{taskDescriptionContent}</TaskDescription>
            </Col>
          </Row>
        </Container>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
