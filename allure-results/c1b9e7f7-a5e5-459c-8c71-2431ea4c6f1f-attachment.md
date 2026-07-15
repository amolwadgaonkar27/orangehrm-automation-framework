# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim.spec.js >> PIM Module >> TC008 - Search Invalid Employee
- Location: tests/pim.spec.js:62:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('span.oxd-text--span').filter({ hasText: 'No Records Found' })
Expected: "No Records Found"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('span.oxd-text--span').filter({ hasText: 'No Records Found' })

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "PIM" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: manda user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Employee Information" [level=5]
- button ""
- separator
- text: Employee Name
- textbox "Type for hints...": Han Cock
- text: Employee Id
- textbox
- text: Employment Status -- Select --  Include Current Employees Only  Supervisor Name
- textbox "Type for hints..."
- text: Job Title -- Select --  Sub Unit -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- table
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1  | const { test, expect } = require('../fixtures/baseFixture');
  2  | const { loadTestData } = require('../utilities/testDataLoader');
  3  | const loginData = loadTestData('login_test_data.json');
  4  | const pimData = loadTestData('pimTestData.json');
  5  | 
  6  | test.describe('PIM Module', () => {
  7  | 
  8  |     test.beforeEach(async ({ loginPage, pimPage }) => {
  9  | 
  10 |         await loginPage.goto();
  11 |         await loginPage.login(
  12 |             loginData.TC001.username,
  13 |             loginData.TC001.password
  14 |         );
  15 | 
  16 |         await pimPage.openPIM();
  17 | 
  18 |     });
  19 | 
  20 |    test('TC005 - Add Employee', async ({ pimPage }) => {
  21 | 
  22 |     await pimPage.clickAddEmployee();
  23 |     const employeeId = (Math.floor(Math.random() * 9000) + 1000).toString();
  24 |     await pimPage.enterEmployeeId(employeeId);
  25 |     await pimPage.addEmployee(
  26 |         pimData.TC005.firstName,
  27 |         pimData.TC005.lastName
  28 |     );
  29 | 
  30 |     const success = await pimPage.getSuccessMessage();
  31 |     expect(success).toContain('Successfully Saved');
  32 | });
  33 | 
  34 | test('TC006 - Add Employee', async ({ pimPage }) => {
  35 | 
  36 |     await pimPage.clickAddEmployee();
  37 |     const employeeId = (Math.floor(Math.random() * 9000) + 1000).toString();
  38 |     await pimPage.enterEmployeeId(employeeId);
  39 |     await pimPage.addEmployee(
  40 |         pimData.TC006.firstName,
  41 |         pimData.TC006.lastName
  42 |     );
  43 | 
  44 |     const success = await pimPage.getSuccessMessage();
  45 |     expect(success).toContain('Successfully Saved');
  46 | });
  47 | 
  48 | test('TC007 - Search Employee', async ({ pimPage }) => {
  49 | 
  50 |     await pimPage.searchEmployee(
  51 |         pimData.TC007.employeeName
  52 |     );
  53 | 
  54 |     const found = await pimPage.isEmployeeDisplayed(
  55 |     pimData.TC007.employeeName
  56 | );
  57 | 
  58 | expect(found).toBeTruthy();
  59 | 
  60 | });
  61 | 
  62 | test('TC008 - Search Invalid Employee', async ({ pimPage, page }) => {
  63 | 
  64 |     await pimPage.searchEmployee(
  65 |         pimData.TC008.employeeName
  66 |     );
  67 | 
  68 |    await expect(
  69 |     pimPage.getNoRecordsMessage()
> 70 |     ).toHaveText('No Records Found');
     |       ^ Error: expect(locator).toHaveText(expected) failed
  71 | 
  72 | });
  73 | 
  74 | });
```