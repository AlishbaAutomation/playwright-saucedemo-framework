import{expect , test} from '@playwright/test'
import {LoginPage} from '../../pages/logindemopage';
import { Addproducts } from '../../pages/addproducts';
test.describe('All tests here' ,()=>{
test.beforeEach('task' , async({page})=>{
const lgn=new LoginPage(page);
await lgn.webopen()
await lgn.Logindata('standard_user','secret_sauce')
});
test('Add products to cart' , async({page})=>{
const addpro=new Addproducts(page);
await addpro.CartVerify()
await expect(page.getByText('1Sauce Labs Backpackcarry.')).toBeVisible()
await expect(page.getByText('1Sauce Labs Bike LightA red')).toBeVisible()
await addpro.Continueshopping()

});

});