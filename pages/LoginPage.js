const loginLocators = require('../locators/loginLocators');

class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            { waitUntil: 'domcontentloaded' }
        );

        await this.page.waitForSelector(loginLocators.usernameInput);
    }

    async login(username, password) {
        await this.page.fill(loginLocators.usernameInput, username);
        await this.page.fill(loginLocators.passwordInput, password);
        await this.page.click(loginLocators.loginButton);
    }

    async isDashboardVisible() {
        await this.page.waitForSelector(loginLocators.dashboardHeader);
        return await this.page.locator(loginLocators.dashboardHeader).isVisible();
    }

    async getErrorMessage() {
        await this.page.waitForSelector(loginLocators.errorMessage);
        return (await this.page.locator(loginLocators.errorMessage).textContent()).trim();
    }

    async getRequiredMessages() {
        return await this.page
            .locator(loginLocators.requiredMessage)
            .allTextContents();
    }
}

module.exports = LoginPage;