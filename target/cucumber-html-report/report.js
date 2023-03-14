$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/registerPage.feature");
formatter.feature({
  "line": 1,
  "name": "Test involving register page",
  "description": "",
  "id": "test-involving-register-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 57,
  "name": "Verify registration of exsiting user",
  "description": "",
  "id": "test-involving-register-page;verify-registration-of-exsiting-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@all"
    },
    {
      "line": 56,
      "name": "@Register"
    },
    {
      "line": 56,
      "name": "@Register3"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "I navigate to \"home\" page",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "in \"Username Textbox\" I enter \"EJFTEST001\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "in \"FirstName Textbox\" I enter \"John\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "in \"LastName Textbox\" I enter \"Doe\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "in \"Register Password Textbox\" I enter \"Test.123\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "in \"Register Confirm Password Textbox\" I enter \"Test.123\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click on Complete Register button",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "verify that error message \"UsernameExistsException: User already exists\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 68,
      "value": "#    Then I apply wait \"5000\" of milliseconds"
    }
  ],
  "line": 69,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 2451312900,
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
  "duration": 461504400,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 179247200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username Textbox",
      "offset": 4
    },
    {
      "val": "EJFTEST001",
      "offset": 31
    }
  ],
  "location": "RegisterPageSteps.inElementIEnterValue(String,String)"
});
formatter.result({
  "duration": 175878200,
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
  "duration": 122011300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LastName Textbox",
      "offset": 4
    },
    {
      "val": "Doe",
      "offset": 31
    }
  ],
  "location": "RegisterPageSteps.inElementIEnterValue(String,String)"
});
formatter.result({
  "duration": 90014800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register Password Textbox",
      "offset": 4
    },
    {
      "val": "Test.123",
      "offset": 40
    }
  ],
  "location": "RegisterPageSteps.inElementIEnterValue(String,String)"
});
formatter.result({
  "duration": 95450800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register Confirm Password Textbox",
      "offset": 4
    },
    {
      "val": "Test.123",
      "offset": 48
    }
  ],
  "location": "RegisterPageSteps.inElementIEnterValue(String,String)"
});
formatter.result({
  "duration": 92037300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 100499800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UsernameExistsException: User already exists",
      "offset": 27
    }
  ],
  "location": "RegisterPageSteps.verifyRegistrationErrorMessage(String)"
});
formatter.result({
  "duration": 595589700,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 655184800,
  "status": "passed"
});
});