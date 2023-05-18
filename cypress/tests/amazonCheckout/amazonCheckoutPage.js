export class AmazonCheckoutPage{

    searchResults = '[data-component-type="s-search-result"]'
    searchedItem = '[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]'
    prime = '[class="a-icon a-icon-prime a-icon-medium"]'
    addToCart = '#add-to-cart-button'
    gotoCart = '#nav-cart'
    cartCount = '#sc-subtotal-label-buybox'
    deleteItem = '.sc-action-delete > .a-declarative > .a-color-link'
    searchBox = '#twotabsearchtextbox'
    searchSubmit = '#nav-search-submit-button'
    resultInfo = '[data-component-type="s-result-info-bar"]'
    proceedToCheckout = '#sc-buy-box-ptc-button'
    email = '#ap_email'

    searchAndAddItemsToCart(product, numberOfItemToBeAdded) {
        let count = 0;
        let itemsCount = 0;

        cy.get(this.searchBox).clear().type(product).then(() => {
            cy.get(this.searchSubmit).click();
            cy.get(this.resultInfo).should('be.visible')
            cy.get(this.searchResults).should('be.visible')
            cy.get(this.searchResults).should('have.length.at.least', 10);

            cy.get(this.searchResults).each((element, index) => {
                if (element.find(this.prime).is(':visible') && itemsCount < numberOfItemToBeAdded) {
                    count++
                    itemsCount++

                    cy.get(this.searchResults).eq(index).find(this.searchedItem).click()
                    cy.get(this.addToCart).click()
                    cy.go('back')
                    cy.go('back')
                }
            })
        })
    }

    goToShoppingBasketPage(total){
        cy.get(this.gotoCart).click();
        cy.get(this.cartCount).should('contain', total.toString())
    }

    deleteItemFromCart(total,numberOfItemsToBeDeleted){
        for(let i = 0; i< numberOfItemsToBeDeleted; i++) {
            cy.get(this.deleteItem).eq(i).click({force: true});
            cy.get(this.cartCount).should('contain', (total - numberOfItemsToBeDeleted).toString());
        }

    }

    proceedToCheckoutPage(){
        cy.get(this.proceedToCheckout).click();
        cy.get(this.email).should('be.visible');
    }

}
export const amazonCheckoutPage = new AmazonCheckoutPage();