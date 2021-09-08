/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';
import websitePageHOC from '../../src/components/Wrappers/WebsitePageWrapper/hoc';

const FAQPage = ({ faqCategories }) => <FAQScreen faqCategories={faqCategories} />;
// eslint-disable-next-line max-len
// Desse jeito, são feitas chamdas infinitas pra API por causa de useEffect, tem q adicionar dependência pra controlar quando o useEffect atualiza ([])
//   const [faqCategories, setFaqCategories] = React.useState([]);

//   useEffect(() => {
//     fetch('https://instalura-api.vercel.app/api/content/faq').then(async (res) => {
//       const response = await res.json();
//       return response.data;
//     })
//       .then((faqCategoriesFromServer) => {
//         setFaqCategories(faqCategoriesFromServer);
//       });
//   }, []);
// eslint-disable-next-line implicit-arrow-linebreak

FAQPage.propTypes = FAQScreen.propTypes;

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq').then(async (res) => {
    const response = await res.json();
    return response.data;
  });

  return {
    props: {
      faqCategories,
    },
  };
}

export default websitePageHOC(FAQPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perguntas Frequentes',
    },
  },
});
