import { ChangeEvent, useState, useEffect, useContext } from "react";

// hooks
import useStores from "hooks/useStores";

// utils
import { Task } from "features/tasks/store/TasksStore";

type UseTasks = {
  projectId: string;
};

const useTasks = ({ projectId }: UseTasks) => {
  const { tasksStore } = useStores();

  const [taskValue, setTaskValue] = useState("");

  const addTaskHandler = (
    event: Event,
    newProjectId?: string,
    selectedDate?: string
  ) => {
    event.preventDefault();

    newProjectId
      ? tasksStore.addTask({
          taskValue,
          projectId: newProjectId,
          date: selectedDate
        })
      : tasksStore.addTask({
          taskValue,
          projectId,
          date: selectedDate
        });

    setTaskValue("");
  };

  const editTaskNameHandler = (task: Task, taskValue: string) => {
    tasksStore.editTaskName(task, taskValue);
  };

  const deleteTaskHandler = (task: Task) => {
    tasksStore.deleteTask(task);
  };

  const completeTaskHandler = (task: Task) => {
    tasksStore.completeTask(task);
  };

  const unCompleteTaskHandler = (task: Task) => {
    tasksStore.unCompleteTask(task);
  };

  const setTaskValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskValue(event.currentTarget.value);
  };

  useEffect(() => {
    tasksStore.fetchAllTasks();
  }, []);

  return {
    tasks: tasksStore.filteredByProjectTasks,
    filteredByDateTasks: tasksStore.filteredByDateTasks,
    addTaskHandler,
    deleteTaskHandler,
    editTaskNameHandler,
    completeTaskHandler,
    unCompleteTaskHandler,
    setTaskValueHandler,
    taskValue
  };
};

export default useTasks;
