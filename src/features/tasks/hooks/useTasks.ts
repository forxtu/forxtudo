import { ChangeEvent, useState, useEffect, useContext } from "react";

// hooks
import useStores from "hooks/useStores";
import useBoolean from "hooks/useBoolean";

// utils
import { Label } from "features/labels/store/LabelsStore";
import { Task } from "features/tasks/store/TasksStore";

export type AddTaskArgs = {
  projectId: string | undefined;
  date?: string | Date;
  description?: string;
  priority?: number;
  labels?: Label[];
};

type UseTasks = {
  projectId: string;
};

const useTasks = ({ projectId }: UseTasks) => {
  const { tasksStore } = useStores();
  const {
    value: isCompletedTasksShown,
    toggle: toggleIsCompletedTasksShown
  } = useBoolean(true);

  const [taskValue, setTaskValue] = useState("");

  const addTaskHandler = ({
    projectId,
    date,
    description,
    priority,
    labels
  }: AddTaskArgs) => {
    projectId
      ? tasksStore.addTask({
          taskValue,
          projectId,
          date,
          description,
          priority,
          labels
        })
      : tasksStore.addTask({
          taskValue,
          projectId,
          date,
          description,
          priority,
          labels
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
    allTasks: tasksStore.allTasks,
    tasks: tasksStore.filteredByProjectTasks,
    filteredByDateTasks: tasksStore.filteredByDateTasks,
    addTaskHandler,
    deleteTaskHandler,
    editTaskNameHandler,
    completeTaskHandler,
    unCompleteTaskHandler,
    setTaskValueHandler,
    taskValue,
    resetTaskValueHandler,
    isCompletedTasksShown,
    toggleIsCompletedTasksShown
  };
};

export default useTasks;
