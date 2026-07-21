const logoutLocators = require('../locators/logoutLocators');

class LogoutPage {

    constructor(page) {
        this.page = page;
    }

    async logout() {

        await this.page.locator(
            logoutLocators.userDropdown
        ).click();

        await this.page.locator(
            logoutLocators.logoutButton
        ).click();

    }

    async isLoginPageDisplayed() {

        await this.page.waitForSelector(
            logoutLocators.loginPage
        );

        return await this.page
            .locator(logoutLocators.loginPage)
            .isVisible();

    }

}

module.exports = LogoutPage;