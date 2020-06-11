import styled, { css } from "styled-components";
import colors from "../../constants/colors";

interface ButtonProps {
  full?: Boolean;
  color?: string;
  background?: string;
}
const Button = styled.button<ButtonProps>`
  font-size: 1rem;
  display: block;
  box-sizing: border-box;
  padding: 0.5em 1em;
  border: 0;
  border-radius: 0.5em;
  background: ${(props) => props.background || colors.primary};
  color: ${(props) => props.color || "white"};

  ${({ full }) =>
    full &&
    css`
      width: 100%;
    `}
`;

export default Button;
