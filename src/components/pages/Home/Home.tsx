import React from "react";

// components
import MainLayout from "components/layouts/MainLayout";
import Tasks from "features/tasks/components/Tasks";
import Projects from "features/projects/components/Projects";

// styles
import { H2 } from "components/elements/Text";

const Home = () => {
  return (
    <MainLayout sidebarContent={() => <Projects />}>
      <h1>Home</h1>
    </MainLayout>
  );
};

export default Home;
