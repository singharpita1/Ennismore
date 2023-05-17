# Getting started with cypress

## Installing dependencies
In order to  start using the cypress repository you will need the following installed

    1. https://brew.sh
    2. https://formulae.brew.sh/formula/node
    3. Node version 18.9.0

## What Next
Once you  have the following  in place please  install the required packages in the package.json using

    1. open the qa-cypress project in terminal making sure you are in the root of the  project  

    2. Execute the following command - npm install


## How do I add new package
If for any reason you need to add a new package it is as simple as

    1. npm install <my package> --save / npm install <my package> --save --dev


## How I do I run the cypress tests

To run the tests  we have 2 options

    Using predefined scripts on terminal by running 
    npm run cy:open (This will open cypress in interactive mode)
    npm run cy:run (This wil execute all tests that exist)

2.Using cypress support plugin
To use cypress support plugin you will need to do so by installing the cypress support plugin on intellij

     Now you have installe  intelliJ support plugin you will need to
    
    1. click on add new run configurations where you will then seea '+' icon
    
    2. click on the '+' and select the cypress logo from the list
    
    3. Select a name for your run configuration
    
    4. select the cypress project  base (the root folder qa-cypress) which contains the cypress json 
         **/qa-cypress
         
    5. select the test file you wish to  run in our case will be a feature  file like 
        **/qa-cypress/cypress/integration/login/login.feature 



## Video For Failed Test
I have also created an actions file that will kick off the test in a GitHub actions runner when a push is made to the repo.

If test fails, then a video playback of the test is stored as part of the build.