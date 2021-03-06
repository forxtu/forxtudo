// hooks
import useStores from "hooks/useStores";
import useTaskDateSetup from "features/tasks/hooks/useTaskDateSetup";
import useTaskProjectSetup from "features/tasks/hooks/useTaskProjectSetup";
import useTaskDescriptionSetup from "features/tasks/hooks/useTaskDescriptionSetup";
import useTaskPrioritySetup from "features/tasks/hooks/useTaskPrioritySetup";
import useTaskLabelsSetup from "features/tasks/hooks/useTaskLabelsSetup";

// utils
import {
  getDefaultSelectedDate,
  getDefaultSelectedDateObject
} from "utils/dates";

const useTaskSettings = (
  globalSelectedProjectId?: string,
  filterType?: string | undefined
) => {
  const { projectsStore, labelsStore } = useStores();

  // Date setup
  const taskDateSetup = useTaskDateSetup(filterType);
  const { setSelectedDate, setSelectedDateObject } = taskDateSetup;

  // Project setup
  const taskProjectSetup = useTaskProjectSetup(globalSelectedProjectId);
  const { setNewProjectId, seIsTaskSetupProjectOpenFalse } = taskProjectSetup;

  // Description setup
  const taskDescriptionSetup = useTaskDescriptionSetup();
  const { setTaskDescription } = taskDescriptionSetup;

  // Priority setup
  const taskPrioritiesSetup = useTaskPrioritySetup();
  const { setTaskPriority } = taskPrioritiesSetup;

  // Labels setup
  const taskLabelsSetup = useTaskLabelsSetup();
  const { setTaskLabels } = taskLabelsSetup;

  const resetTaskSetup = () => {
    seIsTaskSetupProjectOpenFalse();
    setNewProjectId(globalSelectedProjectId);
    setTaskDescription("");
    setSelectedDate(getDefaultSelectedDate(filterType));
    setSelectedDateObject(getDefaultSelectedDateObject(filterType));
    setTaskPriority(0);
    setTaskLabels([]);
  };

  return {
    allProjects: projectsStore.allProjects,
    allLabels: labelsStore.allLabels,
    resetTaskSetup,
    taskDateSetup,
    taskProjectSetup,
    taskDescriptionSetup,
    taskPrioritiesSetup,
    taskLabelsSetup
  };
};

export default useTaskSettings;
