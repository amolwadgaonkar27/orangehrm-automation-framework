const { test, expect } = require('../fixtures/baseFixture');
const { loadTestData } = require('../utilities/testDataLoader');

const data = loadTestData('loginTestData.json');

test.describe('OrangeHRM Login - TC001 & TC002', () => {

  test('TC001 - Valid Login', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(data.TC001.username, data.TC001.password);
    await expect(await loginPage.isDashboardVisible()).toBeTruthy();
  });

  test('TC002 - Invalid Password', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(data.TC002.username, data.TC002.password);
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Invalid credentials');
  });

  test('TC003 - Login with Invalid Username', async ({ loginPage }) => {

    await loginPage.goto();
    await loginPage.login(
      data.TC003.username,
      data.TC003.password
    );
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Invalid credentials');

});

  test('TC004 - Login with Blank Credentials', async ({ loginPage }) => {

    await loginPage.goto();
    await loginPage.login(
      data.TC004.username,
      data.TC004.password
    );
    const message = await loginPage.getRequiredMessage();
    expect(message).toContain('Required');

});
});