import React from "react";
import TasksListItem from "features/tasks/components/TasksListItem";
import { List } from "antd";

// utils
import { Task } from "features/tasks/store/TasksStore";

type TasksList = {
  tasks: Task[];
  filteredByDateTasks: Task[];
  filterType: string;
  deleteTask: (task: Task) => void;
  editTaskName: (task: Task, taskValue: string) => void;
  completeTask: (task: Task) => void;
  unCompleteTask: (task: Task) => void;
};

const TasksList = ({
  tasks,
  filterType,
  filteredByDateTasks,
  deleteTask,
  editTaskName,
  completeTask,
  unCompleteTask
}: TasksList) => {
  return (
    <List>
      {(filterType === "date" ? filteredByDateTasks : tasks).map(
        (task: Task) => (
          <TasksListItem
            task={task}
            key={task.id}
            deleteTask={deleteTask}
            editTaskName={editTaskName}
            completeTask={completeTask}
            unCompleteTask={unCompleteTask}
          />
        )
      )}
    </List>
  );
};

export default TasksList;
