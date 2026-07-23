# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin.spec.js >> Admin Module >> TC015 - Search User
- Location: tests/admin.spec.js:39:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('xpath=(//input[contains(@class,"oxd-input")])[2]')

```

# Test source

```ts
  1   | const adminLocators = require('../locators/adminLocators');
  2   | 
  3   | class AdminPage {
  4   | 
  5   |     constructor(page) {
  6   |         this.page = page;
  7   |     }
  8   | 
  9   |     async openAdmin() {
  10  |         await this.page.click(adminLocators.adminMenu);
  11  |     }
  12  | 
  13  |     async clickAddUser() {
  14  |         await this.page.click(adminLocators.addButton);
  15  |     }
  16  | 
  17  |     async getSuccessMessage() {
  18  |         await this.page.waitForSelector(adminLocators.successToast);
  19  | 
  20  |         return await this.page
  21  |             .locator(adminLocators.successToast)
  22  |             .textContent();
  23  |     }
  24  | 
  25  |     async createESSUser(employee, username, password) {
  26  | 
  27  |         await this.page.locator(adminLocators.userRoleDropdown).click();
  28  |         await this.page.getByRole('option', {
  29  |             name: 'ESS'
  30  |         }).click();
  31  | 
  32  |         const employeeInput = this.page.locator(adminLocators.employeeName);
  33  |         await employeeInput.click();
  34  |         await employeeInput.fill(employee);
  35  |         await this.page.waitForSelector('.oxd-autocomplete-dropdown');
  36  | 
  37  |         const employeeOption = this.page
  38  |             .locator('.oxd-autocomplete-option')
  39  |             .filter({ hasText: employee })
  40  |             .first();
  41  | 
  42  |         await employeeOption.waitFor({ state: 'visible' });
  43  |         await employeeOption.click();
  44  | 
  45  |         const selectedEmployee = await employeeInput.inputValue();
  46  |         console.log('Selected Employee:', selectedEmployee);
  47  | 
  48  |         await this.page.locator(
  49  |             '//label[text()="Status"]/ancestor::div[contains(@class,"oxd-input-group")]//div[@class="oxd-select-text-input"]'
  50  |             ).click();
  51  | 
  52  |         await this.page.waitForSelector('.oxd-select-dropdown');
  53  | 
  54  |         await this.page.locator('.oxd-select-option span')
  55  |             .filter({ hasText: 'Enabled' })
  56  |             .click();
  57  | 
  58  |         await this.page.locator(adminLocators.username).fill(username);
  59  |         await this.page.locator(adminLocators.password).fill(password);
  60  |         await this.page.locator(adminLocators.confirmPassword).fill(password);
  61  |         await this.page.locator(adminLocators.saveButton).click();
  62  | 
  63  |     }
  64  | 
  65  |     async searchUser(username) {
  66  | 
> 67  |         await this.page.fill(
      |                         ^ Error: page.fill: Test timeout of 30000ms exceeded.
  68  |             adminLocators.searchUsername,
  69  |             username
  70  |         );
  71  | 
  72  |         await this.page.click(
  73  |             adminLocators.searchButton
  74  |         );
  75  | 
  76  |     }
  77  | 
  78  |     async isUserDisplayed() {
  79  | 
  80  |         await this.page.waitForSelector(
  81  |             adminLocators.userTable
  82  |         );
  83  | 
  84  |         return await this.page
  85  |             .locator(adminLocators.userTable)
  86  |             .isVisible();
  87  | 
  88  |     }
  89  | 
  90  |     async deleteUser(username) {
  91  | 
  92  |     await this.searchUser(username);
  93  | 
  94  |     const row = this.page.locator('.oxd-table-row')
  95  |         .filter({ hasText: username });
  96  | 
  97  |     await row.locator('button:has(i.bi-trash)').click();
  98  | 
  99  |     await this.page.getByRole('button', {
  100 |         name: 'Yes, Delete'
  101 |     }).click();
  102 | 
  103 |     }
  104 | 
  105 |     async getSuccessMessage() {
  106 | 
  107 |         await this.page.waitForSelector(
  108 |             adminLocators.successToast
  109 |         );
  110 | 
  111 |         return await this.page
  112 |             .locator(adminLocators.successToast)
  113 |             .textContent();
  114 | 
  115 |     }
  116 | 
  117 | }
  118 | 
  119 | module.exports = AdminPage;
```