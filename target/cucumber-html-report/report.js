$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/headerMenuBar.feature");
formatter.feature({
  "line": 1,
  "name": "Test involving header menu bar",
  "description": "",
  "id": "test-involving-header-menu-bar",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@all"
    },
    {
      "line": 3,
      "name": "@headerMenu"
    },
    {
      "line": 3,
      "name": "@headerMenu1"
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
  "name": "\"\u003cWebElement\u003e\" should be \"\u003cProperty\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;",
  "rows": [
    {
      "cells": [
        "WebElement",
        "Property"
      ],
      "line": 11,
      "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;1"
    },
    {
      "cells": [
        "Login Textbox",
        "visible"
      ],
      "line": 12,
      "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;2"
    },
    {
      "cells": [
        "Login Textbox",
        "enabled"
      ],
      "line": 13,
      "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;3"
    },
    {
      "cells": [
        "Login Textbox",
        "blank"
      ],
      "line": 14,
      "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;4"
    },
    {
      "cells": [
        "Password Textbox",
        "visible"
      ],
      "line": 15,
      "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;5"
    },
    {
      "cells": [
        "Password Textbox",
        "enabled"
      ],
      "line": 16,
      "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;6"
    },
    {
      "cells": [
        "Password Textbox",
        "blank"
      ],
      "line": 17,
      "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;7"
    },
    {
      "cells": [
        "Login button",
        "visible"
      ],
      "line": 18,
      "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;8"
    },
    {
      "cells": [
        "Login button",
        "enabled"
      ],
      "line": 19,
      "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;9"
    },
    {
      "cells": [
        "Register button",
        "visible"
      ],
      "line": 20,
      "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;10"
    },
    {
      "cells": [
        "Register button",
        "enabled"
      ],
      "line": 21,
      "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@headerMenu"
    },
    {
      "line": 3,
      "name": "@headerMenu1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "\"Login Textbox\" should be \"visible\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 2381733800,
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
  "duration": 461708900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login Textbox",
      "offset": 1
    },
    {
      "val": "visible",
      "offset": 27
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 103764300,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 708097300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@headerMenu"
    },
    {
      "line": 3,
      "name": "@headerMenu1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "\"Login Textbox\" should be \"enabled\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1237357200,
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
  "duration": 335456400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login Textbox",
      "offset": 1
    },
    {
      "val": "enabled",
      "offset": 27
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 40763900,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 632114100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@headerMenu"
    },
    {
      "line": 3,
      "name": "@headerMenu1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "\"Login Textbox\" should be \"blank\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1305246500,
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
  "duration": 424179400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login Textbox",
      "offset": 1
    },
    {
      "val": "blank",
      "offset": 27
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 42155600,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 635898200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@headerMenu"
    },
    {
      "line": 3,
      "name": "@headerMenu1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "\"Password Textbox\" should be \"visible\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1240003400,
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
  "duration": 442404100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password Textbox",
      "offset": 1
    },
    {
      "val": "visible",
      "offset": 30
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 50065900,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 654389000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@headerMenu"
    },
    {
      "line": 3,
      "name": "@headerMenu1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "\"Password Textbox\" should be \"enabled\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1227255900,
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
  "duration": 401787900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password Textbox",
      "offset": 1
    },
    {
      "val": "enabled",
      "offset": 30
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 40370500,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 624297700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@headerMenu"
    },
    {
      "line": 3,
      "name": "@headerMenu1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "\"Password Textbox\" should be \"blank\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1238961600,
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
  "duration": 414246400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password Textbox",
      "offset": 1
    },
    {
      "val": "blank",
      "offset": 30
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 39913000,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 652097900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@headerMenu"
    },
    {
      "line": 3,
      "name": "@headerMenu1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "\"Login button\" should be \"visible\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1259288700,
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
  "duration": 419748400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login button",
      "offset": 1
    },
    {
      "val": "visible",
      "offset": 26
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 56856900,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 651600100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@headerMenu"
    },
    {
      "line": 3,
      "name": "@headerMenu1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "\"Login button\" should be \"enabled\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1239031600,
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
  "duration": 478423400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login button",
      "offset": 1
    },
    {
      "val": "enabled",
      "offset": 26
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 35743600,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 647717700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@headerMenu"
    },
    {
      "line": 3,
      "name": "@headerMenu1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "\"Register button\" should be \"visible\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1236785200,
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
  "duration": 459106400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register button",
      "offset": 1
    },
    {
      "val": "visible",
      "offset": 29
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 54463300,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 657303500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-header-menu-bar;verify-default-state-header-menu-bar-elements;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@headerMenu"
    },
    {
      "line": 3,
      "name": "@headerMenu1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "\"Register button\" should be \"enabled\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1239317400,
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
  "duration": 307095200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register button",
      "offset": 1
    },
    {
      "val": "enabled",
      "offset": 29
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 34732000,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 646649500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Verify property values of header bar menu pre log in",
  "description": "",
  "id": "test-involving-header-menu-bar;verify-property-values-of-header-bar-menu-pre-log-in",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@all"
    },
    {
      "line": 23,
      "name": "@headerMenu"
    },
    {
      "line": 23,
      "name": "@headerMenu2"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I navigate to \"home\" page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "\"\u003cWebElement\u003e\" has \"\u003cPropertyCheck\u003e\" value equal to \"\u003cPropertyValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "test-involving-header-menu-bar;verify-property-values-of-header-bar-menu-pre-log-in;",
  "rows": [
    {
      "cells": [
        "WebElement",
        "PropertyCheck",
        "PropertyValue"
      ],
      "line": 31,
      "id": "test-involving-header-menu-bar;verify-property-values-of-header-bar-menu-pre-log-in;;1"
    },
    {
      "cells": [
        "Login Textbox",
        "Placeholder",
        "Login"
      ],
      "line": 32,
      "id": "test-involving-header-menu-bar;verify-property-values-of-header-bar-menu-pre-log-in;;2"
    },
    {
      "cells": [
        "Password Textbox",
        "Placeholder",
        "Password"
      ],
      "line": 33,
      "id": "test-involving-header-menu-bar;verify-property-values-of-header-bar-menu-pre-log-in;;3"
    },
    {
      "cells": [
        "Login button",
        "Text",
        "Login"
      ],
      "line": 34,
      "id": "test-involving-header-menu-bar;verify-property-values-of-header-bar-menu-pre-log-in;;4"
    },
    {
      "cells": [
        "Register button",
        "Text",
        "Register"
      ],
      "line": 35,
      "id": "test-involving-header-menu-bar;verify-property-values-of-header-bar-menu-pre-log-in;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Verify property values of header bar menu pre log in",
  "description": "",
  "id": "test-involving-header-menu-bar;verify-property-values-of-header-bar-menu-pre-log-in;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@headerMenu"
    },
    {
      "line": 23,
      "name": "@all"
    },
    {
      "line": 23,
      "name": "@headerMenu2"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I navigate to \"home\" page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "\"Login Textbox\" has \"Placeholder\" value equal to \"Login\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1364997500,
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
  "duration": 419578500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login Textbox",
      "offset": 1
    },
    {
      "val": "Placeholder",
      "offset": 21
    },
    {
      "val": "Login",
      "offset": 50
    }
  ],
  "location": "HeaderMenuBarSteps.webElementHasPropertyValueEqualTo(String,String,String)"
});
formatter.result({
  "duration": 67835600,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 644806100,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify property values of header bar menu pre log in",
  "description": "",
  "id": "test-involving-header-menu-bar;verify-property-values-of-header-bar-menu-pre-log-in;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@headerMenu"
    },
    {
      "line": 23,
      "name": "@all"
    },
    {
      "line": 23,
      "name": "@headerMenu2"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I navigate to \"home\" page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "\"Password Textbox\" has \"Placeholder\" value equal to \"Password\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1271516700,
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
  "duration": 398954200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password Textbox",
      "offset": 1
    },
    {
      "val": "Placeholder",
      "offset": 24
    },
    {
      "val": "Password",
      "offset": 53
    }
  ],
  "location": "HeaderMenuBarSteps.webElementHasPropertyValueEqualTo(String,String,String)"
});
formatter.result({
  "duration": 73703800,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c\"Password\"\u003e but was:\u003cnull\u003e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat StepDefinitions.HeaderMenuBarSteps.webElementHasPropertyValueEqualTo(HeaderMenuBarSteps.java:131)\r\n\tat ✽.And \"Password Textbox\" has \"Placeholder\" value equal to \"Password\"(features/headerMenuBar.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 34,
  "name": "Verify property values of header bar menu pre log in",
  "description": "",
  "id": "test-involving-header-menu-bar;verify-property-values-of-header-bar-menu-pre-log-in;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@headerMenu"
    },
    {
      "line": 23,
      "name": "@all"
    },
    {
      "line": 23,
      "name": "@headerMenu2"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I navigate to \"home\" page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "\"Login button\" has \"Text\" value equal to \"Login\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1231973300,
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
  "duration": 414730300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login button",
      "offset": 1
    },
    {
      "val": "Text",
      "offset": 20
    },
    {
      "val": "Login",
      "offset": 42
    }
  ],
  "location": "HeaderMenuBarSteps.webElementHasPropertyValueEqualTo(String,String,String)"
});
formatter.result({
  "duration": 44813300,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 629204700,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify property values of header bar menu pre log in",
  "description": "",
  "id": "test-involving-header-menu-bar;verify-property-values-of-header-bar-menu-pre-log-in;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@headerMenu"
    },
    {
      "line": 23,
      "name": "@all"
    },
    {
      "line": 23,
      "name": "@headerMenu2"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I navigate to \"home\" page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "\"Register button\" has \"Text\" value equal to \"Register\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1220987500,
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
  "duration": 458947700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register button",
      "offset": 1
    },
    {
      "val": "Text",
      "offset": 23
    },
    {
      "val": "Register",
      "offset": 45
    }
  ],
  "location": "HeaderMenuBarSteps.webElementHasPropertyValueEqualTo(String,String,String)"
});
formatter.result({
  "duration": 55378600,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 639898100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 38,
  "name": "Successful logging in",
  "description": "",
  "id": "test-involving-header-menu-bar;successful-logging-in",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@all"
    },
    {
      "line": 37,
      "name": "@successfulLogin"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I navigate to \"home\" page",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I enter username as \"EJFTester01\" and password as \"Tester01.\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "\"\u003cWebElement\u003e\" has \"\u003cPropertyCheck\u003e\" value equal to \"\u003cPropertyValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "test-involving-header-menu-bar;successful-logging-in;",
  "rows": [
    {
      "cells": [
        "WebElement",
        "PropertyCheck",
        "PropertyValue"
      ],
      "line": 47,
      "id": "test-involving-header-menu-bar;successful-logging-in;;1"
    },
    {
      "cells": [
        "Welcome Label",
        "Text",
        "Hi, John"
      ],
      "line": 48,
      "id": "test-involving-header-menu-bar;successful-logging-in;;2"
    },
    {
      "cells": [
        "Profile link",
        "Text",
        "Profile"
      ],
      "line": 49,
      "id": "test-involving-header-menu-bar;successful-logging-in;;3"
    },
    {
      "cells": [
        "Logout link",
        "Text",
        "Logout"
      ],
      "line": 50,
      "id": "test-involving-header-menu-bar;successful-logging-in;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 48,
  "name": "Successful logging in",
  "description": "",
  "id": "test-involving-header-menu-bar;successful-logging-in;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@successfulLogin"
    },
    {
      "line": 37,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I navigate to \"home\" page",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I enter username as \"EJFTester01\" and password as \"Tester01.\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "\"Welcome Label\" has \"Text\" value equal to \"Hi, John\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1208529600,
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
  "duration": 327672500,
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
  "duration": 281112100,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 82849600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome Label",
      "offset": 1
    },
    {
      "val": "Text",
      "offset": 21
    },
    {
      "val": "Hi, John",
      "offset": 43
    }
  ],
  "location": "HeaderMenuBarSteps.webElementHasPropertyValueEqualTo(String,String,String)"
});
formatter.result({
  "duration": 1139383300,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 669641100,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Successful logging in",
  "description": "",
  "id": "test-involving-header-menu-bar;successful-logging-in;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@successfulLogin"
    },
    {
      "line": 37,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I navigate to \"home\" page",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I enter username as \"EJFTester01\" and password as \"Tester01.\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "\"Profile link\" has \"Text\" value equal to \"Profile\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1342300800,
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
  "duration": 434723600,
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
  "duration": 346906800,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 84351700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Profile link",
      "offset": 1
    },
    {
      "val": "Text",
      "offset": 20
    },
    {
      "val": "Profile",
      "offset": 42
    }
  ],
  "location": "HeaderMenuBarSteps.webElementHasPropertyValueEqualTo(String,String,String)"
});
formatter.result({
  "duration": 1111756700,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 658362100,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Successful logging in",
  "description": "",
  "id": "test-involving-header-menu-bar;successful-logging-in;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@successfulLogin"
    },
    {
      "line": 37,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I navigate to \"home\" page",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I enter username as \"EJFTester01\" and password as \"Tester01.\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "\"Logout link\" has \"Text\" value equal to \"Logout\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1209032400,
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
  "duration": 474064800,
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
  "duration": 281160200,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 88841700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout link",
      "offset": 1
    },
    {
      "val": "Text",
      "offset": 19
    },
    {
      "val": "Logout",
      "offset": 41
    }
  ],
  "location": "HeaderMenuBarSteps.webElementHasPropertyValueEqualTo(String,String,String)"
});
formatter.result({
  "duration": 1127641300,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 647709400,
  "status": "passed"
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
  "duration": 1233931200,
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
  "duration": 455901900,
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
  "duration": 286939400,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 86397300,
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
  "duration": 615662800,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 678397800,
  "status": "passed"
});
formatter.uri("features/profilePage.feature");
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
  "name": "I apply wait \"2000\" of milliseconds",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I navigate to \"home\" page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Profile button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify that value \"FirstName Textbox\" is \"NewFirstName\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "in \"FirstName Textbox\" I enter \"John\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I apply wait \"2000\" of milliseconds",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I navigate to \"home\" page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Profile button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "verify that value \"FirstName Textbox\" is \"John\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1230850800,
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
  "duration": 426139900,
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
  "duration": 297548000,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 140370300,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnProfileButton()"
});
formatter.result({
  "duration": 1221722000,
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
  "duration": 594047200,
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
  "duration": 46417900,
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
  "duration": 106193700,
  "status": "passed"
});
formatter.match({
  "location": "ProfilePageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 72757100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 14
    }
  ],
  "location": "HeaderMenuBarSteps.applyWait(int)"
});
formatter.result({
  "duration": 2000930100,
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
  "duration": 311832400,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnProfileButton()"
});
formatter.result({
  "duration": 652182500,
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
  "duration": 578866800,
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
  "duration": 112762100,
  "status": "passed"
});
formatter.match({
  "location": "ProfilePageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 65319400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 14
    }
  ],
  "location": "HeaderMenuBarSteps.applyWait(int)"
});
formatter.result({
  "duration": 2009042100,
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
  "duration": 245232000,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnProfileButton()"
});
formatter.result({
  "duration": 650088700,
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
  "duration": 587300100,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 663106100,
  "status": "passed"
});
formatter.uri("features/registerPage.feature");
formatter.feature({
  "line": 1,
  "name": "Test involving register page",
  "description": "",
  "id": "test-involving-register-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@all"
    },
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@Register1"
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
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"\u003cWebElement\u003e\" should be \"\u003cProperty\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;",
  "rows": [
    {
      "cells": [
        "WebElement",
        "Property"
      ],
      "line": 12,
      "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;1"
    },
    {
      "cells": [
        "Login Textbox",
        "visible"
      ],
      "line": 13,
      "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;2"
    },
    {
      "cells": [
        "Login Textbox",
        "enabled"
      ],
      "line": 14,
      "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;3"
    },
    {
      "cells": [
        "Login Textbox",
        "blank"
      ],
      "line": 15,
      "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;4"
    },
    {
      "cells": [
        "FirstName Textbox",
        "visible"
      ],
      "line": 16,
      "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;5"
    },
    {
      "cells": [
        "FirstName Textbox",
        "enabled"
      ],
      "line": 17,
      "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;6"
    },
    {
      "cells": [
        "FirstName Textbox",
        "blank"
      ],
      "line": 18,
      "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;7"
    },
    {
      "cells": [
        "LastName Textbox",
        "visible"
      ],
      "line": 19,
      "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;8"
    },
    {
      "cells": [
        "LastName Textbox",
        "enabled"
      ],
      "line": 20,
      "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;9"
    },
    {
      "cells": [
        "LastName Textbox",
        "blank"
      ],
      "line": 21,
      "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;10"
    },
    {
      "cells": [
        "Password Textbox",
        "visible"
      ],
      "line": 22,
      "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;11"
    },
    {
      "cells": [
        "Password Textbox",
        "enabled"
      ],
      "line": 23,
      "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;12"
    },
    {
      "cells": [
        "Password Textbox",
        "blank"
      ],
      "line": 24,
      "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;13"
    },
    {
      "cells": [
        "Confirm Password Textbox",
        "visible"
      ],
      "line": 25,
      "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;14"
    },
    {
      "cells": [
        "Confirm Password Textbox",
        "enabled"
      ],
      "line": 26,
      "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;15"
    },
    {
      "cells": [
        "Confirm Password Textbox",
        "blank"
      ],
      "line": 27,
      "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;16"
    },
    {
      "cells": [
        "Submit Registration Button",
        "visible"
      ],
      "line": 28,
      "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;17"
    },
    {
      "cells": [
        "Submit Registration Button",
        "disabled"
      ],
      "line": 29,
      "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;18"
    },
    {
      "cells": [
        "Cancel Registration Button",
        "visible"
      ],
      "line": 30,
      "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;19"
    },
    {
      "cells": [
        "Cancel Registration Button",
        "enabled"
      ],
      "line": 31,
      "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;20"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@Register1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"Login Textbox\" should be \"visible\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1237217000,
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
  "duration": 437667800,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 190482300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login Textbox",
      "offset": 1
    },
    {
      "val": "visible",
      "offset": 27
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 50338200,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 641761100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@Register1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"Login Textbox\" should be \"enabled\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1218892900,
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
  "duration": 350323000,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 130173100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login Textbox",
      "offset": 1
    },
    {
      "val": "enabled",
      "offset": 27
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 33729300,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 652446300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@Register1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"Login Textbox\" should be \"blank\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1251051800,
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
  "duration": 421950000,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 123914700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login Textbox",
      "offset": 1
    },
    {
      "val": "blank",
      "offset": 27
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 35257100,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 654754200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@Register1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"FirstName Textbox\" should be \"visible\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1261632000,
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
  "duration": 438992600,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 160275900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FirstName Textbox",
      "offset": 1
    },
    {
      "val": "visible",
      "offset": 31
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 56435900,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 636680300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@Register1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"FirstName Textbox\" should be \"enabled\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1297231000,
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
  "duration": 410170700,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 101943900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FirstName Textbox",
      "offset": 1
    },
    {
      "val": "enabled",
      "offset": 31
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 30374800,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 639255600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@Register1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"FirstName Textbox\" should be \"blank\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1255964000,
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
  "duration": 316520100,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 140972900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FirstName Textbox",
      "offset": 1
    },
    {
      "val": "blank",
      "offset": 31
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 43788800,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 661166700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@Register1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"LastName Textbox\" should be \"visible\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1225478000,
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
  "duration": 457538300,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 126982400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LastName Textbox",
      "offset": 1
    },
    {
      "val": "visible",
      "offset": 30
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 61631400,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 662423000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@Register1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"LastName Textbox\" should be \"enabled\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1272635700,
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
  "duration": 412706500,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 119677700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LastName Textbox",
      "offset": 1
    },
    {
      "val": "enabled",
      "offset": 30
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 26938000,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 638349700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@Register1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"LastName Textbox\" should be \"blank\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1252833000,
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
  "duration": 405687700,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 154943200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LastName Textbox",
      "offset": 1
    },
    {
      "val": "blank",
      "offset": 30
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 42930300,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 654108700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@Register1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"Password Textbox\" should be \"visible\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1215968100,
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
  "duration": 330589400,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 166331900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password Textbox",
      "offset": 1
    },
    {
      "val": "visible",
      "offset": 30
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 42532000,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 645282900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@Register1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"Password Textbox\" should be \"enabled\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1262149700,
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
  "duration": 390278600,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 127893500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password Textbox",
      "offset": 1
    },
    {
      "val": "enabled",
      "offset": 30
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 36055600,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 657635900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@Register1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"Password Textbox\" should be \"blank\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1271155300,
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
  "duration": 416626600,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 120116700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password Textbox",
      "offset": 1
    },
    {
      "val": "blank",
      "offset": 30
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 28991700,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 632688600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@Register1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"Confirm Password Textbox\" should be \"visible\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1252197600,
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
  "duration": 424774700,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 131458500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Confirm Password Textbox",
      "offset": 1
    },
    {
      "val": "visible",
      "offset": 38
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 46124200,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 642627900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@Register1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"Confirm Password Textbox\" should be \"enabled\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1293385000,
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
  "duration": 403417500,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 130303400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Confirm Password Textbox",
      "offset": 1
    },
    {
      "val": "enabled",
      "offset": 38
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 27064400,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 648946000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;16",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@Register1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"Confirm Password Textbox\" should be \"blank\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1262734700,
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
  "duration": 433316900,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 151045800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Confirm Password Textbox",
      "offset": 1
    },
    {
      "val": "blank",
      "offset": 38
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 33868100,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c\"[]\"\u003e but was:\u003c\"[Confirm Password]\"\u003e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat StepDefinitions.HeaderMenuBarSteps.webElementShouldBe(HeaderMenuBarSteps.java:93)\r\n\tat ✽.Then \"Confirm Password Textbox\" should be \"blank\"(features/registerPage.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;17",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@Register1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"Submit Registration Button\" should be \"visible\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1237593800,
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
  "duration": 406348700,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 114122900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submit Registration Button",
      "offset": 1
    },
    {
      "val": "visible",
      "offset": 40
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 34731000,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 645290900,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;18",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@Register1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"Submit Registration Button\" should be \"disabled\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1318224900,
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
  "duration": 457719900,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 155955800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submit Registration Button",
      "offset": 1
    },
    {
      "val": "disabled",
      "offset": 40
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 33305500,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 630831700,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;19",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@Register1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"Cancel Registration Button\" should be \"visible\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1210701100,
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
  "duration": 309656900,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 136044200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cancel Registration Button",
      "offset": 1
    },
    {
      "val": "visible",
      "offset": 40
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 47309100,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 642850200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify default state header menu bar elements",
  "description": "",
  "id": "test-involving-register-page;verify-default-state-header-menu-bar-elements;;20",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@Register1"
    },
    {
      "line": 3,
      "name": "@all"
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
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"Cancel Registration Button\" should be \"enabled\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1265124000,
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
  "duration": 431693100,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 189087900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cancel Registration Button",
      "offset": 1
    },
    {
      "val": "enabled",
      "offset": 40
    }
  ],
  "location": "HeaderMenuBarSteps.webElementShouldBe(String,String)"
});
formatter.result({
  "duration": 35334600,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 640055000,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify successful registration",
  "description": "",
  "id": "test-involving-register-page;verify-successful-registration",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@all"
    },
    {
      "line": 33,
      "name": "@Register"
    },
    {
      "line": 33,
      "name": "@Register2"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I navigate to \"home\" page",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 38,
      "value": "#TO DO: IMPROVE STEPS , MAKE IT SINGLE STEP"
    },
    {
      "line": 39,
      "value": "#    And in \"WebElement\" I enter \"\u003cValue\u003e\""
    },
    {
      "line": 40,
      "value": "#      | WebElement                  | Value    |"
    },
    {
      "line": 41,
      "value": "#      | Login Textbox               | visible  |"
    },
    {
      "line": 42,
      "value": "#      | FirstName Textbox           | visible  |"
    },
    {
      "line": 43,
      "value": "#      | LastName Textbox            | visible  |"
    },
    {
      "line": 44,
      "value": "#      | Password Textbox            | visible  |"
    },
    {
      "line": 45,
      "value": "#      | Confirm Password Textbox    | visible  |"
    }
  ],
  "line": 46,
  "name": "in \"Username Textbox\" I enter \"EJFTEST\u003cADD SUFFIX\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "in \"FirstName Textbox\" I enter \"John\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "in \"LastName Textbox\" I enter \"Doe\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "in \"Register Password Textbox\" I enter \"Test.123\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "in \"Register Confirm Password Textbox\" I enter \"Test.123\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on Complete Register button",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "verify succesful registration",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 53,
      "value": "#    Then I apply wait \"5000\" of milliseconds"
    }
  ],
  "line": 54,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1228470500,
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
  "duration": 422761100,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 109377100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username Textbox",
      "offset": 4
    },
    {
      "val": "EJFTEST\u003cADD SUFFIX\u003e",
      "offset": 31
    }
  ],
  "location": "RegisterPageSteps.inElementIEnterValue(String,String)"
});
formatter.result({
  "duration": 135038300,
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
  "duration": 90782000,
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
  "duration": 93407400,
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
  "duration": 98702200,
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
  "duration": 127486900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 82499300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.successfulRegistration()"
});
formatter.result({
  "duration": 549110500,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 733100100,
  "status": "passed"
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
  "line": 68,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderMenuBarSteps.iOpenBrowser()"
});
formatter.result({
  "duration": 1302869800,
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
  "duration": 453377100,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 126704300,
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
  "duration": 99841800,
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
  "duration": 96720400,
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
  "duration": 167378100,
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
  "duration": 88835700,
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
  "duration": 91895100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 126517200,
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
  "duration": 584852100,
  "status": "passed"
});
formatter.match({
  "location": "HeaderMenuBarSteps.quitDriver()"
});
formatter.result({
  "duration": 677745600,
  "status": "passed"
});
});