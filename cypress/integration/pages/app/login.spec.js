/// <reference types="cypress" />

describe('/pages/app/login', () => {
  // cada it == um teste
  it('preencha os campos e vá pra página de perfil /app/profile', () => {
    // intercepta a chamada de API
    cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
      .as('userLogin');

    cy.visit('/app/login');

    // preencher input usuário
    cy.get('#formCadastro input[name="usuario"]').type('omariosouto');

    // preencher input senha
    cy.get('#formCadastro input[name="senha"]').type('senhasegura');

    // clicar em submit
    cy.get('#formCadastro button[type="submit"]').click();

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
