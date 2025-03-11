class PaymentPage {
    openPaymentOptions() {

        cy.wait(50000);
        cy.get('.confirm-label').click({force: true})
    }

    addNewCard() {
        cy.wait(80000)

        cy.get('.container > base-segments > .ion-padding-top > :nth-child(2)').click({force: true})

    }

    chooseCreditCard() {
        cy.get('.ng-star-inserted > .container > :nth-child(1)').click()
    }

    fillCardDetails(card) {
        cy.get('#cardNumber').type(card.number)
        cy.get('#cc-exp-date').type(card.expiry)
        cy.get('#cvv').type(card.cvv)
        cy.get('#ion-input-8]').type(card.name)
        cy.get('#cpfCnpj').type(card.cpf)
        cy.get('#ion-input-9').type(card.identification)
    }

    saveCard() {
        cy.get('.is-primar').click();
    }
}

export default PaymentPage
