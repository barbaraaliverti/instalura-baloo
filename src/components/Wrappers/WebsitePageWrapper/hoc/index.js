/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import WebsiteGlobalProvider from '../provider';
import WebsitePageWrapper from '../WebsitePageWrapper';

const websitePageHOC = (PageComponent, { pageWrapperProps }) => (props) => (
  <WebsiteGlobalProvider>
    <WebsitePageWrapper {...pageWrapperProps}>
      <PageComponent {...props} />
    </WebsitePageWrapper>
  </WebsiteGlobalProvider>
);

export default websitePageHOC;
