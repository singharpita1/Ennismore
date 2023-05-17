Feature: amazon


  Scenario: Add item to the basket and go to checkout page
    Given I am on amazon website search for items and add to basket
    When On basket page, delete an item
    Then proceed to checkout
