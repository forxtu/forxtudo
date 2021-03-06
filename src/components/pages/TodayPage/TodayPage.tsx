import React from "react";

// components
import MainLayout from "components/layouts/MainLayout";
import Tasks from "features/tasks/components/Tasks";
import TaskDescription from "features/tasks/features/taskDescription/components/TaskDescription";
import Sidebar from "components/blocks/Sidebar";

// styles
import { H2 } from "components/elements/Text";

const TodayPage = ({ match }: any) => {
  return (
    <MainLayout
      sidebarContent={<Sidebar paramsId={match.params.id} />}
      taskDescriptionContent={<TaskDescription />}
    >
      <H2>Today</H2>
      <Tasks projectId="inbox" filterType="date" />
    </MainLayout>
  );
};

export default TodayPage;
