# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> OrangeHRM Login - TC001 & TC002 >> TC002 - Invalid Password
- Location: tests/login.spec.js:14:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('input[name="username"]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "Not Found" [level=1] [ref=e2]
  - paragraph [ref=e3]: The requested URL was not found on this server.
```

# Test source

```ts
  1  | const loginLocators = require('../locators/loginLocators');
  2  | 
  3  | class LoginPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |   }
  7  | 
  8  |   async goto() {
  9  |     await this.page.goto('/auth/login');
  10 |   }
  11 | 
  12 |   async login(username, password) {
> 13 |     await this.page.fill(loginLocators.usernameInput, username);
     |                     ^ Error: page.fill: Test timeout of 60000ms exceeded.
  14 |     await this.page.fill(loginLocators.passwordInput, password);
  15 |     await this.page.click(loginLocators.loginButton);
  16 |   }
  17 | 
  18 |   async isDashboardVisible() {
  19 |     await this.page.waitForSelector(loginLocators.dashboardHeader);
  20 |     return this.page.locator(loginLocators.dashboardHeader).isVisible();
  21 |   }
  22 | 
  23 |   async getErrorMessage() {
  24 |     await this.page.waitForSelector(loginLocators.errorMessage);
  25 |     return (await this.page.locator(loginLocators.errorMessage).textContent()).trim();
  26 |   }
  27 | }
  28 | 
  29 | module.exports = LoginPage;
```