# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim.spec.js >> PIM Module >> TC008 - Search Invalid Employee
- Location: tests/pim.spec.js:62:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('No Records Found')
Expected: visible
Error: strict mode violation: getByText('No Records Found') resolved to 2 elements:
    1) <span data-v-7b563373="" data-v-5a621acd="" class="oxd-text oxd-text--span">No Records Found</span> aka locator('span').filter({ hasText: 'No Records Found' })
    2) <p data-v-7b563373="" data-v-35c8fe09="" class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text">No Records Found</p> aka locator('#oxd-toaster_1').getByText('No Records Found')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('No Records Found')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic:
      - complementary [ref=e4]:
        - navigation "Sidepanel" [ref=e5]:
          - generic [ref=e6]:
            - link "client brand banner" [ref=e7] [cursor=pointer]:
              - /url: https://www.orangehrm.com/
              - img "client brand banner" [ref=e9]
            - text: 
          - generic [ref=e10]:
            - generic [ref=e11]:
              - generic [ref=e12]:
                - textbox "Search" [ref=e15]
                - button "" [ref=e16] [cursor=pointer]:
                  - generic [ref=e17]: 
              - separator [ref=e18]
            - list [ref=e19]:
              - listitem [ref=e20]:
                - link "Admin" [ref=e21] [cursor=pointer]:
                  - /url: /web/index.php/admin/viewAdminModule
                  - generic [ref=e24]: Admin
              - listitem [ref=e25]:
                - link "PIM" [ref=e26] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewPimModule
                  - generic [ref=e40]: PIM
              - listitem [ref=e41]:
                - link "Leave" [ref=e42] [cursor=pointer]:
                  - /url: /web/index.php/leave/viewLeaveModule
                  - generic [ref=e45]: Leave
              - listitem [ref=e46]:
                - link "Time" [ref=e47] [cursor=pointer]:
                  - /url: /web/index.php/time/viewTimeModule
                  - generic [ref=e53]: Time
              - listitem [ref=e54]:
                - link "Recruitment" [ref=e55] [cursor=pointer]:
                  - /url: /web/index.php/recruitment/viewRecruitmentModule
                  - generic [ref=e61]: Recruitment
              - listitem [ref=e62]:
                - link "My Info" [ref=e63] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewMyDetails
                  - generic [ref=e69]: My Info
              - listitem [ref=e70]:
                - link "Performance" [ref=e71] [cursor=pointer]:
                  - /url: /web/index.php/performance/viewPerformanceModule
                  - generic [ref=e79]: Performance
              - listitem [ref=e80]:
                - link "Dashboard" [ref=e81] [cursor=pointer]:
                  - /url: /web/index.php/dashboard/index
                  - generic [ref=e84]: Dashboard
              - listitem [ref=e85]:
                - link "Directory" [ref=e86] [cursor=pointer]:
                  - /url: /web/index.php/directory/viewDirectory
                  - generic [ref=e89]: Directory
              - listitem [ref=e90]:
                - link "Maintenance" [ref=e91] [cursor=pointer]:
                  - /url: /web/index.php/maintenance/viewMaintenanceModule
                  - generic [ref=e95]: Maintenance
              - listitem [ref=e96]:
                - link "Claim" [ref=e97] [cursor=pointer]:
                  - /url: /web/index.php/claim/viewClaimModule
                  - img [ref=e100]
                  - generic [ref=e104]: Claim
              - listitem [ref=e105]:
                - link "Buzz" [ref=e106] [cursor=pointer]:
                  - /url: /web/index.php/buzz/viewBuzz
                  - generic [ref=e109]: Buzz
      - banner [ref=e110]:
        - generic [ref=e111]:
          - generic [ref=e112]:
            - text: 
            - heading "PIM" [level=6] [ref=e114]
          - link "Upgrade" [ref=e116]:
            - /url: https://orangehrm.com/open-source/upgrade-to-advanced
            - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
          - list [ref=e123]:
            - listitem [ref=e124]:
              - generic [ref=e125] [cursor=pointer]:
                - img "profile picture" [ref=e126]
                - paragraph [ref=e127]: manda user
                - generic [ref=e128]: 
        - navigation "Topbar Menu" [ref=e130]:
          - list [ref=e131]:
            - listitem [ref=e132] [cursor=pointer]:
              - generic [ref=e133]:
                - text: Configuration
                - generic [ref=e134]: 
            - listitem [ref=e135] [cursor=pointer]:
              - link "Employee List" [ref=e136]:
                - /url: "#"
            - listitem [ref=e137] [cursor=pointer]:
              - link "Add Employee" [ref=e138]:
                - /url: "#"
            - listitem [ref=e139] [cursor=pointer]:
              - link "Reports" [ref=e140]:
                - /url: "#"
            - button "" [ref=e142] [cursor=pointer]:
              - generic [ref=e143]: 
    - generic [ref=e144]:
      - generic [ref=e146]:
        - generic [ref=e147]:
          - generic [ref=e148]:
            - heading "Employee Information" [level=5] [ref=e150]
            - button "" [ref=e153] [cursor=pointer]:
              - generic [ref=e154]: 
          - separator [ref=e155]
          - generic [ref=e157]:
            - generic [ref=e159]:
              - generic [ref=e161]:
                - generic [ref=e163]: Employee Name
                - textbox "Type for hints..." [ref=e167]: Invalid Employee
              - generic [ref=e169]:
                - generic [ref=e171]: Employee Id
                - textbox [ref=e173]
              - generic [ref=e175]:
                - generic [ref=e177]: Employment Status
                - generic [ref=e180] [cursor=pointer]:
                  - generic [ref=e181]: "-- Select --"
                  - generic [ref=e183]: 
              - generic [ref=e185]:
                - generic [ref=e187]: Include
                - generic [ref=e190] [cursor=pointer]:
                  - generic [ref=e191]: Current Employees Only
                  - generic [ref=e193]: 
              - generic [ref=e195]:
                - generic [ref=e197]: Supervisor Name
                - textbox "Type for hints..." [ref=e201]
              - generic [ref=e203]:
                - generic [ref=e205]: Job Title
                - generic [ref=e208] [cursor=pointer]:
                  - generic [ref=e209]: "-- Select --"
                  - generic [ref=e211]: 
              - generic [ref=e213]:
                - generic [ref=e215]: Sub Unit
                - generic [ref=e218] [cursor=pointer]:
                  - generic [ref=e219]: "-- Select --"
                  - generic [ref=e221]: 
            - separator [ref=e222]
            - generic [ref=e223]:
              - button "Reset" [ref=e224] [cursor=pointer]
              - button "Search" [active] [ref=e225] [cursor=pointer]
        - generic [ref=e226]:
          - button " Add" [ref=e228] [cursor=pointer]:
            - generic [ref=e229]: 
            - text: Add
          - generic [ref=e230]:
            - separator [ref=e231]
            - generic [ref=e233]: No Records Found
          - table [ref=e235]:
            - rowgroup [ref=e236]:
              - row " Id  First (& Middle) Name  Last Name  Job Title  Employment Status  Sub Unit  Supervisor  Actions" [ref=e237]:
                - columnheader "" [ref=e238]:
                  - generic [ref=e240] [cursor=pointer]:
                    - checkbox "" [ref=e241]
                    - generic [ref=e243]: 
                - columnheader "Id " [ref=e244]:
                  - text: Id
                  - generic [ref=e245]:
                    - generic [ref=e246] [cursor=pointer]: 
                    - text:  
                - columnheader "First (& Middle) Name " [ref=e247]:
                  - text: First (& Middle) Name
                  - generic [ref=e248]:
                    - generic [ref=e249] [cursor=pointer]: 
                    - text:  
                - columnheader "Last Name " [ref=e250]:
                  - text: Last Name
                  - generic [ref=e251]:
                    - generic [ref=e252] [cursor=pointer]: 
                    - text:  
                - columnheader "Job Title " [ref=e253]:
                  - text: Job Title
                  - generic [ref=e254]:
                    - generic [ref=e255] [cursor=pointer]: 
                    - text:  
                - columnheader "Employment Status " [ref=e256]:
                  - text: Employment Status
                  - generic [ref=e257]:
                    - generic [ref=e258] [cursor=pointer]: 
                    - text:  
                - columnheader "Sub Unit " [ref=e259]:
                  - text: Sub Unit
                  - generic [ref=e260]:
                    - generic [ref=e261] [cursor=pointer]: 
                    - text:  
                - columnheader "Supervisor " [ref=e262]:
                  - text: Supervisor
                  - generic [ref=e263]:
                    - generic [ref=e264] [cursor=pointer]: 
                    - text:  
                - columnheader "Actions" [ref=e265]
            - rowgroup
      - generic [ref=e267]:
        - paragraph [ref=e268]: OrangeHRM OS 5.9
        - paragraph [ref=e269]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=e270] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=e272] [cursor=pointer]:
    - generic [ref=e273]:
      - generic [ref=e276]: 
      - generic [ref=e277]:
        - paragraph [ref=e278]: Info
        - paragraph [ref=e279]: No Records Found
    - button "×" [ref=e281]
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
  68 |     await expect(
  69 |         page.getByText('No Records Found')
> 70 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  71 | 
  72 | });
  73 | 
  74 | });
```