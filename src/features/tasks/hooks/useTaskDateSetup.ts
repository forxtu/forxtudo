import { useState } from "react";

const useTaskDateSetup = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDateObject, setSelectedDateObject] = useState(null);

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
