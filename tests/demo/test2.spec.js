import{test,expect} from '@playwright/test'
import{Logintest} from '../../pages/validlgn'
test('valid login' , async({page})=>{
const ow=new Logintest(page)
await ow.webopen()
await ow.validlogin('Admin' , 'admin123')
await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible()

});