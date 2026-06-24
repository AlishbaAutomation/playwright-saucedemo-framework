export class InventoryPage{
    constructor(page){
        this.page=page;
        this.productCount=page.locator('.inventory_item')
        this.Backpackbtn=page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.Bikelightbtn=page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
        this.Cartbadge=page.locator('[data-test="shopping-cart-badge"]')
        this.cartbtn=page.locator('[data-test="shopping-cart-link"]')
        this.removebackpackbtn=page.locator('[data-test="remove-sauce-labs-backpack"]')
    }
getproductCount(){
     return this.productCount;
}
async AddBackpack(){
    await this.Backpackbtn.click()
}
async AddBikeLight(){
    await this.Bikelightbtn.click()
}
async OpenCart(){
    await this.cartbtn.click()
}
 GetCartBadge(){
return this.Cartbadge;
}
async RemoveBackpack(){
    await this.removebackpackbtn.click()
}

}
// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
//   await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
//   await page.locator('[data-test="shopping-cart-link"]').click();
//   await expect(page.locator('[data-test="cart-list"]')).toBeVisible();
//   await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
//   await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
// });