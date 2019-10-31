import React from "react";

// utils
import { dateToFromNowDaily, isDateBeforeTodayHandler } from "utils/dates";

// components
import { SmallText } from "components/elements/Text";

// styles
import * as S from "features/tasks/styles/tasksStyles";

type TaskDate = {
  taskDate: string | Date;
};

const TaskDate = ({ taskDate }: TaskDate) => (
  <S.DateWrapper>
    <SmallText type={isDateBeforeTodayHandler(taskDate) ? "danger" : undefined}>
      {dateToFromNowDaily(taskDate)}
    </SmallText>
  </S.DateWrapper>
);

export default TaskDate;
