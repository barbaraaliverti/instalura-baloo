/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import Box from '../../foundation/Layout/Box';
import FormSignup from '../../patterns/FormSignup';

export const WebsitePageContext = createContext({
  toggleModalCadastro: () => {},
});

const WebsitePageWrapper = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setIsModalOpen(!isModalOpen);
        },
      }}
    >
      <Box
        flex={1}
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        >

          {(propsModal) => (
            <FormSignup
              backgroundColor="white"
              {...propsModal}
            />
          )}

        </Modal>
        <Menu
          onCadastrarClick={() => setIsModalOpen(true)}
        />
        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
};

WebsitePageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WebsitePageWrapper;
