import React, { HTMLProps, ChangeEvent, useState } from "react";
import { Button, Input } from "antd";
import styled from "styled-components";

// hooks
import useBoolean from "hooks/useBoolean";

interface Props extends HTMLProps<HTMLFormElement> {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  addTask: (event: any) => void;
}

const StyledInput = styled(Input)`
  margin-bottom: 12px;
`;

const StyledButton = styled(Button)`
  margin-right: 12px;
`;

const TodoForm = ({ onInputChange, inputValue, addTask }: Props) => {
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
            onChange={onInputChange}
            value={inputValue}
          />
          <StyledButton type="primary" onClick={addTask}>
            Create
          </StyledButton>
          <Button onClick={setIsEditModeOpenFalse}>Cancel</Button>
        </>
      ) : (
        <Button
          onClick={setIsEditModeOpenTrue}
          type="primary"
          icon="plus"
          size="large"
          shape="round"
        >
          Add task
        </Button>
      )}
    </div>
  );
};

export default TodoForm;
