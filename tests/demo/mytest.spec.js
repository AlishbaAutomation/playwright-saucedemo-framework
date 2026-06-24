import{test,expect} from '@playwright/test';
import{ Loginpage} from '../../pages/login';
test('test', async ({ page }) => {
  const login =new Loginpage(page);
   await login.gotologin()
  await login.logintoweb('tomsmith','SuperSecretPassword!')
 
  //wait page.goto('https://the-internet.herokuapp.com/login');
  // await page.getByRole('textbox', { name: 'Username' }).click();
  // await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  // await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  // await page.getByRole('button', { name: ' Login' }).click();
});
