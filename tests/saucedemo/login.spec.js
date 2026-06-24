import{test,expect} from '@playwright/test'
import { Login } from '../../pages/saucedemopages/Loginpage';
test('login saucedemo test ' , async({page})=>
{
const login=new Login(page);
await login.webopen()
await login.Logindata('standard_user','secret_sauce');


});

