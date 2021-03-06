import React from "react";

// components
import MainLayout from "components/layouts/MainLayout";
import Tasks from "features/tasks/components/Tasks";
import TaskDescription from "features/tasks/features/taskDescription/components/TaskDescription";
import Sidebar from "components/blocks/Sidebar";

// styles
import { H2 } from "components/elements/Text";

type ProjectPage = {
  match: any;
  location: {
    state: {
      project: string;
    };
  };
};

const ProjectPage = ({
  match,
  location: {
    state: { project }
  }
}: ProjectPage) => {
  const parsedProjectData = JSON.parse(project);

  return (
    <MainLayout
      sidebarContent={<Sidebar paramsId={match.params.id} />}
      taskDescriptionContent={<TaskDescription />}
    >
      <H2>{parsedProjectData.name}</H2>
      <Tasks
        projectId={
          parsedProjectData.name === "Inbox" ? "inbox" : match.params.id
        }
      />
    </MainLayout>
  );
};

export default ProjectPage;
