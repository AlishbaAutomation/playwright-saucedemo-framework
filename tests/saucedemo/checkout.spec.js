import { test, expect } from '../../pages/fixtures/Fixtures'
import { InventoryPage } from '../../pages/saucedemopages/inventorypage';
import { Checkout } from '../../pages/saucedemopages/checkoutpage'
test('checkoutpage', async ({ loggedInpage }) => {
    const inventory = new InventoryPage(loggedInpage);
    const checkout = new Checkout(loggedInpage)
    await inventory.AddBackpack()
    await inventory.OpenCart()
    await checkout.clickCheckout()
    await checkout.userDetails('John', 'Muhammad','3400')
    await checkout.clickContinue()
    await checkout.clickFinish()
    await expect(checkout.verifyText()).toContainText('Thank you for your order!')
    await checkout.homebtn()
});