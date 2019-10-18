import React from "react";
import { Modal, Typography, Popover, List } from "antd";
import styled from "styled-components";

// hooks
import useTaskMoreActions from "features/tasks/hooks/useTaskMoreActions";

// utils
import { Task } from "features/tasks/store/TasksStore";
import { getProjectIdDependingOnType } from "utils/projects";

// components
import TaskItemMoreSchedule from "features/tasks/components/TaskItemMoreSchedule";
import TaskItemMorePriority from "features/tasks/components/TaskItemMorePopover/TaskItemMorePriority";

// styles
import {
  MoreWrapper,
  MoreItemBtn,
  MoreItemIconsWrapper,
  MoreItemIcon
} from "components/elements/List";
import * as S from "features/tasks/styles/tasksStyles";

const StyledListItem = styled(List.Item)`
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
    globalSelectedProjectId,
    isScheduleMoreOpen,
    toggleIsScheduleMoreOpen,
    onDateSelectHandler,
    updateTaskPriorityHandler
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
    <MoreWrapper>
      <TaskItemMoreSchedule
        isScheduleMoreOpen={isScheduleMoreOpen}
        toggleIsScheduleMoreOpen={toggleIsScheduleMoreOpen}
        onDateSelect={onDateSelectHandler}
        task={task}
      />
      <TaskItemMorePriority
        task={task}
        updateTaskPriority={updateTaskPriorityHandler}
      />
      <Popover
        placement="right"
        content={
          <List
            dataSource={allProjects}
            renderItem={(project: any) => (
              <StyledListItem
                onClick={() =>
                  moveTaskToProjectHandler(task, getProjectIdDependingOnType(
                    project
                  ) as string)
                }
              >
                {project.name}
                {globalSelectedProjectId === project.id ? (
                  <MoreItemIcon type="check" style={{ color: "green" }} />
                ) : null}
              </StyledListItem>
            )}
          />
        }
        trigger="click"
        visible={isMoveToProjectOpen}
        onVisibleChange={toggleIsMoveToProjectOpen}
      >
        <MoreItemBtn>
          <MoreItemIconsWrapper>
            <MoreItemIcon type="right-circle" />
            <Text>Move to project</Text>
          </MoreItemIconsWrapper>
        </MoreItemBtn>
      </Popover>
      <MoreItemBtn onClick={showDeleteConfirm}>
        <MoreItemIconsWrapper>
          <MoreItemIcon type="delete" style={{ color: "red" }} />
          <Text type="danger">Delete task</Text>
        </MoreItemIconsWrapper>
      </MoreItemBtn>
    </MoreWrapper>
  );
};

export default TaskItemMorePopover;
