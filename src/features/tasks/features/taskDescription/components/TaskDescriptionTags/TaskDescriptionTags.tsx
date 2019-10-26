import React from "react";
import { Tag } from "antd";

// utils
import { Task } from "features/tasks/store/TasksStore";

type TaskDescriptionTags = {
  selectedTask: Task;
};

const TaskDescriptionTags = ({ selectedTask }: TaskDescriptionTags) => {
  return (
    <>
      {selectedTask.labels.map(label => (
        <Tag closable onClose={() => console.log("close")}>
          {label}
        </Tag>
      ))}
    </>
  );
};

export default TaskDescriptionTags;
