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
  error?: { type: string; message: string };
  fieldName: string;
}
export function WrapInput({ fieldName, children, error }: WrapInputProps) {
  return (
    <WrapInputStyle>
      <label>
        <span>{fieldName}</span>
        {children}
      </label>
      <div className="error">{error && error.message}</div>
    </WrapInputStyle>
  );
}
const WrapInputStyle = styled.div`
  position: relative;
  label > span {
    display: block;
    margin-bottom: 3px;
  }
  .error {
    color: red;
    height: 1em;
    margin-top: 0.1em;
    margin-bottom: 0.4em;
  }
`;

export default Input;
