# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim.spec.js >> PIM Module >> TC008 - Search Invalid Employee
- Location: tests/pim.spec.js:68:1

# Error details

```
Test timeout of 60000ms exceeded while running "beforeEach" hook.
```

```
Error: page.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('a[href*="viewPimModule"]')
    - waiting for navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e12]:
          - alert [ref=e13]:
            - generic [ref=e14]:
              - generic [ref=e15]: 
              - paragraph [ref=e16]: Unexpected error occurred
          - generic [ref=e18]:
            - paragraph [ref=e19]: "Username : Admin"
            - paragraph [ref=e20]: "Password : admin123"
        - generic [ref=e21]:
          - generic [ref=e23]:
            - generic [ref=e24]:
              - generic [ref=e25]: 
              - generic [ref=e26]: Username
            - textbox "Username" [active] [ref=e28]
          - generic [ref=e30]:
            - generic [ref=e31]:
              - generic [ref=e32]: 
              - generic [ref=e33]: Password
            - textbox "Password" [ref=e35]
          - button "Login" [ref=e37] [cursor=pointer]
          - paragraph [ref=e39] [cursor=pointer]: Forgot your password?
      - generic [ref=e40]:
        - generic [ref=e41]:
          - link [ref=e42] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e45] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e48] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e51] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e54]:
          - paragraph [ref=e55]: OrangeHRM OS 5.9
          - paragraph [ref=e56]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e57] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e59]
```

# Test source

```ts
  1  | const pimLocators = require('../locators/pimLocators');
  2  | 
  3  | class PimPage {
  4  | 
  5  |     constructor(page) {
  6  |         this.page = page;
  7  |     }
  8  | 
  9  |     async openPIM() {
> 10 |         await this.page.click(pimLocators.pimMenu);
     |                         ^ Error: page.click: Test timeout of 60000ms exceeded.
  11 | 
  12 |     }
  13 | 
  14 |     async clickAddEmployee() {
  15 |         await this.page.click(pimLocators.addEmployeeBtn);
  16 |         await this.page.waitForSelector(pimLocators.firstName);
  17 | 
  18 | }
  19 |     async addEmployee(firstName, lastName) {
  20 |         await this.page.fill(pimLocators.firstName, firstName);
  21 |         await this.page.fill(pimLocators.lastName, lastName);
  22 |         await this.page.click(pimLocators.saveBtn);
  23 | 
  24 |     }
  25 | 
  26 |     async getSuccessMessage() {
  27 |         await this.page.waitForSelector(pimLocators.successMessage, {
  28 |         state: 'visible',
  29 |         timeout: 10000
  30 |     });
  31 | 
  32 |     return await this.page.locator(pimLocators.successMessage).textContent();
  33 | 
  34 | }
  35 | 
  36 |     async getRequiredMessage() {
  37 |         return await this.page.locator(pimLocators.requiredMessage).first().textContent();
  38 | 
  39 |     }
  40 | 
  41 |     async searchEmployee(employeeName) {
  42 |     await this.page.fill(
  43 |         pimLocators.employeeNameSearch,
  44 |         employeeName
  45 |     );
  46 | 
  47 |     await this.page.waitForTimeout(1000);
  48 |     await this.page.keyboard.press('ArrowDown');
  49 |     await this.page.keyboard.press('Enter');
  50 |     await this.page.click(pimLocators.searchButton);
  51 | 
  52 | }
  53 | 
  54 | async isEmployeeDisplayed(employeeName) {
  55 | 
  56 |     await this.page.waitForSelector(pimLocators.employeeRows);
  57 |     const rows = this.page.locator(pimLocators.employeeRows);
  58 |     const count = await rows.count();
  59 |     for (let i = 0; i < count; i++) {
  60 |         const text = await rows.nth(i).textContent();
  61 |         if (text.includes(employeeName)) {
  62 |             return true;
  63 |         }
  64 |     }
  65 | 
  66 |     return false;
  67 | }
  68 | 
  69 | async getNoRecordsMessage() {
  70 |     await this.page.waitForSelector(pimLocators.noRecordsFound);
  71 |     return await this.page
  72 |         .locator(pimLocators.noRecordsFound)
  73 |         .textContent();
  74 | 
  75 | }
  76 | 
  77 | async enterEmployeeId(employeeId) {
  78 |         await this.page.locator(pimLocators.employeeId).fill(employeeId);
  79 | }
  80 | }
  81 | 
  82 | module.exports = PimPage;
```