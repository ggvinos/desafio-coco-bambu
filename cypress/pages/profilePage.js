class ProfilePage {
    goToDelivery() {
        cy.get('.label-container > .ng-star-inserted').click()
        cy.get('.nav-bar-content > :nth-child(1)').click()
        cy.get('.container').click()
    }

    enterCPFAndPhone(cpf, phone) {
        cy.get('.mandatory-data-cpf-edit-button').click()
        cy.get('#cpf').type(cpf)
        cy.get('#phone').type(phone)
        cy.get('.container > button').click()
    }

    confirmOrder() {
        cy.get('.confirm-order-button').click()
    }

    verifyCard() {

        cy.get('.is-primary').click()
        cy.get('.is-primary').click()

    }
}

export default ProfilePage
