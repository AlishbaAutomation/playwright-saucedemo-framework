import{test,expect} from '@playwright/test'
import{Login} from '../../pages/orangehrmlogin'
import{user} from '../../pages/users'
for (const users of user){
    test(`login test - ${users.username} - ${users.password}` ,async({page})=>{
const log=new Login(page);
await log.webopen();
await log.Login(users.username,users.password);
if(users.username==='Admin' && users.password==='admin123'){
    await expect(page.getByRole('heading') , {name:'Dashboard'}).toBeVisible();

}
else{
     await expect(page.getByText('Invalid credentials')).toBeVisible();
}
    });
}