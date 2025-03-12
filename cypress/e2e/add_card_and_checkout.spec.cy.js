import LoginPage from '../pages/loginPage.js'
import CartPage from '../pages/cartPage.js'
import PaymentPage from '../pages/paymentPage.js'
import ProfilePage from '../pages/profilePage.js'





const loginPage = new LoginPage()
const cartPage = new CartPage()
const paymentPage = new PaymentPage()
const profilePage = new ProfilePage()


describe('Fluxo de login, adição de produto e Finalização do Pedido', () => {
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
          
          cartPage.closeLocateButton()  
          cartPage.enterBag()  
          cartPage.selectPay()
  
        });
      });

      

      it('Adicionando CPF e telefone', () => {
        cy.wait(10000)
        
        

        cy.get('.mandatory-data-phone-edit-button').click()
        //cy.get('#content > cb-order-cart > ion-content > div:nth-child(7) > div:nth-child(4) > div.action-container > ion-button').click()
        //cy.get('.mandatory-data-phone-edit-button').click()

        //cy.contains('button', 'Adicionar').first().click()
        
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
