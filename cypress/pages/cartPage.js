class CartPage {
    constructor() {
        //  Seletores
        this.selectors = {
            locateButton: 'div.ng-tns-c2839910812-3 > .ng-tns-c2839910812-3',
            addItemButton: '.ng-star-inserted > :nth-child(3) > button',
            sectionListItem: '.section-list > :nth-child(4)',
            enterBagButton: 'button.ng-star-inserted',
            confirmOrderButton: '.confirm-order-button',
            pickupOption: '.container > base-segments > .ion-padding-top > :nth-child(2)',
            cashPaymentOption: '.list-container > :nth-child(1)',
            cartButton: '.bag-button-total'
        };
    }

    closeLocateButtonAndAddItem() {
        cy.get(this.selectors.locateButton).should('be.visible');

        cy.wait(8000);
        cy.get(this.selectors.addItemButton).click();

        cy.wait(8000);
        cy.get(this.selectors.sectionListItem).click();
        cy.get('body').click(); // Clique genérico na tela
    }

    enterBag() {
        cy.wait(10000);
        cy.get(this.selectors.enterBagButton).click();
        cy.wait(10000);
    }

    selectPay() {
        cy.get(this.selectors.confirmOrderButton).click(); // Botão de forma de pagamento
        cy.get(this.selectors.pickupOption).click(); // Opção de retirada
        cy.get(this.selectors.cashPaymentOption).click(); // Opção de pagamento em dinheiro
    }

    addItemToCart() {
        cy.get(this.selectors.enterBagButton).click();
    }

    goToCart() {
        cy.get(this.selectors.cartButton).click();
    }
}

export default CartPage;
