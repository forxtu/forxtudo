import React from "react";
import { Tag } from "antd";

// utils
import { Task } from "features/tasks/store/TasksStore";

type TaskDescriptionTags = {
  selectedTask: Task;
  onRemoveLabel: (task: Task, label: string) => void;
};

const TaskDescriptionTags = ({
  selectedTask,
  onRemoveLabel
}: TaskDescriptionTags) => {
  return (
    <>
      {selectedTask.labels.map(label => (
        <Tag closable onClose={() => onRemoveLabel(selectedTask, label)}>
          {label}
        </Tag>
      ))}
    </>
  );
};

export default TaskDescriptionTags;
