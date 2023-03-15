$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/profilePage.feature");
formatter.feature({
  "line": 1,
  "name": "Test involving profile page",
  "description": "",
  "id": "test-involving-profile-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify successful profile update",
  "description": "",
  "id": "test-involving-profile-page;verify-successful-profile-update",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@all"
    },
    {
      "line": 3,
      "name": "@Profile"
    },
    {
      "line": 3,
      "name": "@Profile2"
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
  "name": "I click on Profile button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify that value \"FirstName Textbox\" is \"John\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify that value \"LastName Textbox\" is \"Doe\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "in \"FirstName Textbox\" I enter \"NewFirstName\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I navigate to \"home\" page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Profile button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify that value \"FirstName Textbox\" is \"NewFirstName\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "in \"FirstName Textbox\" I enter \"John\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 2388890800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "home",
      "offset": 15
    }
  ],
  "location": "HeaderMenuBarSteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 484562600,
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
  "location": "HeaderMenuBarSteps.iEnterUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "duration": 251098100,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 110064500,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnProfileButton()"
});
formatter.result({
  "duration": 1255639200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FirstName Textbox",
      "offset": 19
    },
    {
      "val": "John",
      "offset": 42
    }
  ],
  "location": "ProfilePageSteps.verifyTheValueOfElement(String,String)"
});
formatter.result({
  "duration": 606186400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LastName Textbox",
      "offset": 19
    },
    {
      "val": "Doe",
      "offset": 41
    }
  ],
  "location": "ProfilePageSteps.verifyTheValueOfElement(String,String)"
});
formatter.result({
  "duration": 42531700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FirstName Textbox",
      "offset": 4
    },
    {
      "val": "NewFirstName",
      "offset": 32
    }
  ],
  "location": "RegisterPageSteps.inElementIEnterValue(String,String)"
});
formatter.result({
  "duration": 126816800,
  "status": "passed"
});
formatter.match({
  "location": "ProfilePageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 81967500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "home",
      "offset": 15
    }
  ],
  "location": "HeaderMenuBarSteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 396836700,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnProfileButton()"
});
formatter.result({
  "duration": 651406400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FirstName Textbox",
      "offset": 19
    },
    {
      "val": "NewFirstName",
      "offset": 42
    }
  ],
  "location": "ProfilePageSteps.verifyTheValueOfElement(String,String)"
});
formatter.result({
  "duration": 572133700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FirstName Textbox",
      "offset": 4
    },
    {
      "val": "John",
      "offset": 32
    }
  ],
  "location": "RegisterPageSteps.inElementIEnterValue(String,String)"
});
formatter.result({
  "duration": 95331800,
  "status": "passed"
});
formatter.match({
  "location": "ProfilePageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 79839800,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 664618500,
  "status": "passed"
});
});