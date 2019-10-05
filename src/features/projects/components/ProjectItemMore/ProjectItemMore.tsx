import React from "react";
import { Popover, Tooltip } from "antd";

// utils
import { Project } from "features/projects/store/ProjectsStore";

// components
import ProjectItemMorePopover from "features/projects/components/ProjectItemMore/ProjectItemMorePopover";

// styles
import * as S from "features/tasks/styles/tasksStyles";

type ProjectItemMore = {
  project: Project;
  isMoreOpen: boolean;
  isFavorite?: boolean;
  setIsMoreOpenToggle: () => void;
};

const ProjectItemMore = ({
  project,
  isMoreOpen,
  setIsMoreOpenToggle,
  isFavorite
}: ProjectItemMore) => {
  return (
    <Tooltip placement="right" title="More">
      <Popover
        placement="bottomRight"
        content={
          <ProjectItemMorePopover
            isFavorite={isFavorite}
            project={project}
            setIsMoreOpenToggle={setIsMoreOpenToggle}
          />
        }
        title={project.name}
        trigger="click"
        visible={isMoreOpen}
        onVisibleChange={setIsMoreOpenToggle}
      >
        <S.More type="ellipsis" />
      </Popover>
    </Tooltip>
  );
};

export default ProjectItemMore;
