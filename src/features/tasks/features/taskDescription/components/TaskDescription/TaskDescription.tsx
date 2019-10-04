import React from "react";
import { Result, Icon } from "antd";
import { isNil } from "lodash";

// hooks
import useTaskDescription from "features/tasks/features/taskDescription/hooks/useTaskDescription";

// components
import TaskDescriptionHeader from "features/tasks/features/taskDescription/components/TaskDescriptionHeader";
import TaskDescriptionArea from "features/tasks/features/taskDescription/components/TaskDescriptionArea";

const TaskDescription = () => {
  const {
    taskTempDescription,
    setTaskTempDescription,
    selectedTask,
    editTaskDescriptionHandler
  } = useTaskDescription();

  return (
    <div>
      {isNil(selectedTask) ? (
        <Result
          icon={<Icon type="file-unknown" theme="twoTone" />}
          title="Click a task title to view its details!"
        />
      ) : (
        <>
          <TaskDescriptionHeader selectedTask={selectedTask} />
          <TaskDescriptionArea />
        </>
      )}
    </div>
  );
};

export default TaskDescription;
