import React from "react";
import { Modal, Typography } from "antd";

// utils
import { Task } from "features/tasks/store/TasksStore";

// styles
import * as S from "features/tasks/styles/tasksStyles";

const { confirm } = Modal;
const { Text } = Typography;

type TaskItemMorePopover = {
  deleteTask: (task: Task) => void;
  task: Task;
  setIsMoreOpenToggle: () => void;
};

const TaskItemMorePopover = ({
  deleteTask,
  task,
  setIsMoreOpenToggle
}: TaskItemMorePopover) => {
  const showDeleteConfirm = () => {
    setIsMoreOpenToggle();
    confirm({
      title: `${task.task}`,
      content: "Are you sure you want to delete this task?",
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        deleteTask(task);
      },
      onCancel() {}
    });
  };

  return (
    <S.MoreListWrapper>
      <S.MoreListItem onClick={showDeleteConfirm}>
        <S.DeleteIcon type="delete" />
        <Text type="danger">Delete task</Text>
      </S.MoreListItem>
    </S.MoreListWrapper>
  );
};

export default TaskItemMorePopover;
