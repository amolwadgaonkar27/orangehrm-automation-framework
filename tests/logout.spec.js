const { test, expect } = require('../fixtures/baseFixture');
const { loadTestData } = require('../utilities/testDataLoader');

const loginData = loadTestData('loginTestData.json');

test.describe('Logout Module', () => {

    test.beforeEach(async ({ loginPage }) => {

        await loginPage.goto();
        await loginPage.login(
            loginData.TC001.username,
            loginData.TC001.password
        );

    });

    test('TC018 - Logout Application', async ({ logoutPage }) => {

        await logoutPage.logout();
        expect(
            await logoutPage.isLoginPageDisplayed()
        ).toBeTruthy();

    });

});