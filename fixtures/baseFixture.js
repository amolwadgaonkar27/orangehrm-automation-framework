const base = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const PimPage = require('../pages/PimPage');
const LeavePage = require('../pages/LeavePage');
const TimePage = require('../pages/TimePage');
const RecruitmentPage = require('../pages/RecruitmentPage');
const AdminPage = require('../pages/AdminPage');
const DashboardPage = require('../pages/DashboardPage');
const LogoutPage = require('../pages/LogoutPage');

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
    },

  adminPage: async ({ page }, use) => {
    await use(new AdminPage(page));
    },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },

  logoutPage: async ({ page }, use) => {
    await use(new LogoutPage(page));
  }

});

exports.expect = base.expect;