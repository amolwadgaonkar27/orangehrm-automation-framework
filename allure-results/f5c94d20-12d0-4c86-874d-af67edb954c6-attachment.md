# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim.spec.js >> PIM Module >> TC008 - Search Invalid Employee
- Location: tests/pim.spec.js:68:1

# Error details

```
Error: locator.textContent: Error: strict mode violation: locator('.oxd-text--span') resolved to 12 elements:
    1) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">管理员</span> aka getByRole('link', { name: '管理员' })
    2) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">个人信息管理系统</span> aka getByRole('link', { name: '个人信息管理系统' })
    3) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">休假</span> aka getByRole('link', { name: '休假' })
    4) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">时间</span> aka getByRole('link', { name: '时间' })
    5) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">招聘</span> aka getByRole('link', { name: '招聘' })
    6) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">我的信息</span> aka getByRole('link', { name: '我的信息' })
    7) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">绩效</span> aka getByRole('link', { name: '绩效' })
    8) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">仪表盘</span> aka getByRole('link', { name: '仪表盘' })
    9) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">Directory</span> aka getByRole('link', { name: 'Directory' })
    10) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">Maintenance</span> aka getByRole('link', { name: 'Maintenance' })
    ...

Call log:
  - waiting for locator('.oxd-text--span')

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
              - textbox "搜索" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "管理员" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: 管理员
            - listitem [ref=e25]:
              - link "个人信息管理系统" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: 个人信息管理系统
            - listitem [ref=e41]:
              - link "休假" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: 休假
            - listitem [ref=e46]:
              - link "时间" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: 时间
            - listitem [ref=e54]:
              - link "招聘" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: 招聘
            - listitem [ref=e62]:
              - link "我的信息" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: 我的信息
            - listitem [ref=e70]:
              - link "绩效" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: 绩效
            - listitem [ref=e80]:
              - link "仪表盘" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: 仪表盘
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
              - link "激动" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: 激动
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "个人信息管理系统" [level=6] [ref=e114]
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
              - text: 设置
              - generic [ref=e134]: 
          - listitem [ref=e135] [cursor=pointer]:
            - link "员工列表" [ref=e136]:
              - /url: "#"
          - listitem [ref=e137] [cursor=pointer]:
            - link "添加员工" [ref=e138]:
              - /url: "#"
          - listitem [ref=e139] [cursor=pointer]:
            - link "报告" [ref=e140]:
              - /url: "#"
          - button "" [ref=e142] [cursor=pointer]:
            - generic [ref=e143]: 
  - generic [ref=e144]:
    - generic [ref=e146]:
      - generic [ref=e147]:
        - generic [ref=e148]:
          - heading "员工信息" [level=5] [ref=e150]
          - button "" [ref=e153] [cursor=pointer]:
            - generic [ref=e154]: 
        - separator [ref=e155]
        - generic [ref=e157]:
          - generic [ref=e159]:
            - generic [ref=e161]:
              - generic [ref=e163]: 员工姓名
              - textbox "Type for hints..." [ref=e167]: Invalid Employee
            - generic [ref=e169]:
              - generic [ref=e171]: 员工识别号
              - textbox [ref=e173]
            - generic [ref=e175]:
              - generic [ref=e177]: 雇佣状态
              - generic [ref=e180] [cursor=pointer]:
                - generic [ref=e181]: "-- Select --"
                - generic [ref=e183]: 
            - generic [ref=e185]:
              - generic [ref=e187]: 包括
              - generic [ref=e190] [cursor=pointer]:
                - generic [ref=e191]: 仅当前员工
                - generic [ref=e193]: 
            - generic [ref=e195]:
              - generic [ref=e197]: 上司姓名
              - textbox "Type for hints..." [ref=e201]
            - generic [ref=e203]:
              - generic [ref=e205]: 职称
              - generic [ref=e208] [cursor=pointer]:
                - generic [ref=e209]: "-- Select --"
                - generic [ref=e211]: 
            - generic [ref=e213]:
              - generic [ref=e215]: 子单元
              - generic [ref=e218] [cursor=pointer]:
                - generic [ref=e219]: "-- Select --"
                - generic [ref=e221]: 
          - separator [ref=e222]
          - generic [ref=e223]:
            - button "重置" [ref=e224] [cursor=pointer]
            - button "搜索" [active] [ref=e225] [cursor=pointer]
      - generic [ref=e226]:
        - button " 添加" [ref=e228] [cursor=pointer]:
          - generic [ref=e229]: 
          - text: 添加
        - table [ref=e231]
    - generic [ref=e236]:
      - paragraph [ref=e237]: OrangeHRM OS 5.9
      - paragraph [ref=e238]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e239] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | const pimLocators = require('../locators/pimLocators');
  2  | 
  3  | class PimPage {
  4  | 
  5  |     constructor(page) {
  6  |         this.page = page;
  7  |     }
  8  | 
  9  |     async openPIM() {
  10 |         await this.page.click(pimLocators.pimMenu);
  11 | 
  12 |     }
  13 | 
  14 |     async clickAddEmployee() {
  15 |         await this.page.click(pimLocators.addEmployeeBtn);
  16 |         await this.page.waitForSelector(pimLocators.firstName);
  17 | 
  18 | }
  19 |     async addEmployee(firstName, lastName) {
  20 |         await this.page.fill(pimLocators.firstName, firstName);
  21 |         await this.page.fill(pimLocators.lastName, lastName);
  22 |         await this.page.click(pimLocators.saveBtn);
  23 | 
  24 |     }
  25 | 
  26 |     async getSuccessMessage() {
  27 |         await this.page.waitForSelector(pimLocators.successMessage, {
  28 |         state: 'visible',
  29 |         timeout: 10000
  30 |     });
  31 | 
  32 |     return await this.page.locator(pimLocators.successMessage).textContent();
  33 | 
  34 | }
  35 | 
  36 |     async getRequiredMessage() {
  37 |         return await this.page.locator(pimLocators.requiredMessage).first().textContent();
  38 | 
  39 |     }
  40 | 
  41 |    async searchEmployee(employeeName) {
  42 | 
  43 |     await this.page.fill(
  44 |         pimLocators.employeeNameSearch,
  45 |         employeeName
  46 |     );
  47 | 
  48 |     await this.page.click(pimLocators.searchButton);
  49 | 
  50 | }
  51 | 
  52 | async isEmployeeDisplayed(employeeName) {
  53 | 
  54 |     await this.page.waitForSelector(pimLocators.employeeTable);
  55 | 
  56 |     return await this.page
  57 |         .locator(pimLocators.employeeTable)
  58 |         .textContent();
  59 | 
  60 | }
  61 | 
  62 | async getNoRecordsMessage() {
  63 |     await this.page.waitForSelector(pimLocators.noRecordsFound);
  64 |     return await this.page
  65 |         .locator(pimLocators.noRecordsFound)
> 66 |         .textContent();
     |          ^ Error: locator.textContent: Error: strict mode violation: locator('.oxd-text--span') resolved to 12 elements:
  67 | 
  68 | }
  69 | 
  70 | async enterEmployeeId(employeeId) {
  71 |         await this.page.locator(pimLocators.employeeId).fill(employeeId);
  72 | }
  73 | }
  74 | 
  75 | module.exports = PimPage;
```