import LoginPage from '../pages/loginPage.js'
import CartPage from '../pages/cartPage.js'
import PaymentPage from '../pages/paymentPage.js'
import ProfilePage from '../pages/profilePage.js'





const loginPage = new LoginPage()
const cartPage = new CartPage()
const paymentPage = new PaymentPage()
const profilePage = new ProfilePage()


describe('Fluxo de Adição de Cartão e Finalização do Pedido', () => {
    beforeEach(() => {
        cy.fixture('user').then((user) => {
            loginPage.visit();
            loginPage.fillEmail(user.email)
            loginPage.fillPassword(user.password)
            loginPage.submitLogin();
            loginPage.enterAuthCode(user.authCode)
            cy.wait(10000)
           
        });
    });

    describe('Teste de visibilidade e clique', () => {
        it('Deve aguardar o elemento ser visível e então clicar no botão', () => {
          // Primeiro, espera até que o elemento esteja visível
          cy.get('div.ng-tns-c2839910812-3 > .ng-tns-c2839910812-3')
            .should('be.visible');
          
          // Depois de garantir que o elemento está visível, clica no botão
          cy.wait(8000)
          cy.get('.ng-star-inserted > :nth-child(3) > button').click()

            cy.wait(8000)
            cy.get('.section-list > :nth-child(4)').click()
            cy.get('body').click()
            
            cy.wait(10000)
            cy.get('button.ng-star-inserted').click() //Entrando na sacola
            cy.wait(10000)
            
            
            // clicando no botão de forma de pagamento
            cy.get('.confirm-order-button').click()

            //Usar opção de retirada para pagamento
            cy.get('.container > base-segments > .ion-padding-top > :nth-child(2)').click()

            //Clicando em dinheiro
            cy.get('.list-container > :nth-child(1)').click()



            
        });
      });

      it('Adicionando CPF e telefone', () => {
        cy.wait(10000)
        cy.wait(10000)
        cy.wait(10000)
        
        cy.get('#content > cb-order-cart > ion-content > div:nth-child(7) > div:nth-child(4) > div.action-container > ion-button').click()
        //cy.get('.mandatory-data-phone-edit-button').click()

        //cy.contains('button', 'Adicionar').first().click()
        //cy.get('.mandatory-data-cpf-edit-button').click()
        
      });
    
   
/*
    it('Deve adicionar um novo cartão e finalizar a compra', () => {
        cy.fixture('cards').then((cards) => {
            /*
            //paymentPage.openPaymentOptions()
            paymentPage.addNewCard()
            paymentPage.chooseCreditCard()
            paymentPage.fillCardDetails(cards.visa)
            paymentPage.saveCard()

            // Finalizar pedido
            profilePage.goToDelivery()
            profilePage.enterCPFAndPhone("123.456.789-00", "(11) 91234-5678")
            profilePage.confirmOrder()
            profilePage.verifyCard()
        });
    });
*/
    
});
