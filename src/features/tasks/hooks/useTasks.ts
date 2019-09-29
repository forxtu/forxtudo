import { ChangeEvent, useState, useEffect, useContext } from "react";

// hooks
import useStores from "hooks/useStores";

// utils
import { Task } from "features/tasks/store/TasksStore";

export type AddTaskArgs = {
  projectId: string;
  date?: string;
  description?: string;
};

type UseTasks = {
  projectId: string;
};

const useTasks = ({ projectId }: UseTasks) => {
  const { tasksStore } = useStores();

  const [taskValue, setTaskValue] = useState("");

  const addTaskHandler = ({ projectId, date, description }: AddTaskArgs) => {
    projectId
      ? tasksStore.addTask({
          taskValue,
          projectId,
          date,
          description
        })
      : tasksStore.addTask({
          taskValue,
          projectId,
          date,
          description
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

  const resetTaskValueHandler = () => {
    setTaskValue("");
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
    taskValue,
    resetTaskValueHandler
  };
};

export default useTasks;
