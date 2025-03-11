class LoginPage {
    visit() {
        cy.visit('https://app-hom.cocobambu.com/entrar')
    }

    fillEmail(email) {
        cy.get('#formUserPass > :nth-child(1)').type(email)
    }

    fillPassword(password) {
        cy.get('#formUserPass > :nth-child(3)').type(password)
    }

    submitLogin() {
        cy.get('.buttons-container > :nth-child(1)').click()
        cy.get('.is-primary').click()
    }

    enterAuthCode(code) {
        cy.get('input[type="text"]').first().type(code) // precisei usar isso pois não consegui utizar os seletores
        
        cy.get('.buttons-container > :nth-child(1').click()
    }
}

export default  LoginPage
