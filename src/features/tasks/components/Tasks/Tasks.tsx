import React from "react";
import { observer } from "mobx-react";

// components
import TodoList from "features/tasks/components/TodoList";
import TodoForm from "features/tasks/components/TodoForm";

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
      <TodoList
        todos={tasks}
        deleteTask={deleteTaskHandler}
        completeTask={completeTaskHandler}
        unCompleteTask={unCompleteTaskHandler}
      />
      <TodoForm
        setTasks={addTaskHandler}
        setTaskValue={setTaskValueHandler}
        taskValue={taskValue}
      />
    </div>
  );
});

export default Tasks;
