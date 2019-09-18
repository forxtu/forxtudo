import React from "react";
import TasksListItem from "features/tasks/components/TasksListItem";
import { List } from "antd";

// utils
import { Task } from "features/tasks/store/TasksStore";

type TasksList = {
  tasks: Task[];
  deleteTask: (task: Task) => void;
  completeTask: (task: Task) => void;
  unCompleteTask: (task: Task) => void;
};

const TasksList = ({
  tasks,
  deleteTask,
  completeTask,
  unCompleteTask
}: TasksList) => {
  return (
    <List>
      {tasks.map(task => (
        <TasksListItem
          task={task}
          key={task.id}
          deleteTask={deleteTask}
          completeTask={completeTask}
          unCompleteTask={unCompleteTask}
        />
      ))}
    </List>
  );
};

export default TasksList;
