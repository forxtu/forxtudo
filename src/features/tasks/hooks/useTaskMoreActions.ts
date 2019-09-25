import moment from "moment";

// hooks
import useBoolean from "hooks/useBoolean";
import useStores from "hooks/useStores";

// utils
import { Task } from "features/tasks/store/TasksStore";

const useTaskMoreActions = () => {
  const { projectsStore, tasksStore } = useStores();

  const {
    value: isMoveToProjectOpen,
    setFalse: setIsMoveToProjectOpenFalse,
    toggle: toggleIsMoveToProjectOpen
  } = useBoolean(false);
  const {
    value: isScheduleMoreOpen,
    toggle: toggleIsScheduleMoreOpen,
    setFalse: setFalseIsScheduleMoreOpen
  } = useBoolean(false);

  const moveTaskToProjectHandler = (task: Task, projectId: string) => {
    tasksStore.moveTaskToProject(task, projectId);
  };

  function onDateSelectHandler(task: Task, newDate: any) {
    const date = moment(newDate).format("YYYY-MM-DD");

    tasksStore.editTaskDate(task, date);
    setFalseIsScheduleMoreOpen();
  }

  return {
    allProjects: projectsStore.allProjects,
    globalSelectedProjectId: projectsStore.selectedProjectId,
    isMoveToProjectOpen,
    toggleIsMoveToProjectOpen,
    moveTaskToProjectHandler,
    isScheduleMoreOpen,
    toggleIsScheduleMoreOpen,
    onDateSelectHandler
  };
};

export default useTaskMoreActions;