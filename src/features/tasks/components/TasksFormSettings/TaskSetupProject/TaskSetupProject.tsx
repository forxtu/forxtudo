import React from "react";
import { Icon, Tooltip, Popover } from "antd";

// utils
import { Project } from "features/projects/store/ProjectsStore";
import setIsInbox from "utils/setIsInbox";

// components
import DefaultProjectItem from "components/blocks/DefaultProjectItem";

// styles
import * as S from "features/tasks/components/TasksFormSettings/tasksFormSettingsStyles";
import { MoreWrapper } from "components/elements/List";
import ColorBadge from "components/elements/ColorBadge";

type TaskSetupProject = {
  taskSettings: any;
  allProjects: Project[];
};

const TaskSetupProject = ({ taskSettings, allProjects }: TaskSetupProject) => {
  const {
    newProjectId,
    setProjectHandler,
    toggleIsTaskSetupProjectOpen,
    isTaskSetupProjectOpen
  } = taskSettings;

  return (
    <Tooltip placement="bottom" title="Select a project">
      <Popover
        placement="bottom"
        content={
          <MoreWrapper
            dataSource={allProjects}
            renderItem={(project: any) => (
              <S.SelectProjectItem
                onClick={() => setProjectHandler(setIsInbox(project) as string)}
              >
                {project.isDefault ? (
                  <DefaultProjectItem project={project} />
                ) : (
                  <ColorBadge color={project.color} text={project.name} />
                )}
                {newProjectId === setIsInbox(project) ? (
                  <Icon type="check" style={{ color: "green" }} />
                ) : null}
              </S.SelectProjectItem>
            )}
          />
        }
        trigger="click"
        visible={isTaskSetupProjectOpen}
        onVisibleChange={toggleIsTaskSetupProjectOpen}
      >
        <Icon type="project" style={{ fontSize: "18px" }} />
      </Popover>
    </Tooltip>
  );
};

export default TaskSetupProject;
