const { Given, When, Then } = require('cucumber');
const {
    visitHome,
    loginRedirect,
    login,
    visitMyKits
} = require('../support/actions');

// login.feature
Given('I am navigate to the homepage', visitHome);
Given('am redirected to the login page', loginRedirect);
When('I login', login);
Then('I should be logged in', visitMyKits);

