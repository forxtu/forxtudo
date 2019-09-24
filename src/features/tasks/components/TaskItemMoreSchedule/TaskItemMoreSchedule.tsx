import React, { useContext } from "react";
import { Typography, Popover, Icon, Tooltip, Calendar } from "antd";
import moment, { Moment } from "moment";

// utils
import { Task } from "features/tasks/store/TasksStore";
import { TaskItemContext } from "features/tasks/components/TasksListItem";

// styles
import * as S from "features/tasks/styles/tasksStyles";

const { Paragraph } = Typography;

type TaskItemMoreScheduleProps = {
  isScheduleMoreOpen: boolean;
  toggleIsScheduleMoreOpen: () => void;
  onDateSelect: (task: Task, date: Moment | undefined) => void;
  task: Task;
};

const TaskItemMoreSchedule = ({
  isScheduleMoreOpen,
  toggleIsScheduleMoreOpen,
  onDateSelect,
  task
}: TaskItemMoreScheduleProps) => {
  const { setIsMoreOpenFalse } = useContext(TaskItemContext);
  return (
    <S.MoreListItem>
      <Paragraph strong>Schedule</Paragraph>
      <S.ScheduleControls>
        <Tooltip title="Today" placement="top">
          <S.MoreListItemIcon
            type="fire"
            onClick={() => {
              onDateSelect(task, moment());
              setIsMoreOpenFalse();
            }}
          />
        </Tooltip>
        <Tooltip title="Tomorrow" placement="top">
          <S.MoreListItemIcon
            type="reload"
            onClick={() => {
              onDateSelect(
                task,
                moment()
                  .add(1, "day")
                  .endOf("day")
              );
              setIsMoreOpenFalse();
            }}
          />
        </Tooltip>
        <Tooltip title="Next week" placement="top">
          <S.MoreListItemIcon
            type="calendar"
            onClick={() => {
              onDateSelect(
                task,
                moment()
                  .endOf("isoWeek")
                  .add(1, "day")
              );
              setIsMoreOpenFalse();
            }}
          />
        </Tooltip>
        <Popover
          placement="bottom"
          content={
            <Calendar
              fullscreen={false}
              onSelect={newDate => onDateSelect(task, newDate)}
            />
          }
          trigger="click"
          visible={isScheduleMoreOpen}
          onVisibleChange={toggleIsScheduleMoreOpen}
        >
          <Tooltip title="More" placement="top">
            <Icon type="ellipsis" />
          </Tooltip>
        </Popover>
      </S.ScheduleControls>
    </S.MoreListItem>
  );
};

export default TaskItemMoreSchedule;
