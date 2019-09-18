import { ChangeEvent, useState, useEffect, useContext } from "react";

// utils
import { db } from "config/Auth";
import { UserContext } from "containers/core/App";

type UseTasks = {
  projectId: string;
};

const useTasks = ({ projectId }: UseTasks) => {
  const [tasks, setTasks] = useState<Array<any>>([]);
  const [taskValue, setTaskValue] = useState("");

  const { user } = useContext(UserContext);

  const setTasksHandler = (event: Event) => {
    event.preventDefault();

    setTasks(previousTasks => [
      ...previousTasks,
      {
        task: taskValue,
        archived: false,
        completed: false,
        date: "",
        projectId,
        userId: user
      }
    ]);

    db.collection("tasks").add({
      task: taskValue,
      archived: false,
      completed: false,
      date: "",
      projectId,
      userId: user
    });

    setTaskValue("");
  };

  const setTaskValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskValue(event.currentTarget.value);
  };

  useEffect(() => {
    db.collection("tasks")
      .where("userId", "==", user)
      .where("projectId", "==", projectId)
      .get()
      .then(snapshot => {
        const allTasks = snapshot.docs.map(task => ({
          id: task.id,
          ...task.data()
        }));

        console.log(allTasks, "allTasks");

        setTasks(allTasks);
      });
  }, [projectId]);

  return {
    tasks,
    setTasksHandler,
    setTaskValueHandler,
    taskValue
  };
};

export default useTasks;
