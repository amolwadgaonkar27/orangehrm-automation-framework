# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: time.spec.js >> Time Module >> TC011 - Create Timesheet
- Location: tests/time.spec.js:22:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('.oxd-select-option').filter({ hasText: 'Bug Fixes' }).first()

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
          - heading "Time" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: UGLY Dongare
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - generic [ref=e133]:
              - text: Timesheets
              - generic [ref=e134]: 
          - listitem [ref=e135] [cursor=pointer]:
            - generic [ref=e136]:
              - text: Attendance
              - generic [ref=e137]: 
          - listitem [ref=e138] [cursor=pointer]:
            - generic [ref=e139]:
              - text: Reports
              - generic [ref=e140]: 
          - listitem [ref=e141] [cursor=pointer]:
            - generic [ref=e142]:
              - text: Project Info
              - generic [ref=e143]: 
          - button "" [ref=e145] [cursor=pointer]:
            - generic [ref=e146]: 
  - generic [ref=e147]:
    - generic [ref=e150]:
      - generic [ref=e151]:
        - heading "Edit Timesheet" [level=6] [ref=e153]
        - generic [ref=e154]:
          - paragraph [ref=e155]: Timesheet Period
          - heading "2026-13-07 - 2026-19-07" [level=6] [ref=e156]
      - table [ref=e158]:
        - rowgroup [ref=e159]:
          - row "Project Activity 13 Mon 14 Tue 15 Wed 16 Thu 17 Fri 18 Sat 19 Sun" [ref=e160]:
            - columnheader "Project" [ref=e161]
            - columnheader "Activity" [ref=e162]
            - columnheader "13 Mon" [ref=e163]:
              - generic [ref=e164]: "13"
              - text: Mon
            - columnheader "14 Tue" [ref=e165]:
              - generic [ref=e166]: "14"
              - text: Tue
            - columnheader "15 Wed" [ref=e167]:
              - generic [ref=e168]: "15"
              - text: Wed
            - columnheader "16 Thu" [ref=e169]:
              - generic [ref=e170]: "16"
              - text: Thu
            - columnheader "17 Fri" [ref=e171]:
              - generic [ref=e172]: "17"
              - text: Fri
            - columnheader "18 Sat" [ref=e173]:
              - generic [ref=e174]: "18"
              - text: Sat
            - columnheader "19 Sun" [ref=e175]:
              - generic [ref=e176]: "19"
              - text: Sun
        - rowgroup [ref=e177]:
          - row "-- Select --  " [ref=e178]:
            - cell [ref=e179]:
              - textbox "Type for hints..." [ref=e184]
            - cell "-- Select -- " [ref=e185]:
              - generic [ref=e189] [cursor=pointer]:
                - generic [ref=e190]: "-- Select --"
                - generic [ref=e192]: 
            - cell [ref=e193]:
              - text: 
              - textbox [ref=e196]
            - cell [ref=e197]:
              - text: 
              - textbox [ref=e200]
            - cell [ref=e201]:
              - text: 
              - textbox [ref=e204]
            - cell [ref=e205]:
              - text: 
              - textbox [ref=e208]
            - cell [ref=e209]:
              - text: 
              - textbox [ref=e212]
            - cell [ref=e213]:
              - text: 
              - textbox [ref=e216]
            - cell [ref=e217]:
              - text: 
              - textbox [ref=e220]
            - cell "" [ref=e221]:
              - button "" [ref=e222] [cursor=pointer]:
                - generic [ref=e223]: 
          - row " Add Row" [ref=e224]:
            - cell " Add Row" [ref=e225]:
              - button "" [ref=e226] [cursor=pointer]:
                - generic [ref=e227]: 
              - paragraph [ref=e228]: Add Row
      - generic [ref=e230]:
        - button "Cancel" [ref=e231] [cursor=pointer]
        - button "Reset" [ref=e232] [cursor=pointer]
        - button "Save" [ref=e233] [cursor=pointer]
    - generic [ref=e234]:
      - paragraph [ref=e235]: OrangeHRM OS 5.9
      - paragraph [ref=e236]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e237] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | const timeLocators = require('../locators/timeLocators');
  2  | 
  3  | class TimePage {
  4  | 
  5  |     constructor(page) {
  6  |         this.page = page;
  7  |     }
  8  | 
  9  |     async openTime() {
  10 |         await this.page.click(timeLocators.timeMenu);
  11 | 
  12 |     }
  13 | 
  14 |     async openMyTimesheet() {
  15 |         await this.page.click(timeLocators.timesheetsMenu);
  16 |         await this.page.waitForSelector(
  17 |             timeLocators.myTimesheets
  18 |         );
  19 | 
  20 |         await this.page.click(
  21 |             timeLocators.myTimesheets
  22 |         );
  23 | 
  24 |     }
  25 | 
  26 |     async createTimesheet(project, activity, hours) {
  27 |         await this.page.getByRole('button', { name: 'Edit' }).waitFor();
  28 |         await this.page.getByRole('button', { name: 'Edit' }).click();
  29 |         await this.page
  30 |         .locator('.oxd-select-option')
  31 |         .filter({ hasText: activity })
  32 |         .first()
> 33 |         .click();
     |          ^ Error: locator.click: Test timeout of 60000ms exceeded.
  34 | 
  35 |         await this.page.fill(timeLocators.projectInput, project);
  36 |         await this.page.waitForSelector('.oxd-autocomplete-dropdown');
  37 |         await this.page.locator('.oxd-autocomplete-option').first().click();
  38 |         await expect(
  39 |               this.page.locator(timeLocators.projectInput)
  40 |               ).toHaveValue(project);
  41 |         const value = await this.page.locator(timeLocators.projectInput).inputValue();
  42 |             console.log("Selected Project:", value);
  43 |         await this.page.locator(timeLocators.activityDropdown).click();
  44 |         const options = await this.page.locator('.oxd-select-option').allTextContents();
  45 |             console.log(options);
  46 |         await this.page.waitForSelector('.oxd-select-dropdown');
  47 |         await this.page.locator('.oxd-select-option span', {
  48 |             hasText: activity
  49 |                 }).click();
  50 |         const mondayInput = this.page.locator(timeLocators.mondayCell).first();
  51 |         await mondayInput.waitFor({ state: 'visible' });
  52 |         await mondayInput.click();
  53 |         await mondayInput.fill(hours);
  54 |         await this.page.click(timeLocators.saveButton);
  55 |     }
  56 | 
  57 |     async getSuccessMessage() {
  58 |         return await this.page
  59 |             .locator(timeLocators.successToast)
  60 |             .textContent();
  61 | 
  62 |     }
  63 | 
  64 | }
  65 | 
  66 | module.exports = TimePage;
```