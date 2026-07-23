# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.js >> Logout Module >> TC018 - Logout Application
- Location: tests/logout.spec.js:18:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForSelector: Target page, context or browser has been closed
```

# Test source

```ts
  1  | const logoutLocators = require('../locators/logoutLocators');
  2  | 
  3  | class LogoutPage {
  4  | 
  5  |     constructor(page) {
  6  |         this.page = page;
  7  |     }
  8  | 
  9  |     async logout() {
  10 | 
  11 |         await this.page.locator(
  12 |             logoutLocators.userDropdown
  13 |         ).click();
  14 | 
  15 |         await this.page.locator(
  16 |             logoutLocators.logoutButton
  17 |         ).click();
  18 | 
  19 |     }
  20 | 
  21 |     async isLoginPageDisplayed() {
  22 | 
> 23 |         await this.page.waitForSelector(
     |                         ^ Error: page.waitForSelector: Target page, context or browser has been closed
  24 |             logoutLocators.loginPage
  25 |         );
  26 | 
  27 |         return await this.page
  28 |             .locator(logoutLocators.loginPage)
  29 |             .isVisible();
  30 | 
  31 |     }
  32 | 
  33 | }
  34 | 
  35 | module.exports = LogoutPage;
```