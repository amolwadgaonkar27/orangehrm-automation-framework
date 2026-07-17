const timeLocators = require('../locators/timeLocators');

class TimePage {

    constructor(page) {
        this.page = page;
    }

    async openTime() {
        await this.page.click(timeLocators.timeMenu);

    }

    async openMyTimesheet() {
        await this.page.click(timeLocators.timesheetsMenu);
        await this.page.waitForSelector(
            timeLocators.myTimesheets
        );

        await this.page.click(
            timeLocators.myTimesheets
        );

    }

    async createTimesheet(project, activity, hours) {
        await this.page.getByRole('button', { name: 'Edit' }).click();
        await this.page.locator(timeLocators.projectInput).waitFor({
            state: 'visible'
        });

        await this.page.locator(timeLocators.projectInput).fill(project);

        const projectOption = this.page
            .locator('.oxd-autocomplete-option')
            .filter({ hasText: project })
            .first();

        await projectOption.waitFor({ state: 'visible' });
        await projectOption.click();
        await this.page.locator(timeLocators.activityDropdown).click();

        const activityOption = this.page
            .locator('.oxd-select-option')
            .filter({ hasText: activity })
            .first();

        await activityOption.waitFor({ state: 'visible' });
        await activityOption.scrollIntoViewIfNeeded();
        await activityOption.click();
        
        const mondayInput = this.page
            .locator(timeLocators.mondayCell)
            .first();

        await mondayInput.waitFor({ state: 'visible' });
        await mondayInput.fill(hours);
        await this.page.locator(timeLocators.saveButton).click();
}
    async getSuccessMessage() {
        return await this.page
            .locator(timeLocators.successToast)
            .textContent();

    }

}

module.exports = TimePage;