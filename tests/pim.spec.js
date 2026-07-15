const { test, expect } = require('../fixtures/baseFixture');
const { loadTestData } = require('../utilities/testDataLoader');
const loginData = loadTestData('login_test_data.json');
const pimData = loadTestData('pimTestData.json');

test.describe('PIM Module', () => {

    test.beforeEach(async ({ loginPage, pimPage }) => {

        await loginPage.goto();
        await loginPage.login(
            loginData.TC001.username,
            loginData.TC001.password
        );

        await pimPage.openPIM();

    });

   test('TC005 - Add Employee', async ({ pimPage }) => {

    await pimPage.clickAddEmployee();
    const employeeId = (Math.floor(Math.random() * 9000) + 1000).toString();
    await pimPage.enterEmployeeId(employeeId);
    await pimPage.addEmployee(
        pimData.TC005.firstName,
        pimData.TC005.lastName
    );

    const success = await pimPage.getSuccessMessage();
    expect(success).toContain('Successfully Saved');
});

    test('TC006 - Add Employee', async ({ pimPage }) => {

        await pimPage.clickAddEmployee();
        const employeeId = (Math.floor(Math.random() * 9000) + 1000).toString();
        await pimPage.enterEmployeeId(employeeId);
        await pimPage.addEmployee(
            pimData.TC006.firstName,
            pimData.TC006.lastName
    );

        const success = await pimPage.getSuccessMessage();
        expect(success).toContain('Successfully Saved');
});

    test('TC007 - Search Employee', async ({ pimPage }) => {

        await pimPage.searchEmployee(
            pimData.TC007.employeeName
        );

        const found = await pimPage.isEmployeeDisplayed(
        pimData.TC007.employeeName
    );

        expect(found).toBeTruthy();

});

    test('TC008 - Search Invalid Employee', async ({ pimPage, page }) => {

        await pimPage.searchEmployee(
            pimData.TC008.employeeName
        );

        await expect(
        pimPage.getNoRecordsMessage()
        ).toHaveText('No Records Found');

});

});