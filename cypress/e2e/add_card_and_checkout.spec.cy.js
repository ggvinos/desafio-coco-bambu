import LoginPage from '../pages/loginPage.js';
import CartPage from '../pages/cartPage.js';
import PaymentPage from '../pages/paymentPage.js';
import ProfilePage from '../pages/profilePage.js';

const loginPage = new LoginPage();
const cartPage = new CartPage();
const paymentPage = new PaymentPage();
const profilePage = new ProfilePage();

describe('Fluxo de login, adição de produto e finalização do pedido', () => {
    beforeEach(() => {
        cy.fixture('user').then((user) => {
            loginPage.visit();
            loginPage.fillEmail(user.email);
            loginPage.fillPassword(user.password);
            loginPage.submitLogin();
            loginPage.enterAuthCode(user.authCode);
            cy.wait(10000);
        });
    });

    describe('Adicionando item ao carrinho e finalizando o pedido', () => {
        it('Deve fechar o botão de localização e adicionar item ao carrinho', () => {
            cartPage.closeLocateButtonAndAddItem();
        });

        it('Deve acessar a sacola e selecionar pagamento', () => {
            cartPage.enterBag();
            cartPage.selectPay();
        });

        it('Deve preencher informações pessoais e confirmar pedido', () => {
            profilePage.confirmOrder();
            profilePage.enterCPFAndPhone();
            profilePage.confirmOrder();
        });

        it('Deve finalizar a compra e avaliar o pedido', () => {
            profilePage.confirmBuy();
            profilePage.evaluateOrder();
            profilePage.closeButtonEvaluat();
        });
    });
});
