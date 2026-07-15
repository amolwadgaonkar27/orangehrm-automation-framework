# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim.spec.js >> PIM Module >> TC008 - Search Invalid Employee
- Location: tests/pim.spec.js:70:1

# Error details

```
Error: locator.textContent: Error: strict mode violation: locator('.oxd-text--span') resolved to 12 elements:
    1) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">Admin</span> aka getByRole('link', { name: 'Admin' })
    2) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">PIM</span> aka getByRole('link', { name: 'PIM' })
    3) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">Leave</span> aka getByRole('link', { name: 'Leave' })
    4) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">Time</span> aka getByRole('link', { name: 'Time' })
    5) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">Recruitment</span> aka getByRole('link', { name: 'Recruitment' })
    6) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">My Info</span> aka getByRole('link', { name: 'My Info' })
    7) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">Performance</span> aka getByRole('link', { name: 'Performance' })
    8) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">Dashboard</span> aka getByRole('link', { name: 'Dashboard' })
    9) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">Directory</span> aka getByRole('link', { name: 'Directory' })
    10) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">Maintenance</span> aka getByRole('link', { name: 'Maintenance' })
    ...

Call log:
  - waiting for locator('.oxd-text--span')

```

# Page snapshot

```yaml
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
              - paragraph [ref=e127]: Test User
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
        - table [ref=e231]
    - generic [ref=e236]:
      - paragraph [ref=e237]: OrangeHRM OS 5.9
      - paragraph [ref=e238]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e239] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
  10 |         await this.page.click(pimLocators.pimMenu);
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
  42 | 
  43 |     await this.page.fill(
  44 |         pimLocators.employeeNameSearch,
  45 |         employeeName
  46 |     );
  47 | 
  48 |     await this.page.click(pimLocators.searchButton);
  49 | 
  50 | }
  51 | 
  52 | async isEmployeeDisplayed(employeeName) {
  53 | 
  54 |     await this.page.waitForSelector(pimLocators.employeeTable);
  55 | 
  56 |     return await this.page
  57 |         .locator(pimLocators.employeeTable)
  58 |         .textContent();
  59 | 
  60 | }
  61 | 
  62 | async getNoRecordsMessage() {
  63 | 
  64 |     await this.page.waitForSelector(pimLocators.noRecordsFound);
  65 | 
  66 |     return await this.page
  67 |         .locator(pimLocators.noRecordsFound)
> 68 |         .textContent();
     |          ^ Error: locator.textContent: Error: strict mode violation: locator('.oxd-text--span') resolved to 12 elements:
  69 | 
  70 | }
  71 | 
  72 |     async enterEmployeeId(employeeId) {
  73 |         await this.page.locator(pimLocators.employeeId).fill(employeeId);
  74 | }
  75 | }
  76 | 
  77 | module.exports = PimPage;
```