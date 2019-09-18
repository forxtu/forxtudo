import React from "react";
import TodoList from "features/tasks/components/TodoList";
import TodoForm from "features/tasks/components/TodoForm";

//hooks
import useTasks from "features/tasks/hooks/useTasks";

type Tasks = {
  projectId: string;
};

const Tasks = ({ projectId }: Tasks) => {
  const { tasks, setTasksHandler, setTaskValueHandler, taskValue } = useTasks({
    projectId
  });

  return (
    <div>
      <TodoList todos={tasks} />
      <TodoForm
        setTasks={setTasksHandler}
        setTaskValue={setTaskValueHandler}
        taskValue={taskValue}
      />
    </div>
  );
};

export default Tasks;
