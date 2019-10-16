import { useState } from "react";

// utils
import {
  getDefaultSelectedDate,
  getDefaultSelectedDateObject
} from "utils/dates";

const useTaskDateSetup = (filterType: string | undefined) => {
  const [selectedDate, setSelectedDate] = useState(
    getDefaultSelectedDate(filterType)
  );
  const [selectedDateObject, setSelectedDateObject] = useState(
    getDefaultSelectedDateObject(filterType)
  );

  const setDateHandler = (dateObject: any, date: string) => {
    setSelectedDate(date);
    setSelectedDateObject(dateObject);
  };

  return {
    selectedDate,
    selectedDateObject,
    setSelectedDate,
    setSelectedDateObject,
    setDateHandler
  };
};

export default useTaskDateSetup;
