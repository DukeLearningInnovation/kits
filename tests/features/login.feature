Feature: Login
    In order to use Kits
    As a user
    I login to the site

    Scenario: Login
        Given I am navigate to the homepage 
            And am redirected to the login page
        When I login
        Then I should be logged in
