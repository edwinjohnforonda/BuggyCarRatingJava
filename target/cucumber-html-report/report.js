$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/headerMenuBar.feature");
formatter.feature({
  "line": 1,
  "name": "Test involving header menu bar",
  "description": "",
  "id": "test-involving-header-menu-bar",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 53,
  "name": "Successful logging in",
  "description": "",
  "id": "test-involving-header-menu-bar;successful-logging-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@all"
    },
    {
      "line": 52,
      "name": "@failedlLogin"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I navigate to \"home\" page",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I enter username as \"Invalid\" and password as \"Invalid\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "\"login error message\" has \"Text\" value equal to \"Invalid username/password\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 2498671200,
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
  "duration": 421897500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid",
      "offset": 21
    },
    {
      "val": "Invalid",
      "offset": 47
    }
  ],
  "location": "HeaderMenuBarSteps.iEnterUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "duration": 233574500,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 119146200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login error message",
      "offset": 1
    },
    {
      "val": "Text",
      "offset": 27
    },
    {
      "val": "Invalid username/password",
      "offset": 49
    }
  ],
  "location": "HeaderMenuBarSteps.webElementHasPropertyValueEqualTo(String,String,String)"
});
formatter.result({
  "duration": 632791100,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 649799600,
  "status": "passed"
});
});