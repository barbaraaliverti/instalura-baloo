/// page object
export default class LoginScreenPageObject {
  constructor(cy) {
    this.cy = cy;

    this.cy.visit('/app/login');
  }

  fillLoginForm({ user, password }) {
    // preencher input usuário
    this.cy.get('#formCadastro input[name="usuario"]').type(user);

    // preencher input senha
    this.cy.get('#formCadastro input[name="senha"]').type(password);

    return this;
  }

  // clicar em submit
  submitLoginForm() {
    this.cy.get('#formCadastro button[type="submit"]').click();

    return this;
  }
}
