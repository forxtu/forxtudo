import React from "react";

// hooks
import useTaskDescription from "features/tasks/features/taskDescription/hooks/useTaskDescription";

// styles
import { StyledTextArea } from "components/elements/Form/Input";

const TaskDescriptionArea = () => {
  const {
    taskTempDescription,
    setTaskTempDescription,
    selectedTask,
    editTaskDescriptionHandler
  } = useTaskDescription();

  return (
    <StyledTextArea
      onBlur={(e: any) => editTaskDescriptionHandler(e, selectedTask)}
      value={taskTempDescription}
      onChange={(e: any) => setTaskTempDescription(e.target.value)}
      placeholder="Task description..."
      autosize
    />
  );
};

export default TaskDescriptionArea;
