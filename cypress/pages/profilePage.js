class ProfilePage {
    goToDelivery() {
        cy.get('.label-container > .ng-star-inserted').click()
        cy.get('.nav-bar-content > :nth-child(1)').click()
        cy.get('.container').click()
    }

    enterCPFAndPhone(cpf, phone) {
        cy.get('.filds > :nth-child(3)').click()
        cy.get('#cpf').type("56681093051")
        cy.get('#phone').type("61998989222")
        cy.get('.container > button').click()
    }

    confirmOrder() {
        cy.get('.confirm-order-button').click()
        
    }

    confirmBuy(){
        cy.get('.confirm-button').click()
        cy.get('.page-div > .confirm-order-row > button').click()
        cy.get('.is-primary').click()
    }

    evaluateOrder(){
        cy.get('.rating-content > :nth-child(5) > .ng-star-inserted').click()
        cy.get('.rating-section > cb-text-input-with-count > .container > .content > .text-input > .ng-pristine').type(" Muito Bom!")
        cy.get('.rate-order-row > button').click()

    }
    closeButtonEvaluat(){
        cy.get('.is-primary').click()
    }
    verifyCard() {

        cy.get('.is-primary').click()
        cy.get('.is-primary').click()

    }

}

export default ProfilePage
