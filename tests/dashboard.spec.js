 const { test, expect } = require('../fixtures/baseFixture');
const { loadTestData } = require('../utilities/testDataLoader');

const loginData = loadTestData('loginTestData.json');

test.describe('Dashboard Module', () => {

    test.beforeEach(async ({ loginPage, dashboardPage }) => {

        await loginPage.goto();
        await loginPage.login(
            loginData.TC001.username,
            loginData.TC001.password
        );

    });

    test('TC017 - Validate Dashboard Widgets', async ({ dashboardPage }) => {

        await expect(await dashboardPage.isTimeAtWorkVisible()).toBeVisible();
        await expect(await dashboardPage.isMyActionsVisible()).toBeVisible();
        await expect(await dashboardPage.isQuickLaunchVisible()).toBeVisible();

});

});