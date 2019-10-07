import React from "react";

// components
import MainLayout from "components/layouts/MainLayout";
import Tasks from "features/tasks/components/Tasks";
import TaskDescription from "features/tasks/features/taskDescription/components/TaskDescription";
import Sidebar from "components/blocks/Sidebar";

// styles
import { H2 } from "components/elements/Text";

type LabelPage = {
  match: any;
  location: {
    state: {
      label: string;
    };
  };
};

const LabelPage = ({
  match,
  location: {
    state: { label }
  }
}: LabelPage) => {
  const parsedLabelProjectData = JSON.parse(label);

  return (
    <MainLayout
      sidebarContent={<Sidebar paramsId={match.params.id} />}
      taskDescriptionContent={<TaskDescription />}
    >
      <H2>{parsedLabelProjectData.label}</H2>
    </MainLayout>
  );
};

export default LabelPage;
