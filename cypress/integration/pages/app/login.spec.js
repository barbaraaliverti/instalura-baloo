/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject';

describe('/pages/app/login', () => {
  describe('when form login request is filled and submited', () => {
    it('go to the profile page', () => {
      // intercepta a chamada de API
      cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
        .as('userLogin');

      const loginScreen = new LoginScreenPageObject(cy);

      loginScreen
        .fillLoginForm({ user: 'omariosouto', password: 'senhasegura' })
        .submitLoginForm();

      // o que se espera? ir para /app/profile
      cy.url().should('include', '/app/profile');

      // verifica se tem o token
      cy.wait('@userLogin')
        .then((intercept) => {
          const { token } = intercept.response.body.data;
          cy.getCookie('APP_TOKEN')
          // token existe?
            .should('exist')
          // token armazenado no cookie é igual ao token do server?
            .should('have.property', 'value', token);
        });
    });
  });
});
