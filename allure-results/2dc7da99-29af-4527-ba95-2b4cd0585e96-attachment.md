# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leave.spec.js >> Leave Module >> TC010 - Apply Leave
- Location: tests/leave.spec.js:33:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('.oxd-select-text')

```

# Test source

```ts
  1  | const leaveLocators = require('../locators/leaveLocators');
  2  | 
  3  | class LeavePage {
  4  | 
  5  |     constructor(page) {
  6  |         this.page = page;
  7  |     }
  8  | 
  9  |     async openLeave() {
  10 | 
  11 |         await this.page.click(leaveLocators.leaveMenu);
  12 | 
  13 |     }
  14 | 
  15 |     async searchLeave(fromDate, toDate) {
  16 |         await this.page.fill(
  17 |             leaveLocators.fromDate,
  18 |             fromDate
  19 |         );
  20 | 
  21 |         await this.page.fill(
  22 |             leaveLocators.toDate,
  23 |             toDate
  24 |         );
  25 | 
  26 |         await this.page.click(
  27 |             leaveLocators.searchButton
  28 |         );
  29 | 
  30 |     }
  31 | 
  32 |     async isLeaveDisplayed() {
  33 |         await this.page.waitForSelector(
  34 |             leaveLocators.leaveTable
  35 |         );
  36 | 
  37 |         return await this.page
  38 |             .locator(leaveLocators.leaveTable)
  39 |             .isVisible();
  40 | 
  41 |     }
  42 | 
  43 |     async openApplyLeave() {
  44 |         await this.page.click(
  45 |             leaveLocators.applyLink
  46 |         );
  47 | 
  48 |     }
  49 | 
  50 |     async applyLeave(type, fromDate, toDate) {
> 51 |         await this.page.click(
     |                         ^ Error: page.click: Test timeout of 60000ms exceeded.
  52 |             leaveLocators.leaveTypeDropdown
  53 |         );
  54 | 
  55 |         await this.page.click(
  56 |             leaveLocators.leaveTypeOption
  57 |         );
  58 | 
  59 |         await this.page.fill(
  60 |             leaveLocators.applyFromDate,
  61 |             fromDate
  62 |         );
  63 | 
  64 |         await this.page.fill(
  65 |             leaveLocators.applyToDate,
  66 |             toDate
  67 |         );
  68 | 
  69 |         await this.page.click(
  70 |             leaveLocators.applyButton
  71 |         );
  72 | 
  73 |     }
  74 | 
  75 |     async getSuccessMessage() {
  76 |         await this.page.waitForSelector(
  77 |             leaveLocators.successToast
  78 |         );
  79 | 
  80 |         return await this.page
  81 |             .locator(leaveLocators.successToast)
  82 |             .textContent();
  83 | 
  84 |     }
  85 | 
  86 | }
  87 | 
  88 | module.exports = LeavePage;
```