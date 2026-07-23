# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.spec.js >> Dashboard Module >> TC017 - Validate Dashboard Widgets
- Location: tests/dashboard.spec.js:21:5

# Error details

```
TypeError: dashboardPage.openDashboard is not a function
```

# Test source

```ts
  1  |  const { test, expect } = require('../fixtures/baseFixture');
  2  | const { loadTestData } = require('../utilities/testDataLoader');
  3  | 
  4  | const loginData = loadTestData('loginTestData.json');
  5  | 
  6  | test.describe('Dashboard Module', () => {
  7  | 
  8  |     test.beforeEach(async ({ loginPage, dashboardPage }) => {
  9  | 
  10 |         await loginPage.goto();
  11 | 
  12 |         await loginPage.login(
  13 |             loginData.TC001.username,
  14 |             loginData.TC001.password
  15 |         );
  16 | 
> 17 |         await dashboardPage.openDashboard();
     |                             ^ TypeError: dashboardPage.openDashboard is not a function
  18 | 
  19 |     });
  20 | 
  21 |     test('TC017 - Validate Dashboard Widgets', async ({ dashboardPage }) => {
  22 | 
  23 |     await expect(await dashboardPage.isTimeAtWorkVisible()).toBeVisible();
  24 | 
  25 |     await expect(await dashboardPage.isMyActionsVisible()).toBeVisible();
  26 | 
  27 |     await expect(await dashboardPage.isQuickLaunchVisible()).toBeVisible();
  28 | 
  29 | });
  30 | 
  31 | });
```