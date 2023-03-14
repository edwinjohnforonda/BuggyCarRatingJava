$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/buggycarsrating.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Account Transactions",
  "description": "",
  "id": "bank-account-transactions",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Successful logging in",
  "description": "",
  "id": "bank-account-transactions;successful-logging-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to \"home\" page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"EJFTester01\" and password as \"Tester01.\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be in \"home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 2286912600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "home",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 503465900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EJFTester01",
      "offset": 21
    },
    {
      "val": "Tester01.",
      "offset": 51
    }
  ],
  "location": "HomePageSteps.iEnterUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "duration": 239958900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 95948300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "home",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.pageShouldBe(String)"
});
formatter.result({
  "duration": 48724100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.quitDriver()"
});
formatter.result({
  "duration": 654892400,
  "status": "passed"
});
});