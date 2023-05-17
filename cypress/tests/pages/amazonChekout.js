const amazonCheckout = {
    searchResults : '[data-component-type="s-search-result"]',
    primeLogo : '[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]',
    addToCart : '#add-to-cart-button',
    gotoCart : '#nav-cart',
    backToResults : '[id="breadcrumb-back-link"]',
    cartCount : '#sc-subtotal-label-buybox',
    deleteItem : '.sc-action-delete > .a-declarative > .a-color-link',
    searchBox : '#twotabsearchtextbox',
    searchSubmit : '#nav-search-submit-button',
    resultInfo : '[data-component-type="s-result-info-bar"]',
    proceedToCheckout : '#sc-buy-box-ptc-button',
    email : '#ap_email'
}

function addItemsToCart (product, numberOfItemToBeAdded){
    let basketCount = 0;
    let itemsCount = 0

    searchItem(product)
    cy.get(amazonCheckout.searchResults).each((element, index) => {
        if (element.find(amazonCheckout.primeLogo).is(':visible')) {
            basketCount += 1
            itemsCount += 1

            cy.get(amazonCheckout.searchResults).eq(index).find(amazonCheckout.primeLogo).click()
            cy.get(amazonCheckout.addToCart).click()
            cy.go('back')
            cy.go('back')

            if (Number(itemsCount) === Number(numberOfItemToBeAdded)) {
                return false
            }
        }

    })
}

function removeItemFromCart(totalItem)
{
    cy.get(amazonCheckout.gotoCart).click();
    cy.get(amazonCheckout.cartCount).should('contain', totalItem.toString())
    cy.get(amazonCheckout.deleteItem).eq(0).click({force: true});
    cy.get(amazonCheckout.cartCount).should('contain', (totalItem-1).toString());

}

function searchItem(product){
        cy.get(amazonCheckout.searchBox).clear().type(product).then(() =>{
            cy.get(amazonCheckout.searchSubmit).click();
            cy.get(amazonCheckout.resultInfo).should('be.visible')
            cy.get(amazonCheckout.searchResults).should('be.visible')
            cy.get(amazonCheckout.searchResults).should('have.length.at.least', 10);
        })
}

function  goToCheckoutPage(){
    cy.get(amazonCheckout.proceedToCheckout).click();
    cy.get(amazonCheckout.email).should('be.visible');
}
export {
    amazonCheckout,
    addItemsToCart,
    removeItemFromCart,
    goToCheckoutPage
}