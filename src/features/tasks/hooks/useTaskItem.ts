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
    selectedTask: tasksStore.selectedTask,
    setSelectedTaskHandler
  };
};

export default useTaskItem;
