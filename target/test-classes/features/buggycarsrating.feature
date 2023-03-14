Feature: Bank Account Transactions

  @login
  Scenario: Successful logging in
    Given I open browser
    When I navigate to "home" page
    And I enter username as "EJFTester01" and password as "Tester01."
    And I click on login button
    Then I should be in "home" page
    And I close browser

