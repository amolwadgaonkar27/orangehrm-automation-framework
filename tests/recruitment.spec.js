const { test, expect } = require('../fixtures/baseFixture');
const { loadTestData } = require('../utilities/testDataLoader');

const loginData = loadTestData('loginTestData.json');
const recruitmentData = loadTestData('recruitmentTestData.json');

test.describe('Recruitment Module', () => {

    test.beforeEach(async ({ loginPage, recruitmentPage }) => {

        await loginPage.goto();

        await loginPage.login(
            loginData.TC001.username,
            loginData.TC001.password
        );

        await recruitmentPage.openRecruitment();

    });

    test('TC012 - Add Candidate', async ({ recruitmentPage }) => {

        await recruitmentPage.clickAddCandidate();
        await recruitmentPage.addCandidate(
            recruitmentData.TC012.firstName,
            recruitmentData.TC012.lastName,
            recruitmentData.TC012.email
        );

        const message = await recruitmentPage.getSuccessMessage();

        expect(message).toContain('Successfully Saved');

    });

    test('TC013 - Add Candidate', async ({ recruitmentPage }) => {

    await recruitmentPage.clickAddCandidate();

    await recruitmentPage.addCandidate(
        recruitmentData.TC013.firstName,
        recruitmentData.TC013.lastName,
        recruitmentData.TC013.email
    );

    const message = await recruitmentPage.getSuccessMessage();

    expect(message).toContain('Successfully Saved');

});

});