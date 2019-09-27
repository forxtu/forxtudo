import { useState, useEffect } from "react";
import { trim, isEqual } from "lodash";
import { autorun } from "mobx";

// hooks
import useStores from "hooks/useStores";

// utils
import { Task } from "features/tasks/store/TasksStore";

type UseTaskItem = {
  task: any;
  editTaskName: any;
};

const useTaskItem = ({ task, editTaskName }: UseTaskItem) => {
  const { tasksStore, projectsStore } = useStores();

  const [taskName, setTaskName] = useState();
  const [prefix, setPrefix] = useState("@");
  const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

  const mentionsData: any = {
    "#": projectsStore.allProjects
  };

  const setTaskNameHandler = (text: string) => {
    setTaskName(text);
  };

  const setPrefixHandler = (_: string, prefix: string) => {
    setPrefix(prefix);
  };

  const onProjectSelect = (project: any) => {
    const pattern = /^((?!project.value).)*$/gi;
    const withoutProjectMention = taskName.match(pattern)[0].split("#")[0];

    setTaskName(trim(withoutProjectMention));

    setTaskProjectHandler(
      task,
      isEqual(project.value, "Inbox") ? "inbox" : project["data-project"].id
    );
  };

  const onBlurHandler = () => {
    editTaskName(task, taskName);
  };

  const setSelectedTaskHandler = (task: Task) => {
    tasksStore.setSelectedTask(task);
  };

  const setTaskProjectHandler = (task: Task, projectId: string) => {
    tasksStore.moveTaskToProject(task, projectId);
  };

  useEffect(() => {
    setTaskName(task.task);
  }, [task.task]);

  useEffect(() => {
    autorun(() => {
      if (
        tasksStore.selectedTask &&
        task &&
        tasksStore.selectedTask.id == task.id
      ) {
        setIsHighlighted(true);
      } else {
        setIsHighlighted(false);
      }
    });
  }, []);

  return {
    selectedTask: tasksStore.selectedTask,
    mentionsData,
    setTaskProjectHandler,
    setSelectedTaskHandler,
    isHighlighted,
    setTaskNameHandler,
    onProjectSelect,
    taskName,
    setPrefixHandler,
    onBlurHandler,
    prefix
  };
};

export default useTaskItem;
