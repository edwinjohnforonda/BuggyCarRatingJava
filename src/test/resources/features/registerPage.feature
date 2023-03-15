Feature: Test involving register page

  @all @Register @Register1
  Scenario Outline: Verify default state header menu bar elements
    Given I open browser
    When I navigate to "home" page
    And I click on Register button
    Then "<WebElement>" should be "<Property>"
    And I close browser

    Examples:
      | WebElement                  | Property |
      | Login Textbox               | visible  |
      | Login Textbox               | enabled  |
      | Login Textbox               | blank    |
      | FirstName Textbox           | visible  |
      | FirstName Textbox           | enabled  |
      | FirstName Textbox           | blank    |
      | LastName Textbox            | visible  |
      | LastName Textbox            | enabled  |
      | LastName Textbox            | blank    |
      | Password Textbox            | visible  |
      | Password Textbox            | enabled  |
      | Password Textbox            | blank    |
      | Confirm Password Textbox    | visible  |
      | Confirm Password Textbox    | enabled  |
      | Submit Registration Button  | visible  |
      | Submit Registration Button  | disabled |
      | Cancel Registration Button  | visible  |
      | Cancel Registration Button  | enabled  |

  @all @Register @Register2
  Scenario: Verify successful registration
    Given I open browser
    When I navigate to "home" page
    And I click on Register button
    #TO DO: IMPROVE STEPS , MAKE IT SINGLE STEP
#    And in "WebElement" I enter "<Value>"
#      | WebElement                  | Value    |
#      | Login Textbox               | visible  |
#      | FirstName Textbox           | visible  |
#      | LastName Textbox            | visible  |
#      | Password Textbox            | visible  |
#      | Confirm Password Textbox    | visible  |
    And in "Username Textbox" I enter "EJFTEST<ADD SUFFIX>"
    And in "FirstName Textbox" I enter "John"
    And in "LastName Textbox" I enter "Doe"
    And in "Register Password Textbox" I enter "Test.123"
    And in "Register Confirm Password Textbox" I enter "Test.123"
    Then I click on Complete Register button
    And verify succesful registration
#    Then I apply wait "5000" of milliseconds
    And I close browser

  @all @Register @Register3
  Scenario: Verify registration of exsiting user
    Given I open browser
    When I navigate to "home" page
    And I click on Register button
    And in "Username Textbox" I enter "EJFTEST001"
    And in "FirstName Textbox" I enter "John"
    And in "LastName Textbox" I enter "Doe"
    And in "Register Password Textbox" I enter "Test.123"
    And in "Register Confirm Password Textbox" I enter "Test.123"
    Then I click on Complete Register button
    And verify that error message "UsernameExistsException: User already exists"
    And I close browser