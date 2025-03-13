class ProfilePage {
    constructor() {
        // Seletores 
        this.selectors = {
            deliveryLabel: '.label-container > .ng-star-inserted',
            navBarFirstItem: '.nav-bar-content > :nth-child(1)',
            container: '.container',
            cpfField: '.filds > :nth-child(3)',
            cpfInput: '#cpf',
            phoneInput: '#phone',
            confirmCpfButton: '.container > button',
            confirmOrderButton: '.confirm-order-button',
            confirmBuyButton: '.confirm-button',
            finalConfirmButton: '.page-div > .confirm-order-row > button',
            primaryButton: '.is-primary',
            ratingStar: '.rating-content > :nth-child(5) > .ng-star-inserted',
            ratingComment: '.rating-section > cb-text-input-with-count > .container > .content > .text-input > .ng-pristine',
            submitRatingButton: '.rate-order-row > button'
        };
    }

    goToDelivery() {
        cy.get(this.selectors.deliveryLabel).click();
        cy.get(this.selectors.navBarFirstItem).click();
        cy.get(this.selectors.container).click();
    }

    enterCPFAndPhone(cpf, phone) {
        cy.get(this.selectors.cpfField).click();
        cy.get(this.selectors.cpfInput).type(cpf);
        cy.get(this.selectors.phoneInput).type(phone);
        cy.get(this.selectors.confirmCpfButton).click();
    }

    confirmOrder() {
        cy.get(this.selectors.confirmOrderButton).click();
    }

    confirmBuy() {
        cy.get(this.selectors.confirmBuyButton).click();
        cy.get(this.selectors.finalConfirmButton).click();
        cy.get(this.selectors.primaryButton).click();
    }

    evaluateOrder() {
        cy.get(this.selectors.ratingStar).click();
        cy.get(this.selectors.ratingComment).type("Muito Bom!");
        cy.get(this.selectors.submitRatingButton).click();
    }

    closeButtonEvaluat() {
        cy.get(this.selectors.primaryButton).click();
    }

    verifyCard() {
        cy.get(this.selectors.primaryButton).click();
        cy.get(this.selectors.primaryButton).click();
    }
}

export default ProfilePage;
