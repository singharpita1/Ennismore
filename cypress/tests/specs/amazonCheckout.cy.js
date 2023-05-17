import {addItemsToBasket, removeItemFromBasket} from "../pages/amazonChekout";

describe('Add item to the basket and go to basket', () => {
    it('Add prime product to basket and then modify the item in basket', function () {
        const itemsToBeAdded = 3;
        const productType = ['teapot', 'dinner set', 'dishwasher'];
        const totalItemsInBasket = itemsToBeAdded * productType.length;

        addItemsToBasket(productType, itemsToBeAdded)
        removeItemFromBasket(totalItemsInBasket);
    });
});