import { ChangeEvent, useState, useEffect, useContext } from "react";
import { autorun } from "mobx";

// hooks
import useStores from "hooks/useStores";

// utils
import { Task } from "features/tasks/store/TasksStore";

type UseTasks = {
  projectId: string;
};

const useTasks = ({ projectId }: UseTasks) => {
  const { tasksStore, projectsStore } = useStores();

  const [taskValue, setTaskValue] = useState("");

  const addTaskHandler = (event: Event) => {
    event.preventDefault();

    tasksStore.addTask({
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
    tasksStore.fetchAllTasks(projectId);
    // autorun(() => {
    //   projectsStore.selectedProjectId &&
    //     tasksStore.fetchAllTasks(projectsStore.selectedProjectId);
    // });
  }, [projectId]);

  return {
    tasks: tasksStore.allTasks,
    addTaskHandler,
    deleteTaskHandler,
    completeTaskHandler,
    unCompleteTaskHandler,
    setTaskValueHandler,
    taskValue
  };
};

export default useTasks;
