import React from "react";
import { Result, Icon, Input } from "antd";
import { isNil } from "lodash";

// hooks
import useTaskDescription from "features/tasks/features/taskDescription/hooks/useTaskDescription";

const { TextArea } = Input;

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
          <h1>{selectedTask.task}</h1>
          <TextArea
            onBlur={(e: any) => editTaskDescriptionHandler(e, selectedTask)}
            value={taskTempDescription}
            onChange={(e: any) => setTaskTempDescription(e.target.value)}
            placeholder="Task description..."
            autosize
          />
        </>
      )}
    </div>
  );
};

export default TaskDescription;
