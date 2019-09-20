import React from "react";
import { observer } from "mobx-react";

// components
import TasksList from "features/tasks/components/TasksList";
import TasksForm from "features/tasks/components/TasksForm";

//hooks
import useTasks from "features/tasks/hooks/useTasks";

type Tasks = {
  projectId: string;
};

const Tasks = observer(({ projectId }: Tasks) => {
  const {
    tasks,
    addTaskHandler,
    deleteTaskHandler,
    completeTaskHandler,
    unCompleteTaskHandler,
    setTaskValueHandler,
    taskValue
  } = useTasks({ projectId });

  return (
    <div>
      <TasksList
        tasks={tasks}
        deleteTask={deleteTaskHandler}
        completeTask={completeTaskHandler}
        unCompleteTask={unCompleteTaskHandler}
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
