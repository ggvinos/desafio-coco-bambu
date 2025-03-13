# **Desafio Técnico Coco Bambu**  

Este projeto contém:  

✅ [**Identificação de Fluxos Importantes**](fluxos_importantes.md)  
✅ [**Teste de Automação UI**](cypress/e2e/ui_tests.cy.js)  
✅ [**Teste de Automação API**](cypress/e2e/api_cart_tests.cy.js)  

A automação de testes para o fluxo de compra dentro da plataforma **Coco Bambu** foi desenvolvida utilizando **Cypress**. O projeto segue a estrutura **Page Object Model (POM)**, com **seletores organizados** para melhor manutenção e reutilização do código.  

---

## **💡 Qual foi minha ideia?**  

Inicialmente, a ideia era **logar, adicionar o item, preencher informações pessoais e passar pela adição de cartões**. No entanto, **não foi possível localizar o código de verificação do cartão**, então optei por um fluxo de **retirada pessoalmente**.  

A aplicação possui **vários problemas que dificultam os testes**, como **falta de seletores adequados**, o que pode tornar os testes **flakey** (instáveis). Por isso, **se um teste falhar, é recomendado verificar a causa e rodá-lo novamente**, pois há muitas **requisições simultâneas para a API** que podem impactar a execução.  

---

# **📌 Fluxo UI Automatizado**  

O teste simula a jornada de um usuário desde o **login até a finalização do pedido**, cobrindo os principais fluxos da aplicação.  

### **🔹 LoginPage.js**  
✅ Acessa a página de login  
✅ Insere **e-mail e senha**  
✅ Confirma o **código de autenticação**  

---

### **🔹 CartPage.js**  
✅ Fecha o **popup de localização** (se necessário)  
✅ Adiciona um item ao carrinho  
✅ Acessa a **sacola de compras**  
✅ Escolhe a **forma de pagamento**  

---

### **🔹 ProfilePage.js**  
✅ Insere **CPF e telefone**  
✅ Confirma o **pedido**  
✅ Finaliza a **compra**  
✅ Avalia o pedido e fecha o modal de avaliação  

---

# **📌 Testes de API - Carrinho**  

Os testes de API seguem **boas práticas essenciais** para garantir a **confiabilidade e robustez** das validações. Foram testados diferentes **métodos HTTP** (`POST`, `PUT`, `DELETE`) e validados os **status de resposta** (`201`, `200`, `404`) para confirmar o comportamento esperado.  

Além disso, foram incluídos **cenários negativos**, como:  
- **Evitar adição de quantidades negativas**  
- **Garantir que operações em recursos inexistentes retornem erro**  
- **Capturar erros sem falha automática (`failOnStatusCode: false`)**  

Os testes incluem:  
✅ **Adicionar um item ao carrinho**  
✅ **Evitar adição de quantidade negativa**  
✅ **Atualizar a quantidade de um item**  
✅ **Evitar atualização de carrinho inexistente**  
✅ **Remover um item do carrinho**  
✅ **Evitar remoção de carrinho inexistente**  

---

# **🚀 Como Instalar e Rodar os Testes**  

### **1️⃣ Instalar as dependências**  
Execute o comando abaixo no terminal para instalar todas as dependências necessárias:  
```bash
npm instal
```
### **2️⃣ Abrir o Cypress no modo interativo**

Para visualizar os testes na interface do Cypress, use:
```bash
npx cypress open
```
# **📌 Ferramentas e Recursos Utilizados**  

Para estruturar e organizar o desafio, utilizei as seguintes ferramentas:  

✅ **Notion** → Para documentar ideias, estruturar fluxos e organizar o planejamento do desafio.  
✅ **ChatGPT** → Para "embelezar" o README e tirar dúvidas pontuais.  
✅ **Documentação do Cypress** → Para seguir as melhores práticas de automação de testes UI e API.  
✅ **GitHub** → Para versionamento do código e entrega do desafio.  
✅ **DevTools e CSS Selector Extension (Chrome)** → Para inspecionar elementos, encontrar seletores e testar requisições da API.  
✅ **Spotify** → Muitas horas de música foram utilizadas para manter a produtividade😂😂😂😂 

# **🔍 Observações Finais**

- Caso os testes falhem, **verifique as requisições da API** antes de rodá-los novamente.
- A estrutura **POM (Page Object Model)** foi utilizada para facilitar a manutenção dos testes.
- **Seletor inconsistentes** podem gerar testes flakey; rodar novamente pode resolver.



