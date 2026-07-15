module.exports = {

    pimMenu: 'a[href*="viewPimModule"]',
    addEmployeeBtn: 'button:has-text("Add")',
    firstName: 'input[name="firstName"]',
    lastName: 'input[name="lastName"]',
    employeeId: '//label[text()="Employee Id"]/ancestor::div[contains(@class,"oxd-input-group")]//input',
    saveBtn: 'button[type="submit"]',
    successMessage: '.oxd-toast-content',
    requiredMessage: '.oxd-input-field-error-message',
    employeeNameSearch: 'input[placeholder="Type for hints..."]',
    searchButton: 'button[type="submit"]',
    employeeTable: '.oxd-table-body',
    noRecordsFound: 'span.oxd-text.oxd-text--span',
    employeeRows: '.oxd-table-body .oxd-table-row'
};