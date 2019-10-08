import styled from "styled-components";
import { Checkbox } from "antd";

const CheckboxGroup = styled(Checkbox.Group)`
  width: 200px;
  padding: 6px 0;

  label {
    padding: 12px;
    width: 100%;
    cursor: pointer;

    &:hover {
      background: #f0f2f5;
    }
  }
`;

export { CheckboxGroup };
