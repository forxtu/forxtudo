import moment from "moment";
import { isEqual } from "lodash";

export type FilterType = string | undefined;
type DateType = string | Date;

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

export const isDateBeforeTodayHandler = (date: DateType) =>
  moment(date).isBefore(moment(), "day");

export const getDefaultSelectedDate = (filterType: FilterType) =>
  isEqual(filterType, "date") ? moment().format("YYYY-MM-DD") : "";

export const getDefaultSelectedDateObject = (filterType: FilterType) =>
  isEqual(filterType, "date") ? moment() : null;
