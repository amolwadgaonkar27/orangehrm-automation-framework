const { test, expect } = require('../fixtures/baseFixture');
const { loadTestData } = require('../utilities/testDataLoader');

const loginData = loadTestData('loginTestData.json');
const adminData = loadTestData('adminTestData.json');

test.describe('Admin Module', () => {

    test.beforeEach(async ({ loginPage, adminPage }) => {

        await loginPage.goto();
        await loginPage.login(
            loginData.TC001.username,
            loginData.TC001.password
        );

        await adminPage.openAdmin();

    });

    test('TC014 - Create ESS User', async ({ adminPage }) => {

        await adminPage.clickAddUser();
        await adminPage.createESSUser(
            adminData.TC014.employee,
            adminData.TC014.username,
            adminData.TC014.password
        );

        const message =
            await adminPage.getSuccessMessage();

        expect(message).toContain('Successfully Saved');

    });

    test('TC015 - Search User', async ({ adminPage }) => {

        await adminPage.searchUser(
            adminData.TC015.username
        );

        const displayed =
            await adminPage.isUserDisplayed();

        expect(displayed).toBeTruthy();

    });

    test('TC016 - Delete User', async ({ adminPage }) => {

        await adminPage.openAdmin();
        await adminPage.deleteUser(
            adminData.TC016.username
        );

        const message =
            await adminPage.getSuccessMessage();

        expect(message).toContain(
            'Successfully Deleted'
        );

    });

});