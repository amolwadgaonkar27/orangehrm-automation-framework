const base = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const PimPage = require('../pages/PimPage');
const LeavePage = require('../pages/LeavePage');

exports.test = base.test.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  pimPage: async ({ page }, use) => {
      await use(new PimPage(page));

    },
  leavePage: async ({ page }, use) => {

    await use(new LeavePage(page));

},

});

exports.expect = base.expect;