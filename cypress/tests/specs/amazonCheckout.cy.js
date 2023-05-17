import {addItemsToCart, goToCheckoutPage, removeItemFromCart} from "../pages/amazonChekout";

describe('Add item to the basket and go to basket', () => {
    it('Add prime product to basket and then modify the item in basket', function () {
        const productType = ['teapot', 'dinner set', 'dishwasher'];

        for(let i = 0 ; i < productType.length; i++){
            addItemsToCart(productType[i], 3)
        }
        removeItemFromCart(9);
        goToCheckoutPage();
    });
});