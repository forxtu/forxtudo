import React from "react";

// components
import MainLayout from "components/layouts/MainLayout";
import Tasks from "features/tasks/components/Tasks";

// styles
import { H2 } from "components/elements/Text";

const Home = () => {
  return (
    <MainLayout>
      <Tasks />
    </MainLayout>
  );
};

export default Home;
