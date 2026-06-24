export class DemologinPage{
    constructor(page){
        this.page= page;
        this.username=page.locator('[data-test="username"]')
        this.password=page.locator('[data-test="password"]')
        this.loginbtn=page.locator('[data-test="login-button"]')

    }
    async WebOpen(){
        await this.page.goto('https://www.saucedemo.com')
    }
    async LoginCredentials(username,password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginbtn.click()
    }
}
