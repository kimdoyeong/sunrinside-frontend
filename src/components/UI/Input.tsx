import React from "react";
import styled, { css } from "styled-components";

const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5em 1em;
  border: 0;
  background: #c0c8cc;
  border-radius: 0.5em;

  &:focus {
    outline: 0;
  }

  ${({ theme }) =>
    theme.isDark &&
    css`
      background: #45484a;
      color: white;
    `}
`;

interface WrapInputProps {
  children?: React.ReactNode;
  fieldName: string;
}
export function WrapInput({ fieldName, children }: WrapInputProps) {
  return (
    <WrapInputStyle>
      <label>
        <span>{fieldName}</span>
        {children}
      </label>
    </WrapInputStyle>
  );
}
const WrapInputStyle = styled.div`
  label > span {
    display: block;
    margin-bottom: 3px;
  }
  margin-bottom: 1em;
`;

export default Input;
