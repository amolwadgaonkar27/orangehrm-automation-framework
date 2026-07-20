const adminLocators = require('../locators/adminLocators');

class AdminPage {

    constructor(page) {
        this.page = page;
    }

    async openAdmin() {
        await this.page.click(adminLocators.adminMenu);
    }

    async clickAddUser() {
        await this.page.click(adminLocators.addButton);
    }

    async getSuccessMessage() {
        await this.page.waitForSelector(adminLocators.successToast);

        return await this.page
            .locator(adminLocators.successToast)
            .textContent();
    }

    async createESSUser(employee, username, password) {

        await this.page.locator(adminLocators.userRoleDropdown).click();
        await this.page.getByRole('option', {
            name: 'ESS'
        }).click();

        const employeeInput = this.page.locator(adminLocators.employeeName);
        await employeeInput.click();
        await employeeInput.fill(employee);
        await this.page.waitForSelector('.oxd-autocomplete-dropdown');

        const employeeOption = this.page
            .locator('.oxd-autocomplete-option')
            .filter({ hasText: employee })
            .first();

        await employeeOption.waitFor({ state: 'visible' });
        await employeeOption.click();
        await this.page.locator(
            '//label[text()="Status"]/ancestor::div[contains(@class,"oxd-input-group")]//div[@class="oxd-select-text-input"]'
            ).click();

        await this.page.waitForSelector('.oxd-select-dropdown');

        await this.page.locator('.oxd-select-option span')
            .filter({ hasText: 'Enabled' })
            .click();

        await this.page.locator(adminLocators.username).fill(username);
        await this.page.locator(adminLocators.password).fill(password);
        await this.page.locator(adminLocators.confirmPassword).fill(password);
        await this.page.locator(adminLocators.saveButton).click();

    }

    async searchUser(username) {

        await this.page.fill(
            adminLocators.searchUsername,
            username
        );

        await this.page.click(
            adminLocators.searchButton
        );

    }

    async isUserDisplayed() {

        await this.page.waitForSelector(
            adminLocators.userTable
        );

        return await this.page
            .locator(adminLocators.userTable)
            .isVisible();

    }

    async deleteUser(username) {

        await this.searchUser(username);

        const row = this.page.locator('.oxd-table-row')
            .filter({ hasText: username });

        await row.locator('button:has(i.bi-trash)').click();
        await this.page.getByRole('button', {
        name: 'Yes, Delete'
            }).click();

    }

    async getSuccessMessage() {

        await this.page.waitForSelector(
            adminLocators.successToast
        );

        return await this.page
            .locator(adminLocators.successToast)
            .textContent();

    }

}

module.exports = AdminPage;