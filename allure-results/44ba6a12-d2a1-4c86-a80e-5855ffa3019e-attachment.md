# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leave.spec.js >> Leave Module >> TC010 - Apply Leave
- Location: tests/leave.spec.js:33:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForSelector: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('.oxd-toast-content') to be visible

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
            - generic [ref=e167] [cursor=pointer]:
              - generic [ref=e168]: CAN - Vacation
              - generic [ref=e170]: 
          - generic [ref=e172]:
            - generic [ref=e173]:
              - generic [ref=e174]: Leave Balance
              - generic [ref=e175] [cursor=pointer]: 
            - paragraph [ref=e177]: 66.00 Day(s)
        - generic [ref=e179]:
          - generic [ref=e181]:
            - generic [ref=e183]: From Date*
            - generic [ref=e186]:
              - textbox "yyyy-dd-mm" [ref=e187]: 2026-08-12
              - generic [ref=e188] [cursor=pointer]: 
          - generic [ref=e190]:
            - generic [ref=e192]: To Date*
            - generic [ref=e195]:
              - textbox "yyyy-dd-mm" [ref=e196]: 2026-08-122026-08-14
              - generic [ref=e197] [cursor=pointer]: 
            - generic [ref=e198]: Should be a valid date in yyyy-dd-mm format
        - generic [ref=e202]:
          - generic [ref=e204]: Comments
          - textbox [ref=e206]
        - separator [ref=e207]
        - generic [ref=e208]:
          - paragraph [ref=e209]: "* Required"
          - button "Apply" [active] [ref=e210] [cursor=pointer]
    - generic [ref=e211]:
      - paragraph [ref=e212]: OrangeHRM OS 5.9
      - paragraph [ref=e213]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e214] [cursor=pointer]:
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
  29 |     async isLeaveDisplayed() {
  30 |         await this.page.waitForSelector(
  31 |             leaveLocators.leaveTable
  32 |         );
  33 | 
  34 |         return await this.page
  35 |             .locator(leaveLocators.leaveTable)
  36 |             .isVisible();
  37 |     }
  38 | 
  39 |     async openApplyLeave() {
  40 |         await this.page.click(
  41 |             leaveLocators.applyLink
  42 |         );
  43 |     }
  44 | 
  45 |     async applyLeave(type, fromDate, toDate) {
  46 |         await this.page.click(
  47 |             leaveLocators.leaveTypeDropdown
  48 |         );
  49 | 
  50 |         await this.page.click(
  51 |             `span:has-text("${type}")`
  52 |         );
  53 | 
  54 |         await this.page.fill(
  55 |             leaveLocators.applyFromDate,
  56 |             fromDate
  57 |         );
  58 | 
  59 |         await this.page.fill(
  60 |             leaveLocators.applyToDate,
  61 |             toDate
  62 |         );
  63 | 
  64 |         await this.page.click(
  65 |             leaveLocators.applyButton
  66 |         );
  67 |     }
  68 | 
  69 |     async getSuccessMessage() {
> 70 |         await this.page.waitForSelector(
     |                         ^ Error: page.waitForSelector: Test timeout of 60000ms exceeded.
  71 |             leaveLocators.successToast
  72 |         );
  73 | 
  74 |         return await this.page
  75 |             .locator(leaveLocators.successToast)
  76 |             .textContent();
  77 |     }
  78 | 
  79 | }
  80 | 
  81 | module.exports = LeavePage;
```