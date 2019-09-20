import React from "react";
import { Icon, Tooltip, Select, Modal } from "antd";
import styled from "styled-components";

// hooks
import useTaskSettings from "features/tasks/hooks/useTaskSettings";

// utils
import { Project } from "features/projects/store/ProjectsStore";

const { Option } = Select;

const ControlsSelections = styled.div``;

type TasksFormSettings = {
  isTaskSettingsOpen: boolean;
  selectedProject: string;
  setProject: (value: string) => void;
  setIsTaskSettingsOpen: () => void;
  onTaskSettingsCancel: () => void;
  onTaskSettingsConfirm: () => void;
};

const TasksFormSettings = ({
  setProject,
  selectedProject,
  setIsTaskSettingsOpen,
  onTaskSettingsCancel,
  onTaskSettingsConfirm,
  isTaskSettingsOpen
}: TasksFormSettings) => {
  const { allProjects } = useTaskSettings();

  return (
    <ControlsSelections>
      <Tooltip placement="bottom" title="Setup your task">
        <Icon type="setting" onClick={setIsTaskSettingsOpen} />
      </Tooltip>
      <Modal
        title="Setup your task"
        visible={isTaskSettingsOpen}
        onOk={onTaskSettingsConfirm}
        onCancel={onTaskSettingsCancel}
      >
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a project"
          optionFilterProp="children"
          onChange={setProject}
          value={selectedProject}
          filterOption={(input, option) =>
            (option as any).props.children
              .toLowerCase()
              .indexOf(input.toLowerCase()) >= 0
          }
        >
          {allProjects.map((project: Project) => (
            <Option value={project.id}>{project.name}</Option>
          ))}
        </Select>
      </Modal>
    </ControlsSelections>
  );
};

export default TasksFormSettings;
