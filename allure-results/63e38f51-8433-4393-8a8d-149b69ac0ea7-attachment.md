# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin.spec.js >> Admin Module >> TC014 - Create ESS User
- Location: tests/admin.spec.js:22:5

# Error details

```
TypeError: adminPage.getSuccessMessage is not a function
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
            - generic [ref=e169] [cursor=pointer]:
              - generic [ref=e170]: "-- Select --"
              - generic [ref=e172]: 
          - generic [ref=e174]:
            - generic [ref=e176]: Employee Name*
            - textbox "Type for hints..." [ref=e180]: John Hopkins
            - generic [ref=e181]: Invalid
          - generic [ref=e183]:
            - generic [ref=e185]: Status*
            - generic [ref=e188] [cursor=pointer]:
              - generic [ref=e189]: "-- Select --"
              - generic [ref=e191]: 
          - generic [ref=e193]:
            - generic [ref=e195]: Username*
            - textbox [ref=e197]
        - generic [ref=e199]:
          - generic [ref=e200]:
            - generic [ref=e201]:
              - generic [ref=e203]: Password*
              - textbox [ref=e205]
            - paragraph [ref=e206]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
          - generic [ref=e208]:
            - generic [ref=e210]: Confirm Password*
            - textbox [ref=e212]
        - separator [ref=e213]
        - generic [ref=e214]:
          - paragraph [ref=e215]: "* Required"
          - button "Cancel" [ref=e216] [cursor=pointer]
          - button "Save" [ref=e217] [cursor=pointer]
    - generic [ref=e218]:
      - paragraph [ref=e219]: OrangeHRM OS 5.9
      - paragraph [ref=e220]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e221] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | const { test, expect } = require('../fixtures/baseFixture');
  2  | const { loadTestData } = require('../utilities/testDataLoader');
  3  | 
  4  | const loginData = loadTestData('loginTestData.json');
  5  | const adminData = loadTestData('adminTestData.json');
  6  | 
  7  | test.describe('Admin Module', () => {
  8  | 
  9  |     test.beforeEach(async ({ loginPage, adminPage }) => {
  10 | 
  11 |         await loginPage.goto();
  12 | 
  13 |         await loginPage.login(
  14 |             loginData.TC001.username,
  15 |             loginData.TC001.password
  16 |         );
  17 | 
  18 |         await adminPage.openAdmin();
  19 | 
  20 |     });
  21 | 
  22 |     test('TC014 - Create ESS User', async ({ adminPage }) => {
  23 | 
  24 |         await adminPage.clickAddUser();
  25 | 
  26 |         await adminPage.createESSUser(
  27 |             adminData.TC014.employee,
  28 |             adminData.TC014.username,
  29 |             adminData.TC014.password
  30 |         );
  31 | 
  32 |         const message =
> 33 |             await adminPage.getSuccessMessage();
     |                             ^ TypeError: adminPage.getSuccessMessage is not a function
  34 | 
  35 |         expect(message).toContain('Successfully Saved');
  36 | 
  37 |     });
  38 | 
  39 |     test('TC015 - Search User', async ({ adminPage }) => {
  40 | 
  41 |         await adminPage.searchUser(
  42 |             adminData.TC015.username
  43 |         );
  44 | 
  45 |         const displayed =
  46 |             await adminPage.isUserDisplayed();
  47 | 
  48 |         expect(displayed).toBeTruthy();
  49 | 
  50 |     });
  51 | 
  52 | });
```