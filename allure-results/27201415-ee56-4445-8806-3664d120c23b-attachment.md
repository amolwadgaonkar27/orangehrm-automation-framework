# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.spec.js >> Dashboard Module >> TC017 - Validate Dashboard Widgets
- Location: tests/dashboard.spec.js:20:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | const { test, expect } = require('../fixtures/baseFixture');
  2  | const { loadTestData } = require('../utilities/testDataLoader');
  3  | 
  4  | const loginData = loadTestData('loginTestData.json');
  5  | 
  6  | test.describe('Dashboard Module', () => {
  7  | 
  8  |     test.beforeEach(async ({ loginPage, dashboardPage }) => {
  9  | 
  10 |         await loginPage.goto();
  11 |         await loginPage.login(
  12 |             loginData.TC001.username,
  13 |             loginData.TC001.password
  14 |         );
  15 | 
  16 |         await dashboardPage.openDashboard();
  17 | 
  18 |     });
  19 | 
  20 |     test('TC017 - Validate Dashboard Widgets', async ({ dashboardPage }) => {
  21 | 
> 22 |         expect(await dashboardPage.isTimeAtWorkVisible()).toBeTruthy();
     |                                                           ^ Error: expect(received).toBeTruthy()
  23 |         expect(await dashboardPage.isMyActionsVisible()).toBeTruthy();
  24 |         expect(await dashboardPage.isQuickLaunchVisible()).toBeTruthy();
  25 | 
  26 | });
  27 | 
  28 | });
```