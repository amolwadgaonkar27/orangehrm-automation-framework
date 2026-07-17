const recruitmentLocators = require('../locators/recruitmentLocators');

class RecruitmentPage {

    constructor(page) {
        this.page = page;
    }

    async openRecruitment() {
        await this.page.click(
            recruitmentLocators.recruitmentMenu
        );
    }

    async clickAddCandidate() {
        await this.page.click(
            recruitmentLocators.addButton
        );
    }

    async addCandidate(firstName, lastName, email) {
        await this.page.fill(
            recruitmentLocators.firstName,
            firstName
        );

        await this.page.fill(
            recruitmentLocators.lastName,
            lastName
        );

        await this.page.locator(recruitmentLocators.email).fill(email);
        await this.page.click(recruitmentLocators.saveButton);
    }

    async getSuccessMessage() {
        await this.page.waitForSelector(
            recruitmentLocators.successToast
        );

        return await this.page
            .locator(recruitmentLocators.successToast)
            .textContent();
    }

}

module.exports = RecruitmentPage;