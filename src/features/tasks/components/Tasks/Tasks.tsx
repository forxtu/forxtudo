import React from "react";
import TodoList from "features/tasks/components/TodoList";
import TodoForm from "features/tasks/components/TodoForm";

//hooks
import useTasks from "features/tasks/hooks/useTasks";

const Tasks = () => {
  const { todos, addTaskHandler, setTodoValueHandler, todoValue } = useTasks();

  return (
    <div>
      <TodoList todos={todos} />
      <TodoForm
        onSubmit={addTaskHandler}
        onInputChange={setTodoValueHandler}
        inputValue={todoValue}
      />
    </div>
  );
};

export default Tasks;
