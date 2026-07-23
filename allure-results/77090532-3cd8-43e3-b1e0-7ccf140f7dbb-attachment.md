# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: time.spec.js >> Time Module >> TC011 - Create Timesheet
- Location: tests/time.spec.js:22:5

# Error details

```
Test timeout of 60000ms exceeded while running "beforeEach" hook.
```

# Test source

```ts
  1  | const { test, expect } = require('../fixtures/baseFixture');
  2  | const { loadTestData } = require('../utilities/testDataLoader');
  3  | 
  4  | const loginData = loadTestData('loginTestData.json');
  5  | const timeData = loadTestData('timeTestData.json');
  6  | 
  7  | test.describe('Time Module', () => {
  8  | 
> 9  |     test.beforeEach(async ({ loginPage, timePage }) => {
     |          ^ Test timeout of 60000ms exceeded while running "beforeEach" hook.
  10 | 
  11 |         await loginPage.goto();
  12 |         await loginPage.login(
  13 |             loginData.TC001.username,
  14 |             loginData.TC001.password
  15 | 
  16 |         );
  17 | 
  18 |         await timePage.openTime();
  19 | 
  20 |     });
  21 | 
  22 |     test('TC011 - Create Timesheet', async ({ timePage }) => {
  23 | 
  24 |         await timePage.openMyTimesheet();
  25 |         await timePage.createTimesheet(
  26 |             timeData.TC011.project,
  27 |             timeData.TC011.activity,
  28 |             timeData.TC011.hours
  29 | 
  30 |         );
  31 | 
  32 |         const message = await timePage.getSuccessMessage();
  33 |         expect(message).toContain('Successfully Saved');
  34 | 
  35 |     });
  36 | 
  37 | });
```