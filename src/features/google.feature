Feature: Google cats

  Scenario: Google for cats
  Given I am on google
  When I search for cats
  Then I should see cats
