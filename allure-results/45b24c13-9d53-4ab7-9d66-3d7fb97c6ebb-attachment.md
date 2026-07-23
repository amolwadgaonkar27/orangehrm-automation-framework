# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin.spec.js >> Admin Module >> TC014 - Create ESS User
- Location: tests/admin.spec.js:22:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.oxd-autocomplete-option').filter({ hasText: 'John  Hopkins' }).first() to be visible

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
          - heading "Admin" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: Teste Cypress
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - generic [ref=e133]:
              - text: User Management
              - generic [ref=e134]: 
          - listitem [ref=e135] [cursor=pointer]:
            - generic [ref=e136]:
              - text: Job
              - generic [ref=e137]: 
          - listitem [ref=e138] [cursor=pointer]:
            - generic [ref=e139]:
              - text: Organization
              - generic [ref=e140]: 
          - listitem [ref=e141] [cursor=pointer]:
            - generic [ref=e142]:
              - text: Qualifications
              - generic [ref=e143]: 
          - listitem [ref=e144] [cursor=pointer]:
            - link "Nationalities" [ref=e145]:
              - /url: "#"
          - listitem [ref=e146] [cursor=pointer]:
            - link "Corporate Branding" [ref=e147]:
              - /url: "#"
          - listitem [ref=e148] [cursor=pointer]:
            - generic [ref=e149]:
              - text: Configuration
              - generic [ref=e150]: 
          - button "" [ref=e152] [cursor=pointer]:
            - generic [ref=e153]: 
  - generic [ref=e154]:
    - generic [ref=e157]:
      - heading "Add User" [level=6] [ref=e158]
      - separator [ref=e159]
      - generic [ref=e160]:
        - generic [ref=e162]:
          - generic [ref=e164]:
            - generic [ref=e166]: User Role*
            - generic [ref=e169] [cursor=pointer]:
              - generic [ref=e170]: ESS
              - generic [ref=e172]: 
          - generic [ref=e174]:
            - generic [ref=e176]: Employee Name*
            - generic [ref=e178]:
              - textbox "Type for hints..." [active] [ref=e180]: John Hopkins
              - listbox [ref=e181]:
                - option "Searching...." [ref=e182] [cursor=pointer]
          - generic [ref=e184]:
            - generic [ref=e186]: Status*
            - generic [ref=e189] [cursor=pointer]:
              - generic [ref=e190]: "-- Select --"
              - generic [ref=e192]: 
          - generic [ref=e194]:
            - generic [ref=e196]: Username*
            - textbox [ref=e198]
        - generic [ref=e200]:
          - generic [ref=e201]:
            - generic [ref=e202]:
              - generic [ref=e204]: Password*
              - textbox [ref=e206]
            - paragraph [ref=e207]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
          - generic [ref=e209]:
            - generic [ref=e211]: Confirm Password*
            - textbox [ref=e213]
        - separator [ref=e214]
        - generic [ref=e215]:
          - paragraph [ref=e216]: "* Required"
          - button "Cancel" [ref=e217] [cursor=pointer]
          - button "Save" [ref=e218] [cursor=pointer]
    - generic [ref=e219]:
      - paragraph [ref=e220]: OrangeHRM OS 5.9
      - paragraph [ref=e221]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e222] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
> 42  |         await employeeOption.waitFor({ state: 'visible' });
      |                              ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
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
  67  |         await this.page.fill(
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