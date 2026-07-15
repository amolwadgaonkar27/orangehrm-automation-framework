const base = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const PimPage = require('../pages/PimPage');

exports.test = base.test.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  pimPage: async ({ page }, use) => {
      await use(new PimPage(page));

    }
});

exports.expect = base.expect;