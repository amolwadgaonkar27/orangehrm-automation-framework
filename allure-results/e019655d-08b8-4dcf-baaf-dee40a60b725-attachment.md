# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leave.spec.js >> Leave Module >> TC010 - Verify Apply Leave Page
- Location: tests/leave.spec.js:33:5

# Error details

```
Error: toBeVisible can be only used with Locator object, was called with Promise Promise { locator('text=No Leave Types with Leave Balance') }
```

# Test source

```ts
  1  | const { test, expect } = require('../fixtures/baseFixture');
  2  | const { loadTestData } = require('../utilities/testDataLoader');
  3  | 
  4  | const data = loadTestData('loginTestData.json');
  5  | const leaveData = loadTestData('leaveTestData.json');
  6  | 
  7  | test.describe('Leave Module', () => {
  8  | 
  9  |     test.beforeEach(async ({ loginPage, leavePage }) => {
  10 | 
  11 |         await loginPage.goto();
  12 |         await loginPage.login(
  13 |             data.TC001.username,
  14 |             data.TC001.password
  15 |         );
  16 | 
  17 |         await leavePage.openLeave();
  18 | 
  19 |     });
  20 | 
  21 |     test('TC009 - Search Leave Records', async ({ leavePage }) => {
  22 | 
  23 |         await leavePage.searchLeave(
  24 |             leaveData.TC009.fromDate,
  25 |             leaveData.TC009.toDate
  26 |         );
  27 | 
  28 |         const displayed = await leavePage.isLeaveDisplayed();
  29 |         expect(displayed).toBeTruthy();
  30 | 
  31 |     });
  32 | 
  33 |     test('TC010 - Verify Apply Leave Page', async ({ leavePage }) => {
  34 | 
  35 |     await leavePage.openApplyLeave();
  36 |     await expect(
  37 |         leavePage.getNoLeaveBalanceMessage()
> 38 |     ).toBeVisible();
     |       ^ Error: toBeVisible can be only used with Locator object, was called with Promise Promise { locator('text=No Leave Types with Leave Balance') }
  39 | 
  40 | });
  41 | 
  42 | });
```