class CartPage {
    addItemToCart() {
        
        cy.get('button.ng-star-inserted').click()
    }
    goToCart() {
        cy.get('.bag-button-total').click()
    }

    
}

export default CartPage
