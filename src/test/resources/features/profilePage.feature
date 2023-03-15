Feature: Test involving profile page

  @all @Profile @Profile2
  Scenario: Verify successful profile update
    Given I open browser
    When I navigate to "home" page
    And I enter username as "EJFTester01" and password as "Tester01."
    And I click on login button
    And I click on Profile button
    Then verify that value "FirstName Textbox" is "John"
    And verify that value "LastName Textbox" is "Doe"
    When in "FirstName Textbox" I enter "NewFirstName"
    And I click on save button
    And I navigate to "home" page
    And I click on Profile button
    Then verify that value "FirstName Textbox" is "NewFirstName"
    When in "FirstName Textbox" I enter "John"
    And I click on save button
    And I close browser
#TO DO: NEED TO VALIDATE UPDATING OF ALL FIELDS
