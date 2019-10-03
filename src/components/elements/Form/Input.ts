import styled from "styled-components";
import { Input } from "antd";

const { TextArea } = Input;

const StyledTextArea = styled(TextArea)`
  border: none;
  background: transparent;
  box-shadow: none;
  resize: none;

  &:focus {
    box-shadow: none;
  }
`;

export { StyledTextArea };
