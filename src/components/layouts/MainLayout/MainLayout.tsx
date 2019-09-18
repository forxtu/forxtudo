import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import styled from "styled-components";

// components
import MainHeader from "components/blocks/Header";
import Sidebar from "components/blocks/Sidebar";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const StyledHeader = styled(Header)`
  padding: 0;
`;

const MainLayout = ({ sidebarContent, children }: any) => {
  return (
    <Layout>
      <Sider
        width={300}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0
        }}
      >
        {sidebarContent()}
      </Sider>
      <Layout
        style={{ marginLeft: 300, padding: "0 0 24px 0", background: "#fff" }}
      >
        <StyledHeader>
          <MainHeader />
        </StyledHeader>
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
