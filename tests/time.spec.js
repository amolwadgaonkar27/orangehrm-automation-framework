const { test, expect } = require('../fixtures/baseFixture');
const { loadTestData } = require('../utilities/testDataLoader');

const loginData = loadTestData('loginTestData.json');
const timeData = loadTestData('timeTestData.json');

test.describe('Time Module', () => {

    test.beforeEach(async ({ loginPage, timePage }) => {

        await loginPage.goto();
        await loginPage.login(
            loginData.TC001.username,
            loginData.TC001.password

        );

        await timePage.openTime();

    });

    test('TC011 - Create Timesheet', async ({ timePage }) => {

        await timePage.openMyTimesheet();
        await timePage.createTimesheet(
            timeData.TC011.project,
            timeData.TC011.activity,
            timeData.TC011.hours

        );

        const message = await timePage.getSuccessMessage();
        expect(message).toContain('Successfully Saved');

    });

});