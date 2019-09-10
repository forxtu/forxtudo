import React from "react";
import styled from "styled-components";

// hooks
import useAuthInfo from "features/auth/hooks/useAuthInfo";

// components
import MainLayout from "components/layouts/MainLayout";

// styles
import { H2 } from "components/elements/Text";

const Home = () => {
  const { logOut } = useAuthInfo();

  return (
    <MainLayout>
      <H2>Home</H2>
      <button onClick={logOut}>Logout</button>
    </MainLayout>
  );
};

export default Home;
