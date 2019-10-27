import React from "react";
import { Result, Icon } from "antd";
import { isNil } from "lodash";
import { observer } from "mobx-react";

// hooks
import useTaskDescription from "features/tasks/features/taskDescription/hooks/useTaskDescription";

// components
import TaskDescriptionHeader from "features/tasks/features/taskDescription/components/TaskDescriptionHeader";
import TaskDescriptionArea from "features/tasks/features/taskDescription/components/TaskDescriptionArea";
import TaskDescriptionTags from "features/tasks/features/taskDescription/components/TaskDescriptionTags";

const TaskDescription = observer(() => {
  const {
    taskTempDescription,
    setTaskTempDescription,
    selectedTask,
    editTaskDescriptionHandler,
    handleRemoveLabel
  } = useTaskDescription();

  return (
    <div>
      {isNil(selectedTask) ? (
        <Result
          icon={<Icon type="file-unknown" theme="twoTone" />}
          title="Click a task title to view its details!"
        />
      ) : (
        <>
          <TaskDescriptionHeader selectedTask={selectedTask} />
          <TaskDescriptionArea />
          <TaskDescriptionTags
            selectedTask={selectedTask}
            onRemoveLabel={handleRemoveLabel}
          />
        </>
      )}
    </div>
  );
});

export default TaskDescription;
