import React from "react";
import styled, { css } from "styled-components";

interface SwitchProps {
  falseText?: React.ReactNode;
  trueText?: React.ReactNode;
  state: boolean;
  onChange(v: boolean): any;
}
function UISwitch({ falseText, trueText, state, onChange }: SwitchProps) {
  return (
    <SwitchWrap state={state}>
      {falseText}
      <div className="switch-body" onClick={() => onChange(!state)}>
        <div className="switch-button"></div>
      </div>
      {trueText}
    </SwitchWrap>
  );
}

const SwitchWrap = styled.div<{ state: boolean }>`
  display: flex;
  align-items: center;
  .switch-body {
    width: 60px;
    height: 30px;
    border-radius: 30px;
    background: #bcc2c4;
    display: flex;
    align-items: center;
    margin: 0 5px;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;

    .switch-button {
      width: 24px;
      height: 24px;
      position: absolute;
      border-radius: 12px;
      background: #434a4d;
      transition: left 0.5s;
      ${(props) =>
        props.state
          ? css`
              left: 33px;
            `
          : css`
              left: 3px;
            `}
    }
  }
`;
export default UISwitch;
