import React from "react";
import { Modal, Typography, Popover, List } from "antd";
import styled from "styled-components";

// hooks
import useTaskMoreActions from "features/tasks/hooks/useTaskMoreActions";

// utils
import { Task } from "features/tasks/store/TasksStore";

// styles
import * as S from "features/tasks/styles/tasksStyles";

const StlyedListItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  min-width: 200px;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }
`;

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
  const {
    allProjects,
    isMoveToProjectOpen,
    toggleIsMoveToProjectOpen,
    moveTaskToProjectHandler,
    globalSelectedProjectId
  } = useTaskMoreActions();

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
      <Popover
        placement="left"
        content={
          <List
            dataSource={allProjects}
            renderItem={(project: any) => (
              <StlyedListItem
                onClick={() =>
                  moveTaskToProjectHandler(task, project.id as string)
                }
              >
                {project.name}
                {globalSelectedProjectId === project.id ? (
                  <S.MoreListItemIcon type="check" style={{ color: "green" }} />
                ) : null}
              </StlyedListItem>
            )}
          />
        }
        trigger="click"
        visible={isMoveToProjectOpen}
        onVisibleChange={toggleIsMoveToProjectOpen}
      >
        <S.MoreListItem>
          <S.MoreListItemIcon type="right-circle" />
          <Text>Move to project</Text>
        </S.MoreListItem>
      </Popover>
      <S.MoreListItem onClick={showDeleteConfirm}>
        <S.DeleteIcon type="delete" />
        <Text type="danger">Delete task</Text>
      </S.MoreListItem>
    </S.MoreListWrapper>
  );
};

export default TaskItemMorePopover;
