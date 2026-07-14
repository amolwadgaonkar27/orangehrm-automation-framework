# OrangeHRM Automation Framework

This framework is built using **JavaScript + Node.js + Playwright** with the **Page Object Model (POM)** pattern.

## Covered test cases
- **TC001** – Valid Login
- **TC002** – Invalid Password
- **TC003** - Invalid Username
- **TC004** - Blank Credentials

## Project structure
```text
orangehrm-framework-tc001-tc002/
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
- Test data is stored in `testdata/login_test_data.json`
# orangehrm-automation-framework
