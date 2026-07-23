# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim.spec.js >> PIM Module >> TC008 - Search Invalid Employee
- Location: tests/pim.spec.js:62:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('No Records Found')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('No Records Found')

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "PIM" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: manda user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Employee Information" [level=5]
- button ""
- separator
- text: Employee Name
- textbox "Type for hints...": Invalid Employee
- text: Employee Id
- textbox
- text: Employment Status -- Select --  Include Current Employees Only  Supervisor Name
- textbox "Type for hints..."
- text: Job Title -- Select --  Sub Unit -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (169) Records Found
- table:
  - rowgroup:
    - row " Id  First (& Middle) Name  Last Name  Job Title  Employment Status  Sub Unit  Supervisor  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Id "
      - columnheader "First (& Middle) Name "
      - columnheader "Last Name "
      - columnheader "Job Title "
      - columnheader "Employment Status "
      - columnheader "Sub Unit "
      - columnheader "Supervisor "
      - columnheader "Actions"
  - rowgroup:
    - row " 0395 AddFirst_1784109875313_5t4o5 Mid AddLast_1784109875313_5t4o5  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0395"
      - cell "AddFirst_1784109875313_5t4o5 Mid"
      - cell "AddLast_1784109875313_5t4o5"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 5659 Alexander Virginia Baker  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "5659"
      - cell "Alexander Virginia"
      - cell "Baker"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 4256 Alice Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "4256"
      - cell "Alice"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0426 Alice Sarah Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0426"
      - cell "Alice Sarah"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 01715 Amelia Brown  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "01715"
      - cell "Amelia"
      - cell "Brown"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0360 aniket t t  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0360"
      - cell "aniket t"
      - cell "t"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0367 Ash J Tyson  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0367"
      - cell "Ash J"
      - cell "Tyson"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0303 bala kumar ravi  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0303"
      - cell "bala kumar"
      - cell "ravi"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0292 bmrtahvwhibmrtahvwhi hbfqkhjfqbhbfqkhjfqb  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0292"
      - cell "bmrtahvwhibmrtahvwhi"
      - cell "hbfqkhjfqbhbfqkhjfqb"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0444 BulkDel1784110970093 C  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0444"
      - cell "BulkDel1784110970093"
      - cell "C"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0443 BulkDel1784110970093 B  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0443"
      - cell "BulkDel1784110970093"
      - cell "B"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0442 BulkDel1784110970093 A  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0442"
      - cell "BulkDel1784110970093"
      - cell "A"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0320 Charles Carter  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0320"
      - cell "Charles"
      - cell "Carter"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 00392 Charlotte Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "00392"
      - cell "Charlotte"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0363 Christopher Mcmillan  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0363"
      - cell "Christopher"
      - cell "Mcmillan"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 5959 CKEAi cS zNnUl  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "5959"
      - cell "CKEAi cS"
      - cell "zNnUl"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 1401 cVZfu gC EWSzc  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "1401"
      - cell "cVZfu gC"
      - cell "EWSzc"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0290 dhbrukkuzldhbrukkuzl ibuvlwtfsfibuvlwtfsf  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0290"
      - cell "dhbrukkuzldhbrukkuzl"
      - cell "ibuvlwtfsfibuvlwtfsf"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0294 DHINA KARAN P  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0294"
      - cell "DHINA KARAN"
      - cell "P"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 039900 em jk  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "039900"
      - cell "em"
      - cell "jk"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 09557 Emily Jones  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "09557"
      - cell "Emily"
      - cell "Jones"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0384 Fithri QA  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0384"
      - cell "Fithri"
      - cell "QA"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 1235 FName Mname LName  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "1235"
      - cell "FName Mname"
      - cell "LName"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftdkux ltsxgy  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftdkux"
      - cell "ltsxgy"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue fthnvn ltwrrt  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "fthnvn"
      - cell "ltwrrt"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue fthnvn ltwrrt  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "fthnvn"
      - cell "ltwrrt"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue fthyfv ltrhtm  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "fthyfv"
      - cell "ltrhtm"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftioiu ltpugr  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftioiu"
      - cell "ltpugr"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftioiu ltpugr  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftioiu"
      - cell "ltpugr"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftioiu ltpugr  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftioiu"
      - cell "ltpugr"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftioiu ltpugr  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftioiu"
      - cell "ltpugr"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftndlm ltdyyf  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftndlm"
      - cell "ltdyyf"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftpjte ltpzkj  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftpjte"
      - cell "ltpzkj"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftyseo ltzbbp  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftyseo"
      - cell "ltzbbp"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftyseo ltzbbp  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftyseo"
      - cell "ltzbbp"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftyseo ltzbbp  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftyseo"
      - cell "ltzbbp"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftyseo ltzbbp  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftyseo"
      - cell "ltzbbp"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftyseo ltzbbp  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftyseo"
      - cell "ltzbbp"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftyseo ltzbbp  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftyseo"
      - cell "ltzbbp"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0315hh hh hh  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0315hh"
      - cell "hh"
      - cell "hh"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0365 James Butler  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0365"
      - cell "James"
      - cell "Butler"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0439 Jane Doe  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0439"
      - cell "Jane"
      - cell "Doe"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0367010 Jobin Mathew Sam  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0367010"
      - cell "Jobin Mathew"
      - cell "Sam"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 110823 John Doe  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "110823"
      - cell "John"
      - cell "Doe"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 111517 John Doe  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "111517"
      - cell "John"
      - cell "Doe"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " John Automation  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "John"
      - cell "Automation"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " E10970093 John M Doe  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "E10970093"
      - cell "John M"
      - cell "Doe"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 973418 John K Doe  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "973418"
      - cell "John K"
      - cell "Doe"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " John Automation  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "John"
      - cell "Automation"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0435 John Doe  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0435"
      - cell "John"
      - cell "Doe"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
- navigation "Pagination Navigation":
  - list:
    - listitem:
      - button "1"
    - listitem:
      - button "2"
    - listitem:
      - button "3"
    - listitem:
      - button "4"
    - listitem:
      - button ""
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1  | const { test, expect } = require('../fixtures/baseFixture');
  2  | const { loadTestData } = require('../utilities/testDataLoader');
  3  | const loginData = loadTestData('loginTesData.json');
  4  | const pimData = loadTestData('pimTestData.json');
  5  | 
  6  | test.describe('PIM Module', () => {
  7  | 
  8  |     test.beforeEach(async ({ loginPage, pimPage }) => {
  9  | 
  10 |         await loginPage.goto();
  11 |         await loginPage.login(
  12 |             loginData.TC001.username,
  13 |             loginData.TC001.password
  14 |         );
  15 | 
  16 |         await pimPage.openPIM();
  17 | 
  18 |     });
  19 | 
  20 |    test('TC005 - Add Employee', async ({ pimPage }) => {
  21 | 
  22 |     await pimPage.clickAddEmployee();
  23 |     const employeeId = (Math.floor(Math.random() * 9000) + 1000).toString();
  24 |     await pimPage.enterEmployeeId(employeeId);
  25 |     await pimPage.addEmployee(
  26 |         pimData.TC005.firstName,
  27 |         pimData.TC005.lastName
  28 |     );
  29 | 
  30 |     const success = await pimPage.getSuccessMessage();
  31 |     expect(success).toContain('Successfully Saved');
  32 | });
  33 | 
  34 | test('TC006 - Add Employee', async ({ pimPage }) => {
  35 | 
  36 |     await pimPage.clickAddEmployee();
  37 |     const employeeId = (Math.floor(Math.random() * 9000) + 1000).toString();
  38 |     await pimPage.enterEmployeeId(employeeId);
  39 |     await pimPage.addEmployee(
  40 |         pimData.TC006.firstName,
  41 |         pimData.TC006.lastName
  42 |     );
  43 | 
  44 |     const success = await pimPage.getSuccessMessage();
  45 |     expect(success).toContain('Successfully Saved');
  46 | });
  47 | 
  48 | test('TC007 - Search Employee', async ({ pimPage }) => {
  49 | 
  50 |     await pimPage.searchEmployee(
  51 |         pimData.TC007.employeeName
  52 |     );
  53 | 
  54 |     const found = await pimPage.isEmployeeDisplayed(
  55 |     pimData.TC007.employeeName
  56 | );
  57 | 
  58 | expect(found).toBeTruthy();
  59 | 
  60 | });
  61 | 
  62 | test('TC008 - Search Invalid Employee', async ({ pimPage, page }) => {
  63 | 
  64 |     await pimPage.searchEmployee(
  65 |         pimData.TC008.employeeName
  66 |     );
  67 | 
  68 |     await expect(
  69 |         page.getByText('No Records Found')
> 70 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  71 | 
  72 | });
  73 | 
  74 | });
```