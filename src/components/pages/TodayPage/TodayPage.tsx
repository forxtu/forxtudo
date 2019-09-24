import React from "react";
import moment from "moment";

// components
import MainLayout from "components/layouts/MainLayout";
import Tasks from "features/tasks/components/Tasks";
import Projects from "features/projects/components/Projects";

// styles
import { H2 } from "components/elements/Text";

const TodayPage = ({ match }: any) => {
  return (
    <MainLayout
      sidebarContent={() => <Projects globalProjectId={match.params.id} />}
    >
      <H2>Today</H2>
      <Tasks projectId="inbox" filterType="date" />
    </MainLayout>
  );
};

export default TodayPage;
