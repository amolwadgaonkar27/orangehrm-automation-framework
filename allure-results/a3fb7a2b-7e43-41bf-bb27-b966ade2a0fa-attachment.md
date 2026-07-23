# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leave.spec.js >> Leave Module >> TC010 - Verify Apply Leave Page
- Location: tests/leave.spec.js:33:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=No Leave Types with Leave Balance')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=No Leave Types with Leave Balance')

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
        - generic [ref=e163]:
          - generic [ref=e165]:
            - generic [ref=e167]: Leave Type*
            - generic [ref=e170] [cursor=pointer]:
              - generic [ref=e171]: "-- Select --"
              - generic [ref=e173]: 
          - generic [ref=e175]:
            - generic [ref=e177]: Leave Balance
            - paragraph [ref=e179]: 0.00 Day(s)
        - generic [ref=e181]:
          - generic [ref=e183]:
            - generic [ref=e185]: From Date*
            - generic [ref=e188]:
              - textbox "yyyy-dd-mm" [ref=e189]
              - generic [ref=e190] [cursor=pointer]: 
          - generic [ref=e192]:
            - generic [ref=e194]: To Date*
            - generic [ref=e197]:
              - textbox "yyyy-dd-mm" [ref=e198]
              - generic [ref=e199] [cursor=pointer]: 
        - generic [ref=e203]:
          - generic [ref=e205]: Comments
          - textbox [ref=e207]
        - separator [ref=e208]
        - generic [ref=e209]:
          - paragraph [ref=e210]: "* Required"
          - button "Apply" [ref=e211] [cursor=pointer]
    - generic [ref=e212]:
      - paragraph [ref=e213]: OrangeHRM OS 5.9
      - paragraph [ref=e214]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e215] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | const { test, expect } = require('../fixtures/baseFixture');
  2  | const { loadTestData } = require('../utilities/testDataLoader');
  3  | 
  4  | const data = loadTestData('loginTestData.json');
  5  | const leaveData = loadTestData('leaveTestData.json');
  6  | 
  7  | test.describe('Leave Module', () => {
  8  | 
  9  |     test.beforeEach(async ({ loginPage, leavePage }) => {
  10 | 
  11 |         await loginPage.goto();
  12 |         await loginPage.login(
  13 |             data.TC001.username,
  14 |             data.TC001.password
  15 |         );
  16 | 
  17 |         await leavePage.openLeave();
  18 | 
  19 |     });
  20 | 
  21 |     test('TC009 - Search Leave Records', async ({ leavePage }) => {
  22 | 
  23 |         await leavePage.searchLeave(
  24 |             leaveData.TC009.fromDate,
  25 |             leaveData.TC009.toDate
  26 |         );
  27 | 
  28 |         const displayed = await leavePage.isLeaveDisplayed();
  29 |         expect(displayed).toBeTruthy();
  30 | 
  31 |     });
  32 | 
  33 |     test('TC010 - Verify Apply Leave Page', async ({ leavePage }) => {
  34 | 
  35 |         await leavePage.openApplyLeave();
  36 |         await expect(
  37 |             leavePage.getNoLeaveBalanceMessage()
> 38 |         ).toBeVisible();
     |           ^ Error: expect(locator).toBeVisible() failed
  39 | 
  40 |     });
  41 | });
```