import * as React from "react";
import { lowerCase } from "lodash";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";

// hooks
import useProjects from "features/projects/hooks/useProjects";

// utils
import { Project } from "features/projects/store/ProjectsStore";
import setIsInbox from "utils/setIsInbox";

// styles
import * as S from "features/tasks/styles/tasksStyles";

type Params = {
  history: string | undefined;
};

type TaskProject = {
  taskProjectId: string;
} & RouteComponentProps<Params>;

const TaskProject = ({ taskProjectId, history }: TaskProject) => {
  const { allProjects } = useProjects();

  const projectNavigate = (project: Project) => {
    history.push({
      pathname: `/project/${setIsInbox(project)}`,
      state: { project: JSON.stringify(project) }
    });
  };

  return (
    <>
      {allProjects.map((project: Project) => {
        if (
          lowerCase(project.id) == lowerCase(taskProjectId) ||
          lowerCase(project.name) == lowerCase(taskProjectId)
        ) {
          return (
            <span onClick={() => projectNavigate(project)}>
              <S.TaskProjectBadge
                width="6px"
                height="6px"
                fontSize="12px"
                color={project.color || "#4e44f3"}
                text={project.name}
              />
            </span>
          );
        }
      })}
    </>
  );
};

export default withRouter(TaskProject);
