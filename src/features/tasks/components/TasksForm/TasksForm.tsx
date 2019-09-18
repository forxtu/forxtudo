import React, { HTMLProps, ChangeEvent, useState } from "react";
import { Button, Input } from "antd";
import styled from "styled-components";

// hooks
import useBoolean from "hooks/useBoolean";

interface Props extends HTMLProps<HTMLFormElement> {
  setTaskValue: (event: ChangeEvent<HTMLInputElement>) => void;
  taskValue: string;
  setTasks: (event: any) => void;
}

const StyledInput = styled(Input)`
  margin-bottom: 12px;
  margin-top: 12px;
`;

const StyledButton = styled(Button)`
  margin-right: 12px;
`;

const TasksForm = ({ setTaskValue, taskValue, setTasks }: Props) => {
  const {
    value: isEditModeOpen,
    setTrue: setIsEditModeOpenTrue,
    setFalse: setIsEditModeOpenFalse
  } = useBoolean(false);

  return (
    <div>
      {isEditModeOpen ? (
        <>
          <StyledInput
            placeholder="Type something..."
            onChange={setTaskValue}
            value={taskValue}
          />
          <StyledButton type="primary" onClick={setTasks}>
            Create
          </StyledButton>
          <Button onClick={setIsEditModeOpenFalse}>Cancel</Button>
        </>
      ) : (
        <Button
          onClick={setIsEditModeOpenTrue}
          type="primary"
          icon="plus"
          size="default"
          shape="round"
        >
          Add task
        </Button>
      )}
    </div>
  );
};

export default TasksForm;
