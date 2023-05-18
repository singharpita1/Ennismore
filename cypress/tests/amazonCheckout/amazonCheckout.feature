Feature: amazon

  Scenario: Add multiple items from multiple categories to the basket, remove an item and goto the checkout page
  Given  I add "3" of each "teapot, headphones, dishwasher" item to my amazon basket
  When I am on the shopping basket page
  And  I remove "1" item from the shopping basket
  Then I proceed to the checkout page