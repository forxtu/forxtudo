import React from "react";
import { observer } from "mobx-react";

// components
import TasksList from "features/tasks/components/TasksList";
import TasksForm from "features/tasks/components/TasksForm";
import TasksFilters from "features/tasks/components/TasksFilters";

//hooks
import useTasks from "features/tasks/hooks/useTasks";

type Tasks = {
  projectId: string;
  filterType?: string;
};

const Tasks = observer(({ projectId, filterType = "" }: Tasks) => {
  const {
    allTasks,
    tasks,
    filteredByDateTasks,
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
  } = useTasks({ projectId });

  return (
    <div>
      <TasksFilters
        isCompletedTasksShown={isCompletedTasksShown}
        toggleIsCompletedTasksShown={toggleIsCompletedTasksShown}
      />
      <TasksList
        allTasks={allTasks}
        tasks={tasks}
        filteredByDateTasks={filteredByDateTasks}
        deleteTask={deleteTaskHandler}
        editTaskName={editTaskNameHandler}
        completeTask={completeTaskHandler}
        unCompleteTask={unCompleteTaskHandler}
        isCompletedTasksShown={isCompletedTasksShown}
        filterType={filterType as string}
      />
      <TasksForm
        addTask={addTaskHandler}
        setTaskValue={setTaskValueHandler}
        resetTaskValue={resetTaskValueHandler}
        taskValue={taskValue}
        globalSelectedProjectId={projectId}
        filterType={filterType}
      />
    </div>
  );
});

export default Tasks;
