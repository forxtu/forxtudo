import React from "react";
import { Row } from "styled-bootstrap-grid";
import { withRouter } from "react-router-dom";
import { Button, Select } from "antd";

// hooks
import useAuthInfo from "features/auth/hooks/useAuthInfo";

// styles
import * as S from "./headerStyles";

const { Option } = Select;

const Header = ({ history }: any) => {
  const { logOut } = useAuthInfo();

  const navigateHandler = (value: any) => {
    console.log(`selected ${value}`);
    history.push({
      pathname: `/${value}`
      // state: { project: JSON.stringify(value) }
    });
  };

  return (
    <S.Wrapper fluid>
      <Row>
        <S.InnerWrapper>
          <S.Logo>FORXTUDO</S.Logo>

          <S.Menu>
            <Select
              // defaultValue="today"
              placeholder="Time period"
              style={{ width: 120 }}
              onChange={navigateHandler}
            >
              {/* <Option value="">Home</Option> */}
              <Option value="today">Today</Option>
              <Option value="week">Week</Option>
              <Option value="month">Month</Option>
              <Option value="year">Year</Option>
            </Select>
            <Button onClick={logOut}>Logout</Button>
          </S.Menu>
        </S.InnerWrapper>
      </Row>
    </S.Wrapper>
  );
};

export default withRouter(Header);
