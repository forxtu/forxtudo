import React from "react";

// utils
import { Task } from "features/tasks/store/TasksStore";

type TaskDescriptionHeader = {
  selectedTask: Task;
};

const TaskDescriptionHeader = ({ selectedTask }: TaskDescriptionHeader) => {
  return (
    <div>
      <h1>{selectedTask.task}</h1>
    </div>
  );
};

export default TaskDescriptionHeader;
