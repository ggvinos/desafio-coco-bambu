class LoginPage {
    constructor() {
        this.url = 'https://app-hom.cocobambu.com/entrar';

        // Seletores 
        this.selectors = {
            emailInput: '#formUserPass > :nth-child(1)',
            passwordInput: '#formUserPass > :nth-child(3)',
            loginButton: '.buttons-container > :nth-child(1)',
            confirmButton: '.is-primary',
            authCodeInput: 'input[type="text"]',
            authConfirmButton: '.buttons-container > :nth-child(1)'
        };
    }

    visit() {
        cy.visit(this.url);
    }

    fillEmail(email) {
        cy.get(this.selectors.emailInput).type(email);
    }

    fillPassword(password) {
        cy.get(this.selectors.passwordInput).type(password);
    }

    submitLogin() {
        cy.get(this.selectors.loginButton).click();
        cy.get(this.selectors.confirmButton).click();
    }

    enterAuthCode(code) {
        cy.get(this.selectors.authCodeInput).first().type(code);
        cy.get(this.selectors.authConfirmButton).click();
    }
}

export default LoginPage;
