import styled, { css } from "styled-components";

interface ButtonProps {
  full?: Boolean;
}
const Button = styled.button<ButtonProps>`
  font-size: 1rem;
  display: block;
  box-sizing: border-box;
  padding: 0.5em 1em;
  border: 0;
  border-radius: 0.5em;
  background: #0073ff;
  color: white;

  ${({ full }) =>
    full &&
    css`
      width: 100%;
    `}
`;

export default Button;
