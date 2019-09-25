import React from "react";

// components
import MainLayout from "components/layouts/MainLayout";
import Tasks from "features/tasks/components/Tasks";
import TaskDescription from "features/tasks/features/taskDescription/components/TaskDescription";
import Projects from "features/projects/components/Projects";

// styles
import { H2 } from "components/elements/Text";

const ProjectPage = ({
  match,
  location: {
    state: { project }
  }
}: any) => {
  const parsedProjectData = JSON.parse(project);

  return (
    <MainLayout
      sidebarContent={<Projects globalProjectId={match.params.id} />}
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
