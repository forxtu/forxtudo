import { isEqual } from "lodash";

export const removeFromArray = (arr: any[], item: any) =>
  arr.filter(arrItem => !isEqual(arrItem, item));
