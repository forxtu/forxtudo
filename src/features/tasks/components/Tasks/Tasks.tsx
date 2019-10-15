import React from "react";
import { observer } from "mobx-react";

// components
import TasksList from "features/tasks/components/TasksList";
import TasksForm from "features/tasks/components/TasksForm";

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
    resetTaskValueHandler
  } = useTasks({ projectId });

  return (
    <div>
      <TasksList
        allTasks={allTasks}
        tasks={tasks}
        filteredByDateTasks={filteredByDateTasks}
        deleteTask={deleteTaskHandler}
        editTaskName={editTaskNameHandler}
        completeTask={completeTaskHandler}
        unCompleteTask={unCompleteTaskHandler}
        filterType={filterType as string}
      />
      <TasksForm
        addTask={addTaskHandler}
        setTaskValue={setTaskValueHandler}
        resetTaskValue={resetTaskValueHandler}
        taskValue={taskValue}
        globalSelectedProjectId={projectId}
      />
    </div>
  );
});

export default Tasks;
