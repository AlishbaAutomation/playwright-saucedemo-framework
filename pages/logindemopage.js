export class LoginPage{
constructor(page){
this.page=page;
this.username=page.locator('[data-test="username"]')
this.password=page.locator('[data-test="password"]')
this.btn=page.locator('[data-test="login-button"]')

}
async webopen(){
     await this.page.goto('https://www.saucedemo.com')  

}
async Logindata(username , password){
   await  this.username.fill(username)
    await this.password.fill(password)
    await this.btn.click()
}



}
