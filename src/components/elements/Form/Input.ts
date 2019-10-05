import styled from "styled-components";
import { Input } from "antd";

const { TextArea } = Input;

const StyledInput = styled(Input)`
  margin-bottom: 12px;
`;

const StyledTextArea = styled(TextArea)`
  border: none;
  background: transparent;
  box-shadow: none;
  resize: none;
  padding: 0;

  &:focus {
    box-shadow: none;
  }
`;

export { StyledInput, StyledTextArea };
