/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import Box from '../../foundation/Layout/Box';
import FormSignup from '../../patterns/FormSignup';
import SEO from '../../commons/SEO';

export const WebsitePageContext = createContext({
  toggleModalCadastro: () => {},
});

const WebsitePageWrapper = ({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setIsModalOpen(!isModalOpen);
        },
      }}
    >
      <SEO {...seoProps} />

      <Box
        flex={1}
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        {...pageBoxProps}
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
        {menuProps.display && (
        <Menu
          onCadastrarClick={() => setIsModalOpen(true)}
        />
        )}

        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
};

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};

export default WebsitePageWrapper;
