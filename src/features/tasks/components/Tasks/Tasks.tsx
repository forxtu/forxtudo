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
    tasks,
    filteredByDateTasks,
    addTaskHandler,
    deleteTaskHandler,
    editTaskNameHandler,
    completeTaskHandler,
    unCompleteTaskHandler,
    setTaskValueHandler,
    taskValue
  } = useTasks({ projectId });

  return (
    <div>
      <TasksList
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
        taskValue={taskValue}
      />
    </div>
  );
});

export default Tasks;
