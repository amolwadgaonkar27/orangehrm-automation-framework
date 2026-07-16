# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leave.spec.js >> Leave Module >> TC009 - Search Leave Records
- Location: tests/leave.spec.js:21:5

# Error details

```
Test timeout of 60000ms exceeded while running "beforeEach" hook.
```

```
Error: page.waitForSelector: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('input[name="username"]') to be visible

```

# Test source

```ts
  1  | const loginLocators = require('../locators/loginLocators');
  2  | 
  3  | class LoginPage {
  4  |     constructor(page) {
  5  |         this.page = page;
  6  |     }
  7  | 
  8  |     async goto() {
  9  |         await this.page.goto(
  10 |             'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  11 |             { waitUntil: 'domcontentloaded' }
  12 |         );
  13 | 
> 14 |         await this.page.waitForSelector(loginLocators.usernameInput);
     |                         ^ Error: page.waitForSelector: Test timeout of 60000ms exceeded.
  15 |     }
  16 | 
  17 |     async login(username, password) {
  18 |         await this.page.fill(loginLocators.usernameInput, username);
  19 |         await this.page.fill(loginLocators.passwordInput, password);
  20 |         await this.page.click(loginLocators.loginButton);
  21 |     }
  22 | 
  23 |     async isDashboardVisible() {
  24 |         await this.page.waitForSelector(loginLocators.dashboardHeader);
  25 |         return await this.page.locator(loginLocators.dashboardHeader).isVisible();
  26 |     }
  27 | 
  28 |     async getErrorMessage() {
  29 |         await this.page.waitForSelector(loginLocators.errorMessage);
  30 |         return (await this.page.locator(loginLocators.errorMessage).textContent()).trim();
  31 |     }
  32 | 
  33 |     async getRequiredMessages() {
  34 |         return await this.page
  35 |             .locator(loginLocators.requiredMessage)
  36 |             .allTextContents();
  37 |     }
  38 | }
  39 | 
  40 | module.exports = LoginPage;
```