// hooks
import useStores from "hooks/useStores";

// utils
import { Task } from "features/tasks/store/TasksStore";

const useTaskItem = () => {
  const { tasksStore } = useStores();

  const setSelectedTaskHandler = (task: Task) => {
    tasksStore.setSelectedTask(task);
  };

  return {
    setSelectedTaskHandler
  };
};

export default useTaskItem;
