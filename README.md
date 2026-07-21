# OrangeHRM Automation Framework

This framework is built using **JavaScript + Node.js + Playwright** with the **Page Object Model (POM)** pattern.

## Covered test cases
- **TC001** – Valid Login
- **TC002** – Invalid Password
- **TC003** - Invalid Username
- **TC004** - Blank Credentials
- **TC005** - Add Employee
- **TC006** - Add Employee
- **TC007** - Search Employee
- **TC008** - Search Invalid Employee
- **TC009** - Search Leave Records
- **TC010** - Apply Leave
- **TC011** - Create Timesheet
- **TC012** - Add Candidate
- **TC013** - Add Candidate
- **TC014** - Create ESS User
- **TC015** - Search User
- **TC016** - Delete User
- **TC017** - Validate Dashboard Widgets
- **TC018** - Logout

## Project structure
```text
orangehrm-framework/
├── config/
├── pages/
├── tests/
├── testdata/
├── locators/
├── utilities/
├── fixtures/
├── reports/
│   ├── html_reports/
│   ├── allure-results/
│   └── allure-report/
├── screenshots/
├── logs/
└── README.md
```

## Install
```bash
npm install
npx playwright install
```

## Run tests
```bash
npm test
```

## Notes
- Application: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
- Test data is stored in `testdata/loginTestData.json`
# orangehrm-automation-framework
