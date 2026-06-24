export class Multipletabs{
constructor(page){
    this.page=page;
    this.NewTab =page.getByRole('link', { name: 'Click Here' })
    
}
async webOpen(){
    await this.page.goto('https://the-internet.herokuapp.com/windows?utm_source=chatgpt.com')
}
async newTabs(){
    const pagepromise = this.page.waitForEvent('popup')
    await this.NewTab.click()
    const Newpage= await pagepromise;
    return Newpage;}
}





//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'Click Here' }).click();
//   const page1 = await page1Promise;
//   await expect(page1.getByRole('heading', { name: 'New Window' })).toBeVisible();
// });