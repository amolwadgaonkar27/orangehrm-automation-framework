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
Error: page.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('a[href*="applyLeave"]')

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
              - paragraph [ref=e127]: ragdjd fafgdjhw
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
    - generic [ref=e154]:
      - generic [ref=e155]:
        - generic [ref=e156]:
          - heading "Leave List" [level=5] [ref=e158]
          - button "" [ref=e161] [cursor=pointer]:
            - generic [ref=e162]: 
        - separator [ref=e163]
        - generic [ref=e165]:
          - generic [ref=e167]:
            - generic [ref=e169]:
              - generic [ref=e171]: From Date
              - generic [ref=e174]:
                - textbox "yyyy-dd-mm" [ref=e175]: 2026-01-01
                - generic [ref=e176] [cursor=pointer]: 
            - generic [ref=e178]:
              - generic [ref=e180]: To Date
              - generic [ref=e183]:
                - textbox "yyyy-dd-mm" [ref=e184]: 2026-31-12
                - generic [ref=e185] [cursor=pointer]: 
            - generic [ref=e187]:
              - generic [ref=e189]: Show Leave with Status*
              - generic [ref=e191]:
                - generic [ref=e192] [cursor=pointer]:
                  - generic [ref=e193]: "-- Select --"
                  - generic [ref=e195]: 
                - generic [ref=e197]:
                  - text: Pending Approval
                  - generic [ref=e198] [cursor=pointer]: 
            - generic [ref=e200]:
              - generic [ref=e202]: Leave Type
              - generic [ref=e205] [cursor=pointer]:
                - generic [ref=e206]: "-- Select --"
                - generic [ref=e208]: 
          - generic [ref=e210]:
            - generic [ref=e212]:
              - generic [ref=e214]: Employee Name
              - textbox "Type for hints..." [ref=e218]
            - generic [ref=e220]:
              - generic [ref=e222]: Sub Unit
              - generic [ref=e225] [cursor=pointer]:
                - generic [ref=e226]: "-- Select --"
                - generic [ref=e228]: 
            - generic [ref=e229]:
              - paragraph [ref=e230]: Include Past Employees
              - checkbox [ref=e233]
          - separator [ref=e235]
          - generic [ref=e236]:
            - paragraph [ref=e237]: "* Required"
            - button "Reset" [ref=e238] [cursor=pointer]
            - button "Search" [ref=e239] [cursor=pointer]
      - generic [ref=e240]:
        - generic [ref=e242]: (2) Records Found
        - table [ref=e244]:
          - rowgroup [ref=e245]:
            - row " Date Employee Name Leave Type Leave Balance (Days) Number of Days Status Comments Actions" [ref=e246]:
              - columnheader "" [ref=e247]:
                - generic [ref=e249] [cursor=pointer]:
                  - checkbox "" [ref=e250]
                  - generic [ref=e252]: 
              - columnheader "Date" [ref=e253]
              - columnheader "Employee Name" [ref=e254]
              - columnheader "Leave Type" [ref=e255]
              - columnheader "Leave Balance (Days)" [ref=e256]
              - columnheader "Number of Days" [ref=e257]
              - columnheader "Status" [ref=e258]
              - columnheader "Comments" [ref=e259]
              - columnheader "Actions" [ref=e260]
          - rowgroup [ref=e261]:
            - row " 2026-03-08 to 2026-18-12 John M Doe CAN - Bereavement 84.00 49.00 Cancelled (33.00), Pending Approval (16.00) " [ref=e263]:
              - cell "" [ref=e264]:
                - generic [ref=e267] [cursor=pointer]:
                  - checkbox "" [ref=e268]
                  - generic [ref=e270]: 
              - cell "2026-03-08 to 2026-18-12" [ref=e271]:
                - generic [ref=e272]: 2026-03-08 to 2026-18-12
              - cell "John M Doe" [ref=e273]:
                - generic [ref=e274]: John M Doe
              - cell "CAN - Bereavement" [ref=e275]:
                - generic [ref=e276]: CAN - Bereavement
              - cell "84.00" [ref=e277]:
                - generic [ref=e278]: "84.00"
              - cell "49.00" [ref=e279]:
                - generic [ref=e280]: "49.00"
              - cell "Cancelled (33.00), Pending Approval (16.00)" [ref=e281]:
                - generic [ref=e282]: Cancelled (33.00), Pending Approval (16.00)
              - cell [ref=e283]
              - cell "" [ref=e284]:
                - listitem [ref=e286]:
                  - button "" [ref=e287] [cursor=pointer]:
                    - generic [ref=e288]: 
            - row " 2026-10-08 to 2026-14-08 ragdjd fafgdjhw CAN - Vacation 195.00 5.00 Pending Approval (5.00) " [ref=e290]:
              - cell "" [ref=e291]:
                - generic [ref=e294] [cursor=pointer]:
                  - checkbox "" [ref=e295]
                  - generic [ref=e297]: 
              - cell "2026-10-08 to 2026-14-08" [ref=e298]:
                - generic [ref=e299]: 2026-10-08 to 2026-14-08
              - cell "ragdjd fafgdjhw" [ref=e300]:
                - generic [ref=e301]: ragdjd fafgdjhw
              - cell "CAN - Vacation" [ref=e302]:
                - generic [ref=e303]: CAN - Vacation
              - cell "195.00" [ref=e304]:
                - generic [ref=e305]: "195.00"
              - cell "5.00" [ref=e306]:
                - generic [ref=e307]: "5.00"
              - cell "Pending Approval (5.00)" [ref=e308]:
                - generic [ref=e309]: Pending Approval (5.00)
              - cell [ref=e310]
              - cell "" [ref=e311]:
                - listitem [ref=e313]:
                  - button "" [ref=e314] [cursor=pointer]:
                    - generic [ref=e315]: 
    - generic [ref=e317]:
      - paragraph [ref=e318]: OrangeHRM OS 5.9
      - paragraph [ref=e319]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e320] [cursor=pointer]:
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
  10 | 
  11 |         await this.page.click(leaveLocators.leaveMenu);
  12 | 
  13 |     }
  14 | 
  15 |     async searchLeave(fromDate, toDate) {
  16 |         await this.page.fill(
  17 |             leaveLocators.fromDate,
  18 |             fromDate
  19 |         );
  20 | 
  21 |         await this.page.fill(
  22 |             leaveLocators.toDate,
  23 |             toDate
  24 |         );
  25 | 
  26 |         await this.page.click(
  27 |             leaveLocators.searchButton
  28 |         );
  29 | 
  30 |     }
  31 | 
  32 |     async isLeaveDisplayed() {
  33 |         await this.page.waitForSelector(
  34 |             leaveLocators.leaveTable
  35 |         );
  36 | 
  37 |         return await this.page
  38 |             .locator(leaveLocators.leaveTable)
  39 |             .isVisible();
  40 | 
  41 |     }
  42 | 
  43 |     async openApplyLeave() {
> 44 |         await this.page.click(
     |                         ^ Error: page.click: Test timeout of 60000ms exceeded.
  45 |             leaveLocators.applyLink
  46 |         );
  47 | 
  48 |     }
  49 | 
  50 |     async applyLeave(type, fromDate, toDate) {
  51 |         await this.page.click(
  52 |             leaveLocators.leaveTypeDropdown
  53 |         );
  54 | 
  55 |         await this.page.click(
  56 |             leaveLocators.leaveTypeOption
  57 |         );
  58 | 
  59 |         await this.page.fill(
  60 |             leaveLocators.applyFromDate,
  61 |             fromDate
  62 |         );
  63 | 
  64 |         await this.page.fill(
  65 |             leaveLocators.applyToDate,
  66 |             toDate
  67 |         );
  68 | 
  69 |         await this.page.click(
  70 |             leaveLocators.applyButton
  71 |         );
  72 | 
  73 |     }
  74 | 
  75 |     async getSuccessMessage() {
  76 |         await this.page.waitForSelector(
  77 |             leaveLocators.successToast
  78 |         );
  79 | 
  80 |         return await this.page
  81 |             .locator(leaveLocators.successToast)
  82 |             .textContent();
  83 | 
  84 |     }
  85 | 
  86 | }
  87 | 
  88 | module.exports = LeavePage;
```