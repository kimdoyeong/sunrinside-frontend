import React, { useEffect } from "react";

import styled, { css, ThemeProvider } from "styled-components";
import { Modals } from "../../store/slices/modal";
import useModal from "../../hooks/useModal";
import useTheme from "../../hooks/useTheme";
import { useLocation } from "react-router-dom";
interface ModalProps {
  children?: React.ReactNode;
  modalName: Modals;
}

function Modal({ children, modalName }: ModalProps) {
  const { isOpen, close } = useModal(modalName);
  const theme = useTheme();
  const location = useLocation();

  useEffect(() => {
    close();
  }, [location, close]);

  if (!isOpen) return null;
  const jsx = (
    <ThemeProvider theme={theme}>
      <ModalOverlay onClick={close}>
        <ModalBody
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </ModalBody>
      </ModalOverlay>
    </ThemeProvider>
  );

  return jsx;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3000;
  animation: appear 0.5s;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const ModalBody = styled.div`
  position: absolute;
  background: white;
  max-width: 720px;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  box-sizing: border-box;
  padding: 1em 2em;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  transition: background 0.5s;

  &:focus {
    outline: 0;
  }
  ${({ theme }) =>
    theme.isDark &&
    css`
      background: black;
    `}
`;
export default Modal;
