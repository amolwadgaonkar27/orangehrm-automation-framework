# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leave.spec.js >> Leave Module >> TC010 - Apply Leave
- Location: tests/leave.spec.js:38:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('span:has-text("CAN - Vacation")')

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
          - heading "Leave" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: Tara Barker
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - link "Apply" [ref=e133]:
              - /url: "#"
          - listitem [ref=e134] [cursor=pointer]:
            - link "My Leave" [ref=e135]:
              - /url: "#"
          - listitem [ref=e136] [cursor=pointer]:
            - generic [ref=e137]:
              - text: Entitlements
              - generic [ref=e138]: 
          - listitem [ref=e139] [cursor=pointer]:
            - generic [ref=e140]:
              - text: Reports
              - generic [ref=e141]: 
          - listitem [ref=e142] [cursor=pointer]:
            - generic [ref=e143]:
              - text: Configure
              - generic [ref=e144]: 
          - listitem [ref=e145] [cursor=pointer]:
            - link "Leave List" [ref=e146]:
              - /url: "#"
          - listitem [ref=e147] [cursor=pointer]:
            - link "Assign Leave" [ref=e148]:
              - /url: "#"
          - button "" [ref=e150] [cursor=pointer]:
            - generic [ref=e151]: 
  - generic [ref=e152]:
    - generic [ref=e155]:
      - heading "Apply Leave" [level=6] [ref=e156]
      - separator [ref=e157]
      - generic [ref=e158]:
        - generic [ref=e160]:
          - generic [ref=e162]:
            - generic [ref=e164]: Leave Type*
            - generic [ref=e166]:
              - generic [ref=e167] [cursor=pointer]:
                - generic [active] [ref=e168]: "-- Select --"
                - generic [ref=e170]: 
              - listbox [ref=e171]:
                - option "-- Select --" [ref=e172] [cursor=pointer]
                - option "CAN - Paid Time Off" [ref=e173] [cursor=pointer]:
                  - generic [ref=e174]: CAN - Paid Time Off
          - generic [ref=e176]:
            - generic [ref=e178]: Leave Balance
            - paragraph [ref=e180]: 0.00 Day(s)
        - generic [ref=e182]:
          - generic [ref=e184]:
            - generic [ref=e186]: From Date*
            - generic [ref=e189]:
              - textbox "yyyy-dd-mm" [ref=e190]
              - generic [ref=e191] [cursor=pointer]: 
          - generic [ref=e193]:
            - generic [ref=e195]: To Date*
            - generic [ref=e198]:
              - textbox "yyyy-dd-mm" [ref=e199]
              - generic [ref=e200] [cursor=pointer]: 
        - generic [ref=e204]:
          - generic [ref=e206]: Comments
          - textbox [ref=e208]
        - separator [ref=e209]
        - generic [ref=e210]:
          - paragraph [ref=e211]: "* Required"
          - button "Apply" [ref=e212] [cursor=pointer]
    - generic [ref=e213]:
      - paragraph [ref=e214]: OrangeHRM OS 5.9
      - paragraph [ref=e215]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e216] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | const leaveLocators = require('../locators/leaveLocators');
  2  | 
  3  | class LeavePage {
  4  | 
  5  |     constructor(page) {
  6  |         this.page = page;
  7  |     }
  8  | 
  9  |     async openLeave() {
  10 |         await this.page.click(leaveLocators.leaveMenu);
  11 |     }
  12 | 
  13 |     async searchLeave(fromDate, toDate) {
  14 |         await this.page.fill(
  15 |             leaveLocators.fromDate,
  16 |             fromDate
  17 |         );
  18 | 
  19 |         await this.page.fill(
  20 |             leaveLocators.toDate,
  21 |             toDate
  22 |         );
  23 | 
  24 |         await this.page.click(
  25 |             leaveLocators.searchButton
  26 |         );
  27 |     }
  28 | 
  29 |     async openApplyLeave() {
  30 |         await this.page.click(
  31 |             leaveLocators.applyLink
  32 |         );
  33 |     }
  34 | 
  35 |     async applyLeave(type, fromDate, toDate) {
  36 |         await this.page.click(leaveLocators.leaveTypeDropdown);
> 37 |         await this.page.click(`span:has-text("${type}")`);
     |                         ^ Error: page.click: Test timeout of 60000ms exceeded.
  38 | 
  39 |         await this.page.locator(leaveLocators.applyFromDate).clear();
  40 |         await this.page.fill(leaveLocators.applyFromDate, fromDate);
  41 | 
  42 |         await this.page.locator(leaveLocators.applyToDate).clear();
  43 |         await this.page.fill(leaveLocators.applyToDate, toDate);
  44 | 
  45 |         await this.page.click(leaveLocators.applyButton);
  46 | }
  47 | 
  48 |     async getSuccessMessage() {
  49 |         await this.page.waitForSelector(
  50 |             leaveLocators.successToast
  51 |         );
  52 | 
  53 |         return await this.page
  54 |             .locator(leaveLocators.successToast)
  55 |             .textContent();
  56 |     }
  57 | 
  58 | }
  59 | 
  60 | module.exports = LeavePage;
```