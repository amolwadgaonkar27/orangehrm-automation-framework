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
  - waiting for locator('.oxd-select-text')
    - locator resolved to <div data-v-67d2aedf="" data-v-13cf171c="" class="oxd-select-text oxd-select-text--active">…</div>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-d5bfe35b="" class="oxd-form-loader">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-d5bfe35b="" class="oxd-form-loader">…</div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    6 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-d5bfe35b="" class="oxd-form-loader">…</div> intercepts pointer events
    - retrying click action
      - waiting 500ms
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

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
      - paragraph [ref=e158]: No Leave Types with Leave Balance
    - generic [ref=e159]:
      - paragraph [ref=e160]: OrangeHRM OS 5.9
      - paragraph [ref=e161]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e162] [cursor=pointer]:
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
  44 |         await this.page.click(
  45 |             leaveLocators.applyLink
  46 |         );
  47 | 
  48 |     }
  49 | 
  50 |     async applyLeave(type, fromDate, toDate) {
> 51 |         await this.page.click(
     |                         ^ Error: page.click: Test timeout of 60000ms exceeded.
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