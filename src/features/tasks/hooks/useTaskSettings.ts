// hooks
import useStores from "hooks/useStores";
import useTaskDateSetup from "features/tasks/hooks/useTaskDateSetup";
import useTaskProjectSetup from "features/tasks/hooks/useTaskProjectSetup";
import useTaskDescriptionSetup from "features/tasks/hooks/useTaskDescriptionSetup";
import useTaskPrioritySetup from "features/tasks/hooks/useTaskPrioritySetup";

const useTaskSettings = () => {
  const { projectsStore } = useStores();

  // Date setup
  const taskDateSetup = useTaskDateSetup();
  const { setSelectedDate, setSelectedDateObject } = taskDateSetup;

  // Project setup
  const taskProjectSetup = useTaskProjectSetup();
  const { setNewProjectId, seIsTaskSetupProjectOpenFalse } = taskProjectSetup;

  // Description setup
  const taskDescriptionSetup = useTaskDescriptionSetup();
  const { setTaskDescription } = taskDescriptionSetup;

  // Priority setup
  const taskPrioritiesSetup = useTaskPrioritySetup();
  const { setTaskPriority } = taskPrioritiesSetup;

  const resetTaskSetup = () => {
    seIsTaskSetupProjectOpenFalse();
    setNewProjectId("inbox");
    setTaskDescription("");
    setSelectedDate("");
    setSelectedDateObject(null);
    setTaskPriority(0);
  };

  return {
    allProjects: projectsStore.allProjects,
    resetTaskSetup,
    taskDateSetup,
    taskProjectSetup,
    taskDescriptionSetup,
    taskPrioritiesSetup
  };
};

export default useTaskSettings;
