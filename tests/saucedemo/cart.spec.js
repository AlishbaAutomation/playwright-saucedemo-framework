import{test,expect} from '../../pages/fixtures/Fixtures'
import { InventoryPage } from '../../pages/saucedemopages/inventorypage';
test('cart validation' ,async({loggedInpage})=>
{
    const inventory=new InventoryPage(loggedInpage)
    await expect(inventory.getproductCount()).toHaveCount(6);
    await inventory.AddBackpack()
    await inventory.AddBikeLight()
    await inventory.OpenCart()
    await expect(inventory.GetCartBadge()).toContainText('2')
    await inventory.RemoveBackpack()
    await expect(inventory.GetCartBadge()).toContainText('1')
   

});
