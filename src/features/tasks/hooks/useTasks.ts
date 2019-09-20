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

  const addTaskHandler = (event: Event, newProjectId?: string) => {
    event.preventDefault();

    newProjectId
      ? tasksStore.addTask({
          taskValue,
          projectId: newProjectId
        })
      : tasksStore.addTask({
          taskValue,
          projectId
        });

    setTaskValue("");
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
    addTaskHandler,
    deleteTaskHandler,
    completeTaskHandler,
    unCompleteTaskHandler,
    setTaskValueHandler,
    taskValue
  };
};

export default useTasks;
