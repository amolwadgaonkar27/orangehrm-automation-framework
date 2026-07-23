# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> OrangeHRM Login - TC001 & TC002 >> TC004 - Login with Blank Credentials
- Location: tests/login.spec.js:33:3

# Error details

```
TypeError: loginPage.getRequiredMessage is not a function
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [ref=e23]
            - generic [ref=e24]: Required
          - generic [ref=e26]:
            - generic [ref=e27]:
              - generic [ref=e28]: 
              - generic [ref=e29]: Password
            - textbox "Password" [ref=e31]
            - generic [ref=e32]: Required
          - button "Login" [active] [ref=e34] [cursor=pointer]
          - paragraph [ref=e36] [cursor=pointer]: Forgot your password?
      - generic [ref=e37]:
        - generic [ref=e38]:
          - link [ref=e39] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e42] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e45] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e48] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e51]:
          - paragraph [ref=e52]: OrangeHRM OS 5.9
          - paragraph [ref=e53]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e54] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e56]
```

# Test source

```ts
  1  | const { test, expect } = require('../fixtures/baseFixture');
  2  | const { loadTestData } = require('../utilities/testDataLoader');
  3  | 
  4  | const data = loadTestData('loginTestData.json');
  5  | 
  6  | test.describe('OrangeHRM Login - TC001 & TC002', () => {
  7  | 
  8  |   test('TC001 - Valid Login', async ({ loginPage }) => {
  9  |     await loginPage.goto();
  10 |     await loginPage.login(data.TC001.username, data.TC001.password);
  11 |     await expect(await loginPage.isDashboardVisible()).toBeTruthy();
  12 |   });
  13 | 
  14 |   test('TC002 - Invalid Password', async ({ loginPage }) => {
  15 |     await loginPage.goto();
  16 |     await loginPage.login(data.TC002.username, data.TC002.password);
  17 |     const errorMessage = await loginPage.getErrorMessage();
  18 |     expect(errorMessage).toContain('Invalid credentials');
  19 |   });
  20 | 
  21 |   test('TC003 - Login with Invalid Username', async ({ loginPage }) => {
  22 | 
  23 |     await loginPage.goto();
  24 |     await loginPage.login(
  25 |       data.TC003.username,
  26 |       data.TC003.password
  27 |     );
  28 |     const error = await loginPage.getErrorMessage();
  29 |     expect(error).toContain('Invalid credentials');
  30 | 
  31 | });
  32 | 
  33 |   test('TC004 - Login with Blank Credentials', async ({ loginPage }) => {
  34 | 
  35 |     await loginPage.goto();
  36 |     await loginPage.login(
  37 |       data.TC004.username,
  38 |       data.TC004.password
  39 |     );
> 40 |     const message = await loginPage.getRequiredMessage();
     |                                     ^ TypeError: loginPage.getRequiredMessage is not a function
  41 |     expect(message).toContain('Required');
  42 | 
  43 | });
  44 | });
```