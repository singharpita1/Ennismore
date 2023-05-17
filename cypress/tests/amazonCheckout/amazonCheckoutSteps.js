import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import {amazonCheckoutPage} from "./amazonCheckoutPage";

const productType = ['teapot', 'headphones', 'dishwasher'];

Given("I am on amazon website search for items and add to basket", () => {
    for(let i = 0 ; i < productType.length; i++){
        amazonCheckoutPage.searchAndAddItemsToCart(productType[i], 3)
    }
})
When(/^On basket page, delete an item$/, function () {
    amazonCheckoutPage.deleteItemFromCart()
});
Then(/^proceed to checkout$/, function () {
   amazonCheckoutPage.proceedToCheckoutPage();
});