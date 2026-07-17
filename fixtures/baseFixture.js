const base = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const PimPage = require('../pages/PimPage');
const LeavePage = require('../pages/LeavePage');
const TimePage = require('../pages/TimePage');
const RecruitmentPage = require('../pages/RecruitmentPage');

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

  timePage: async ({ page }, use) => {
    await use(new TimePage(page));

    },

  recruitmentPage: async ({ page }, use) => {
    await use(new RecruitmentPage(page));
}

});

exports.expect = base.expect;