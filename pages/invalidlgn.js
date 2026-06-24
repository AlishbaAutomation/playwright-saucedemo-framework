export class invalidlgn{
    constructor(page){
        this.page= page;
            this.username=page.getByRole('textbox' , {name:'Username'})
        this.password=page.getByRole('textbox',{name:'Password'})
        this.button=page.getByRole('button' , {name:'Login'})}
        async openweb(){
            await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        }
async invalidlogin(uname,pwd){
    await this.username.fill(uname)
    await this.password.fill(pwd)
    await this.button.click()
}
}
    
