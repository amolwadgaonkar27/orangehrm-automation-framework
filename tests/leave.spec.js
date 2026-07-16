const { test, expect } = require('../fixtures/baseFixture');
const { loadTestData } = require('../utilities/testDataLoader');

const data = loadTestData('loginTestData.json');
const leaveData = loadTestData('leaveTestData.json');

test.describe('Leave Module', () => {

    test.beforeEach(async ({ loginPage, leavePage }) => {

        await loginPage.goto();
        await loginPage.login(
            data.TC001.username,
            data.TC001.password
        );

        await leavePage.openLeave();

    });

    test('TC009 - Search Leave Records', async ({ leavePage, page }) => {
        await leavePage.searchLeave(
            leaveData.TC009.fromDate,
            leaveData.TC009.toDate
        );

        const records = page.locator('.oxd-table-card');
        const noRecords = page.getByText('No Records Found');

        if (await records.count() > 0) {
            await expect(records.first()).toBeVisible();
        } else {
            await expect(noRecords).toBeVisible();
        }

    });

    test('TC010 - Apply Leave', async ({ leavePage }) => {
        await leavePage.openApplyLeave();
        await leavePage.applyLeave(
            leaveData.TC010.leaveType,
            leaveData.TC010.fromDate,
        leaveData.TC010.toDate
    );

    const message = await leavePage.getSuccessMessage();
    expect(message).toContain('Successfully');

});

});