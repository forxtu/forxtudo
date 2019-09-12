import React, { HTMLProps, ChangeEvent } from "react";

interface Props extends HTMLProps<HTMLFormElement> {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

const TodoForm = ({ onInputChange, inputValue, ...props }: Props) => {
  return (
    <form {...props}>
      <input
        placeholder="Type something..."
        onChange={onInputChange}
        value={inputValue}
      />
      <button>Create</button>
    </form>
  );
};

export default TodoForm;
