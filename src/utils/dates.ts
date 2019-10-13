import moment from "moment";

export const dateToFromNowDaily = (date: string | Date) =>
  date !== "" &&
  moment(date).calendar(undefined, {
    lastWeek: "[Last] dddd",
    lastDay: "[Yesterday]",
    sameDay: "[Today]",
    nextDay: "[Tomorrow]",
    nextWeek: "[Next] dddd",
    sameElse: "MMM Do YY"
  });

export const isDateBeforeTodayHandler = (date: string | Date) =>
  moment(date).isBefore(moment(), "day");
