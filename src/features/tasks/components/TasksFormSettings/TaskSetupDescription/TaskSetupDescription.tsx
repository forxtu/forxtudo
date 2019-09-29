import React from "react";
import { Icon, Tooltip, Modal, Input } from "antd";

const { TextArea } = Input;

type TaskSetupDescription = {
  taskSettings: any;
};

const TaskSetupDescription = ({ taskSettings }: TaskSetupDescription) => {
  const {
    taskDescription,
    isTaskSetupDescriptionOpen,
    toggleIsTaskSetupDescriptionOpen,
    onTaskDescriptionCancelHandler,
    onTaskDescriptionConfirmHandler,
    setTaskDescriptionHandler
  } = taskSettings;

  return (
    <>
      <Modal
        title="Task description"
        visible={isTaskSetupDescriptionOpen}
        onOk={onTaskDescriptionConfirmHandler}
        onCancel={onTaskDescriptionCancelHandler}
      >
        <TextArea
          value={taskDescription}
          placeholder="Description"
          onChange={e => setTaskDescriptionHandler(e.target.value)}
        />
      </Modal>
      <Tooltip placement="bottom" title="Task description">
        <Icon
          type="file-text"
          style={{ fontSize: "18px" }}
          onClick={toggleIsTaskSetupDescriptionOpen}
        />
      </Tooltip>
    </>
  );
};

export default TaskSetupDescription;
