Cypress Automation

Cypress is front end testing tool.
It used javascript to write automated tests.
Build on node.js and comes packaged as npm nodule.
It is different from selenium as selenium operate by running outside of browser but cypress engine directly operates inside the browser.
It listens and modify the browser code at runtime by manipulating DOM.

Cypres consists of:
1. Test Runner - Helps to setup and start writing tests.
2. Dashboard service - For recording tests.
It uses mocha as default framework for managing test cases.

Limitations:
Support limited set of browsers - chrome, electron, firefox beta and edge.
POM is not supported.
Tough to read data from files in case of data driven framework.
Third party reporting tool intergration is limited.

Installation:
1. Install node js and set up its path in environment variables as NODE_HOME.
2. Create a directory and navigate to that directory using CMD.
3. Use command npm init to create package.json file. ( It's similar to pom.xml file we have in selenium maven project.)
4. Install cypress using command - npm install cypress --save-dev
5. Verify the cypress dependencies in package.json file.

Cypress is now installed !!

To open TestRunner use command - ".\node_modules\.bin\cypress open" ( Remove the double quotes before running command)

To run TestSuite from Terminal - 
In case of headless - .\node_modules\.bin\cypress run
In case of headed - .\node_modules\.bin\cypress run --headed

Note: The above commands executes all the test cases in the example directory.

To run specific test cases on terminal we can use - 
.\node_modules\.bin\cypress run --spec "cypress/integration/examples/FirstTest.js"

To run the test on a particular browser using Terminal - 
./node_modules\.bin\cypress run --browser chrome ( in headed mode)

#Locators
cypress only uses css selectors.
-> cy.get(selector) ( It is equivalent of findelement in selenium)

To run cypress test suites from command line use -
1. Navigate to parent directory. ( In my case its cypress-automation ).
2. Type -> node_modules\.bin\cypress run ( It will run all the test cases ).
3. Type -> node_modules\.bin\cypress run --spec "$Path of specific Test Suite"



