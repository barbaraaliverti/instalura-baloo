import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const ModalWrapper = styled.div`
align-items: stretch;
background: rgba(0,0,0,0.1);
bottom: 0;
display: flex;
flex-direction: column;
left: 0;
margin: auto;
overflow: scroll;
position: fixed;
right: 0;
top: 0;
transition: .3s;
z-index: 100;

${({ isOpen }) => {
    if (isOpen) {
      return css`
      opacity: 1;
      pointer-events: all;
    `;
    }

    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

const Modal = ({ isOpen, onClose, children }) => (
  <ModalWrapper
    isOpen={isOpen}
    onClick={(event) => {
      const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');

      if (!isSafeArea) {
        onClose();
      }
    }}
  >
    <motion.div
      variants={{
        open: {
          x: 0,
        },
        closed: {
          x: '-100%',
        },
      }}
      animate={isOpen ? 'open' : 'closed'}
      transition={{
        duration: 0.5
      }
      }
      style={{
        flex: 1,
        display: 'flex',
      }}
    >
      {children({
        'data-modal-safe-area': true,
      })}
    </motion.div>

  </ModalWrapper>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
