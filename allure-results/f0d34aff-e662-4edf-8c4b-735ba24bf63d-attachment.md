# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin.spec.js >> Admin Module >> TC014 - Create ESS User
- Location: tests/admin.spec.js:22:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('.oxd-select-option').filter({ hasText: 'Enabled' })

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
              - paragraph [ref=e127]: manda user
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
            - generic [ref=e168]:
              - generic [ref=e169] [cursor=pointer]:
                - generic [active] [ref=e170]: ESS
                - generic [ref=e172]: 
              - listbox [ref=e173]:
                - option "-- Select --" [ref=e174] [cursor=pointer]
                - option "Admin" [ref=e175] [cursor=pointer]:
                  - generic [ref=e176]: Admin
                - option "ESS" [ref=e177]:
                  - generic [ref=e178]: ESS
          - generic [ref=e180]:
            - generic [ref=e182]: Employee Name*
            - textbox "Type for hints..." [ref=e186]: John Doe
            - generic [ref=e187]: Invalid
          - generic [ref=e189]:
            - generic [ref=e191]: Status*
            - generic [ref=e194] [cursor=pointer]:
              - generic [ref=e195]: "-- Select --"
              - generic [ref=e197]: 
          - generic [ref=e199]:
            - generic [ref=e201]: Username*
            - textbox [ref=e203]
        - generic [ref=e205]:
          - generic [ref=e206]:
            - generic [ref=e207]:
              - generic [ref=e209]: Password*
              - textbox [ref=e211]
            - paragraph [ref=e212]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
          - generic [ref=e214]:
            - generic [ref=e216]: Confirm Password*
            - textbox [ref=e218]
        - separator [ref=e219]
        - generic [ref=e220]:
          - paragraph [ref=e221]: "* Required"
          - button "Cancel" [ref=e222] [cursor=pointer]
          - button "Save" [ref=e223] [cursor=pointer]
    - generic [ref=e224]:
      - paragraph [ref=e225]: OrangeHRM OS 5.9
      - paragraph [ref=e226]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e227] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | const adminLocators = require('../locators/adminLocators');
  2  | 
  3  | class AdminPage {
  4  | 
  5  |     constructor(page) {
  6  |         this.page = page;
  7  |     }
  8  | 
  9  |     async openAdmin() {
  10 |         await this.page.click(
  11 |             adminLocators.adminMenu
  12 |         );
  13 | 
  14 |     }
  15 | 
  16 |     async clickAddUser() {
  17 |         await this.page.click(
  18 |             adminLocators.addButton
  19 |         );
  20 | 
  21 |     }
  22 | 
  23 |     async createESSUser(employee, username, password) {
  24 | 
  25 |         await this.page.locator(adminLocators.userRoleDropdown).click();
  26 | 
  27 |         await this.page.locator('.oxd-select-option')
  28 |             .filter({ hasText: 'ESS' })
  29 |             .click();
  30 | 
  31 |         await this.page.locator(adminLocators.employeeName).fill(employee);
  32 |         await this.page.waitForSelector('.oxd-autocomplete-dropdown');
  33 |         await this.page.locator('.oxd-autocomplete-option')
  34 |             .first()
  35 |             .click();
  36 | 
  37 |         await this.page.locator(adminLocators.statusDropdown).click();  
  38 |         await this.page.locator('.oxd-select-option')
  39 |             .filter({ hasText: 'Enabled' })
> 40 |             .click();
     |              ^ Error: locator.click: Test timeout of 60000ms exceeded.
  41 | 
  42 |         await this.page.locator(adminLocators.username).fill(username);
  43 |         await this.page.locator(adminLocators.password).fill(password);
  44 |         await this.page.locator(adminLocators.confirmPassword).fill(password);
  45 |         await this.page.locator(adminLocators.saveButton).click();
  46 | 
  47 | }
  48 | 
  49 | }
  50 | 
  51 | module.exports = AdminPage;
```