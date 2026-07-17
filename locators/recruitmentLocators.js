module.exports = {

    recruitmentMenu: 'a[href*="Recruitment"]',
    addButton: 'button:has-text("Add")',
    firstName: 'input[name="firstName"]',
    lastName: 'input[name="lastName"]',
    email: '//label[text()="Email"]/ancestor::div[contains(@class,"oxd-input-group")]/following-sibling::div//input',
    saveButton: 'button[type="submit"]',
    successToast: '.oxd-toast-content'

};