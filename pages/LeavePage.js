const leaveLocators = require('../locators/leaveLocators');

class LeavePage {

    constructor(page) {
        this.page = page;
    }

    async openLeave() {
        await this.page.click(leaveLocators.leaveMenu);
    }

    async searchLeave(fromDate, toDate) {
        await this.page.fill(
            leaveLocators.fromDate,
            fromDate
        );

        await this.page.fill(
            leaveLocators.toDate,
            toDate
        );

        await this.page.click(
            leaveLocators.searchButton
        );
    }

    async openApplyLeave() {
        await this.page.click(
            leaveLocators.applyLink
        );
    }

    async applyLeave(type, fromDate, toDate) {
        await this.page.click(leaveLocators.leaveTypeDropdown);
        await this.page.click(`span:has-text("${type}")`);

        await this.page.locator(leaveLocators.applyFromDate).clear();
        await this.page.fill(leaveLocators.applyFromDate, fromDate);

        await this.page.locator(leaveLocators.applyToDate).clear();
        await this.page.fill(leaveLocators.applyToDate, toDate);

        await this.page.click(leaveLocators.applyButton);
}

    async getSuccessMessage() {
        await this.page.waitForSelector(
            leaveLocators.successToast
        );

        return await this.page
            .locator(leaveLocators.successToast)
            .textContent();
    }

}

module.exports = LeavePage;