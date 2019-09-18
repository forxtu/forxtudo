import { ChangeEvent, useState, useEffect, useContext } from "react";
import { autorun } from "mobx";

// hooks
import useStores from "hooks/useStores";

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

  const deleteTaskHandler = (task: any) => {
    tasksStore.deleteTask(task);
  };

  const completeTaskHandler = (task: any) => {
    tasksStore.completeTask(task);
  };

  const unCompleteTaskHandler = (task: any) => {
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
