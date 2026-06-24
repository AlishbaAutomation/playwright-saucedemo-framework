export class Addproducts {
    constructor(page) {
        this.backpackbtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.bikelightbtn = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
        this.cartbtn = page.locator('[data-test="shopping-cart-link"]')
        this.continuebtn = page.locator('[data-test="continue-shopping"]')
    }
    async CartVerify() {
        await this.backpackbtn.click()
        await this.bikelightbtn.click()
        await this.cartbtn.click()
    }

    async Continueshopping() {
        await this.continuebtn.click()
    }
}