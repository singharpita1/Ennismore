import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import {amazonCheckoutPage} from "./amazonCheckoutPage";

Given(/^I add "([^"]*)" of each "([^"]*)" item to my amazon basket$/, (number,categories) => {
    const productType = categories.split(',')
    for(let i = 0 ; i < productType.length; i++){
        amazonCheckoutPage.searchAndAddItemsToCart(productType[i], number)
    }
});

When(/^I am on the shopping basket page$/, function () {
    amazonCheckoutPage.goToShoppingBasketPage();
});

When(/^I remove "([^"]*)" item from the shopping basket$/,  (numberOfItemsToBeDeleted) => {
    amazonCheckoutPage.deleteItemFromCart(numberOfItemsToBeDeleted);
});

Then(/^I proceed to the checkout page$/, function () {
    amazonCheckoutPage.proceedToCheckoutPage();
});