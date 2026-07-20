module.exports = {

    adminMenu: 'a[href*="Admin"]',
    addButton: 'button:has-text("Add")',
    userRoleDropdown:'(//div[contains(@class,"oxd-select-text")])[1]',
    employeeName:'input[placeholder="Type for hints..."]',
    statusDropdown: '(//div[contains(@class,"oxd-select-text")])[2]',
    username: '//label[text()="Username"]/../following-sibling::div//input',
    password:'(//input[@type="password"])[1]',
    confirmPassword:'(//input[@type="password"])[2]',
    saveButton:'button[type="submit"]',
    searchUsername:'(//input[contains(@class,"oxd-input")])[2]',
    searchButton:'button[type="submit"]',
    userTable:'.oxd-table-body',
    successToast:'.oxd-toast-content',
    deleteButton: 'button:has(i.bi-trash)',
    confirmDeleteButton:'button:has-text("Yes, Delete")'
};