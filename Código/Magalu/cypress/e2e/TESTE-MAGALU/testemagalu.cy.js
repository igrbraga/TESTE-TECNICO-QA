describe('Teste MAGALU', () => {

    beforeEach(() => {
        cy.visit('https://www.magazineluiza.com.br');
    })

    it('CT-01 - Validar a busca de um celular', () => {
        cy.get('#input-search').type('Celular');
        cy.get('#search-container > div > svg').click();
        cy.contains('h2', 'Celular').should('contain.text', 'Celular');
    })

     it('CT-02 - Carregar detalhes de um produto contido no site', () => {
        cy.get('#input-search').type('Celular');
        cy.get('#search-container > div > svg').click();
        cy.get(':nth-child(1) > [data-testid="product-card-container"] > [data-testid="product-card-content"] > [data-testid="product-title"]', { timeout: 10000 }).click();
        cy.get('[data-testid="installment"]').should('be.visible');
        cy.get('[data-testid="price-value"]', {timeout: 15000 }).should('be.visible');
        cy.get('[data-testid="product-detail"]', {timeout: 15000 }).should('be.visible');
        cy.get('.sc-eVeait', {timeout: 15000 }).should('be.visible');
    })

    it('CT-03 - Adicionar um produto na sacola', () => {
        cy.get('#input-search').type('Celular');
        cy.get('#search-container > div > svg', {timeout: 15000 }).click();
        cy.get(':nth-child(1) > [data-testid="product-card-container"] > [data-testid="product-card-content"] > [data-testid="product-title"]', { timeout: 20000 }).click();
        cy.get('.koebNd > div > [data-testid="bagButton"]', {timeout: 15000 }).click();
        cy.get('[data-testid="summary-continue-btn"]', {timeout: 20000 }).click();
        cy.get('.BasketContinue-actions > .BasketContinue-button', {timeout: 15000 }).click();
    })


    it('CT-07 - Excluir um produto da sacola', () => {

        cy.get('#input-search').type('Celular');
        cy.get('#search-container > div > svg', {timeout: 15000 }).click();
        cy.get(':nth-child(1) > [data-testid="product-card-container"] > [data-testid="product-card-content"] > [data-testid="product-title"]', { timeout: 10000 }).click();
        cy.get('.koebNd > div > [data-testid="bagButton"]', {timeout: 15000 }).click();
        cy.get('[data-testid="summary-continue-btn"]', {timeout: 20000 }).click();
        cy.get('.BasketItem-delete-label').click();
        cy.get('.EmptyBasket-box').should('be.visible');
    })
    
    it('CT - EXTRA 1 - Ver ofertas para região específica', ()=> {
        cy.get('.sc-bnOPBZ').click();
        cy.get('[data-testid="zipcode-input"]').type('38701244');
        cy.get('[data-testid="popper-success-container"]').should('be.visible');
    })

    it('CT - EXTRA 2 - Tentar login com credenciais que não são reais', ()=> {
        cy.get('[data-testid="stereo-login_menu-unsigned_user_state-container"] > [data-testid="link"]', {timeout: 15000}).click();
        cy.get('#input-login').type('igorteste@hotmail.com');
        cy.get('#input-password').type('123456');
        cy.get('#LoginBox-form > .LoginBox-form-continue').click();
        cy.get('.LoginBox-form-error--unique').should('be.visible');
    })
    
})