Feature: Home page - Workspace Search Functionality
 
  @Staging @Sanity
  Scenario: Search for WeWork locations by prefecture/area and train line
    Given Navigate to the website
    Then Select Tokyo from the prefecture area dropdown
    And Select Tokyo Metro from the train line dropdown
    And Click on the Search button
    Then Verify the user redirected to Wework locations page