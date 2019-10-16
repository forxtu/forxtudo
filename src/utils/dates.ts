import moment from "moment";
import { isEqual } from "lodash";

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

export const getDefaultSelectedDate = (filterType: string | undefined) =>
  isEqual(filterType, "date") ? moment().format("YYYY-MM-DD") : "";

export const getDefaultSelectedDateObject = (filterType: string | undefined) =>
  isEqual(filterType, "date") ? moment() : null;
