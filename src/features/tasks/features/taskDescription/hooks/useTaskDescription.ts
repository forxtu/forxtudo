import { useState, useEffect } from "react";
import { autorun } from "mobx";

// hooks
import useStores from "hooks/useStores";

// utils
import { Task } from "features/tasks/store/TasksStore";

const useTaskDescription = () => {
  const { tasksStore } = useStores();

  const [selectedTaskItem, setSelectedTaskItem] = useState();
  const [taskTempDescription, setTaskTempDescription] = useState();

  const editTaskDescriptionHandler = (
    { target: { value } }: any,
    task: Task
  ) => {
    tasksStore.editTaskDescription(task, value);
  };

  const handleRemoveLabel = (task: Task, label: string) => {
    tasksStore.removeLabelFromTask(task, label);
  };

  useEffect(() => {
    autorun(() => {
      setTaskTempDescription(tasksStore.selectedTask.description);
      setSelectedTaskItem(tasksStore.selectedTask);
    });
  }, []);

  return {
    taskTempDescription,
    setTaskTempDescription,
    selectedTask: selectedTaskItem,
    editTaskDescriptionHandler,
    handleRemoveLabel
  };
};

export default useTaskDescription;
