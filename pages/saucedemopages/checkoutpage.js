export class Checkout {
    constructor(page) {
        this.page = page;
        this.checkoutBtn = page.locator('[data-test="checkout"]')
        this.Firstname = page.locator('[data-test="firstName"]')
        this.lastname =page.locator('[data-test="lastName"]')
        this.postalcode = page.locator('[data-test="postalCode"]')
        this.continueBtn = page.locator('[data-test="continue"]')
        this.finishBtn = page.locator('[data-test="finish"]')
        this.verify = page.locator('[data-test="complete-header"]')
        this.homeBtn = page.locator('[data-test="back-to-products"]')
    }
    async clickCheckout() {
        await this.checkoutBtn.click()
    }
    async userDetails(fname,lastname,code) {
        await this.Firstname.fill(fname)
        await this.lastname.fill(lastname)
        await this.postalcode.fill(code)

    }
    async clickContinue() {
        await this.continueBtn.click()
    }
    async clickFinish() {
        await this.finishBtn.click()
    }
    verifyText() {
        return this.verify;
    }
    async homebtn() {
        await this.homeBtn.click()
    }
}
