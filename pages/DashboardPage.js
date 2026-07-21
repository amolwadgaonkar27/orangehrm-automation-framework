const dashboardLocators = require('../locators/dashboardLocators');

class DashboardPage {

    constructor(page) {
        this.page = page;
    }

    async isTimeAtWorkVisible() {
        await this.page.waitForSelector(dashboardLocators.timeAtWorkWidget);
        return this.page.locator(dashboardLocators.timeAtWorkWidget);
    }

    async isMyActionsVisible() {
        await this.page.waitForSelector(dashboardLocators.myActionsWidget);
        return this.page.locator(dashboardLocators.myActionsWidget);
    }

    async isQuickLaunchVisible() {
        await this.page.waitForSelector(dashboardLocators.quickLaunchWidget);
        return this.page.locator(dashboardLocators.quickLaunchWidget);
    }
}

module.exports = DashboardPage;