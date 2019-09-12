import { FormEvent, ChangeEvent, useState, useEffect, useContext } from "react";

// utils
import { db } from "config/Auth";
import { UserContext } from "containers/core/App";

const useTasks = () => {
  const [todos, setTodos] = useState<Array<any>>([]);
  const [todoValue, setTodoValue] = useState("");

  const { user } = useContext(UserContext);

  const addTaskHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTodos(previousTodos => [
      ...previousTodos,
      {
        task: todoValue,
        archived: false,
        completed: false,
        date: "",
        projectId: "1",
        userId: user
      }
    ]);

    db.collection("tasks").add({
      task: todoValue,
      archived: false,
      completed: false,
      date: "",
      projectId: "1",
      userId: user
    });

    setTodoValue("");
  };

  const setTodoValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.currentTarget.value);
  };

  useEffect(() => {
    db.collection("tasks")
      .where("userId", "==", user)
      .get()
      .then(snapshot => {
        const allTasks = snapshot.docs.map(task => ({
          id: task.id,
          ...task.data()
        }));

        setTodos(allTasks);
      });
  }, [todos]);

  return {
    todos,
    addTaskHandler,
    setTodoValueHandler,
    todoValue
  };
};

export default useTasks;
