import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

// components
import MainHeader from "components/blocks/Header";
import Sidebar from "components/blocks/Sidebar";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const MainLayout = ({ children }: any) => {
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
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%" }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                subnav 1
              </span>
            }
          >
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout
        style={{ marginLeft: 300, padding: "0 0 24px 0", background: "#fff" }}
      >
        <Header>
          <MainHeader />
        </Header>
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
