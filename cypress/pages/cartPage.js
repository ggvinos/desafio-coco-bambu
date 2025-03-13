class CartPage {

    closeLocateButtonAndAddItem(){
        
        cy.get('div.ng-tns-c2839910812-3 > .ng-tns-c2839910812-3')
              .should('be.visible');
            
        cy.wait(8000)
        cy.get('.ng-star-inserted > :nth-child(3) > button').click()
  
        cy.wait(8000)   
        cy.get('.section-list > :nth-child(4)').click()
        cy.get('body').click()
  
        // Foi necessario fazer essa adaptação para clicar no botão de localização, pois não é possivel localizar o seletor visivel para o cypress
    }

    enterBag(){
        cy.wait(10000)
        cy.get('button.ng-star-inserted').click() //Entrando na sacola
        cy.wait(10000)
            
    }
    selectPay(){
         // clicando no botão de forma de pagamento
         cy.get('.confirm-order-button').click()
        //Usar opção de retirada para pagamento
         cy.get('.container > base-segments > .ion-padding-top > :nth-child(2)').click()
         //Clicando em dinheiro
        cy.get('.list-container > :nth-child(1)').click()
    }

    addItemToCart() {
        
        cy.get('button.ng-star-inserted').click()
    }
    goToCart() {
        cy.get('.bag-button-total').click()
    }

    
}

export default CartPage
