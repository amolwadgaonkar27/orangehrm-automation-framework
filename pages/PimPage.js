const pimLocators = require('../locators/pimLocators');

class PimPage {

    constructor(page) {
        this.page = page;
    }

    async openPIM() {
        await this.page.click(pimLocators.pimMenu);

    }

    async clickAddEmployee() {
        await this.page.click(pimLocators.addEmployeeBtn);
        await this.page.waitForSelector(pimLocators.firstName);

}
    async addEmployee(firstName, lastName) {
        await this.page.fill(pimLocators.firstName, firstName);
        await this.page.fill(pimLocators.lastName, lastName);
        await this.page.click(pimLocators.saveBtn);

    }

    async getSuccessMessage() {
        await this.page.waitForSelector(pimLocators.successMessage, {
        state: 'visible',
        timeout: 10000
    });

    return await this.page.locator(pimLocators.successMessage).textContent();

}

    async getRequiredMessage() {
        return await this.page.locator(pimLocators.requiredMessage).first().textContent();

    }

   async searchEmployee(employeeName) {
        await this.page.fill(
        pimLocators.employeeNameSearch,
        employeeName
    );

    await this.page.click(pimLocators.searchButton);

}

    async isEmployeeDisplayed(employeeName) {
        await this.page.waitForSelector(pimLocators.employeeTable);
        return await this.page
        .locator(pimLocators.employeeTable)
        .textContent();

}

    getNoRecordsMessage() {
        return this.page
        .locator('span.oxd-text.oxd-text--span')
        .filter({ hasText: 'No Records Found' })
        .first();
}

    async enterEmployeeId(employeeId) {
        await this.page.locator(pimLocators.employeeId).fill(employeeId);
}
}

module.exports = PimPage;