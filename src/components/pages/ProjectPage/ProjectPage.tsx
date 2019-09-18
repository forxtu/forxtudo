import React from "react";

// components
import MainLayout from "components/layouts/MainLayout";
import Tasks from "features/tasks/components/Tasks";
import Projects from "features/projects/components/Projects";

// styles
import { H2 } from "components/elements/Text";

const ProjectPage = ({ match }: any) => {
  return (
    <MainLayout sidebarContent={() => <Projects />}>
      Project {match.params.id}
      <Tasks projectId={match.params.id} />
    </MainLayout>
  );
};

export default ProjectPage;
