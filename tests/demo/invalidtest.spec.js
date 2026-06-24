import {test,expect} from '@playwright/test'
import { invalidlgn } from '../../pages/invalidlgn'
test('invalid' , async({page})=>{
    const invalid=new invalidlgn(page)
    await invalid.openweb();
    await invalid.invalidlogin('ain' , 'admin123');
    await expect(page.getByText('Invalid credentials')).toBeVisible()
});