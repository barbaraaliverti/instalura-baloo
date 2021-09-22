import { test } from 'shelljs';

/// <reference types="cypress" />

describe('/pages/app/login', () => {
  // cada it == um teste
  it('preencha os campos e vá pra página de perfil /app/profile', () => {
    cy.visit('/app/login');

    // preencher input usuário
    cy.get('#formCadastro input[name="usuario"]').type('baloozinha');

    // preencher input senha
    cy.get('#formCadastro input[name="senha"]').type('senhasegura');

    // clicar em submit
    cy.get('#formCadastro button[type="submit"]').click();

    // o que se espera? ir para /app/profile
    cy.url().should('include', '/app/profile');
  });
});
