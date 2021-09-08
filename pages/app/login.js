import React from 'react';
import websitePageHOC from '../../src/components/Wrappers/WebsitePageWrapper/hoc';

const LoginPage = () => (
  <div>
    Login

    <a href="/">
      Voltar para a home com refresh
    </a>
  </div>
);

export default websitePageHOC(LoginPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
  },
});
