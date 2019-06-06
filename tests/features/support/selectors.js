// These are ways of being able to identify HTML elements
// to interact with and check.

// Dependencies
const pages = require('./pages');

const selectors = {
    links: {
      myKits: 'a.duke_logo[href="{pages.myKits}"]'
    },
    buttons: {
      login: 'button#Submit.action',
      logout: 'a[href="{pages.logout}"]',
      createKit: 'a#add_new_kit'
    },
    fields: {
      userName: '#j_username',
      userPass: '#j_password'
    },
    el: {
      userDisplayName: 'nav_account'
    }
  };
  
  module.exports = selectors;
  