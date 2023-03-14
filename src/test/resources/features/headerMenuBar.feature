Feature: Test involving header menu bar

  @all @headerMenu @headerMenu1
  Scenario Outline: Verify default state header menu bar elements
    Given I open browser
    When I navigate to "home" page
    Then "<WebElement>" should be "<Property>"
    And I close browser

    Examples:
      | WebElement       | Property |
      | Login Textbox    | visible  |
      | Login Textbox    | enabled  |
      | Login Textbox    | blank    |
      | Password Textbox | visible  |
      | Password Textbox | enabled  |
      | Password Textbox | blank    |
      | Login button     | visible  |
      | Login button     | enabled  |
      | Register button  | visible  |
      | Register button  | enabled  |

  @all @headerMenu @headerMenu2
  Scenario Outline: Verify property values of header bar menu pre log in
    Given I open browser
    When I navigate to "home" page
    And "<WebElement>" has "<PropertyCheck>" value equal to "<PropertyValue>"
    And I close browser

    Examples:
      | WebElement       | PropertyCheck | PropertyValue   |
      | Login Textbox    | Placeholder   | Login           |
      | Password Textbox | Placeholder   | Password        |
      | Login button     | Text          | Login           |
      | Register button  | Text          | Register        |

  @all @successfulLogin
  Scenario Outline: Successful logging in
    Given I open browser
    When I navigate to "home" page
    And I enter username as "EJFTester01" and password as "Tester01."
    And I click on login button
    And "<WebElement>" has "<PropertyCheck>" value equal to "<PropertyValue>"
    And I close browser

    Examples:
      | WebElement       | PropertyCheck | PropertyValue   |
      | Welcome Label    | Text          | Hi, test        |
      | Profile link     | Text          | Profile         |
      | Logout link      | Text           | Logout         |

  @all @failedlLogin
  Scenario: Successful logging in
    Given I open browser
    When I navigate to "home" page
    And I enter username as "Invalid" and password as "Invalid"
    And I click on login button
    And "login error message" has "Text" value equal to "Invalid username/password"
    And I close browser
