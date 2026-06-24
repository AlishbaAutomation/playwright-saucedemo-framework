import{test,expect} from '@playwright/test'
import { DemologinPage } from '../../pages/saucelogin';
import {Users} from '../../pages/sauceusers';
for(const U of Users){
    test(`login from ${U.username} , ${U.password}` , async({page})=>{
const l=new DemologinPage(page)
await l.WebOpen()
await l.LoginCredentials(U.username,U.password)
if(U.username==='wrong_user' || U.username==='Admin' && U.password==='wrong_pass'|| U.password==='123456'){


await expect(page.locator('[data-test="error"]')).toBeVisible()}
else{
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
}

    });
 }