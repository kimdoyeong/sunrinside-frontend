import React from "react";
import styled, { css } from "styled-components";

const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5em 1em;
  border: 0;
  background: #dde6eb;
  border-radius: 0.5em;
  font-size: 1rem;

  &:focus {
    outline: 0;
  }

  ${({ theme }) =>
    theme.isDark &&
    css`
      background: #45484a;
      color: white;
      ::placeholder {
        color: #b5b5b5;
      }
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
