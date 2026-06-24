export class Login{
constructor(page){
this.page=page;
 this.username=page.getByRole('textbox' , {name:'Username'})
        this.password=page.getByRole('textbox',{name:'Password'})
        this.button=page.getByRole('button' , {name:'Login'})
}
async webopen(){
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
}
async Login(username,password){
await this.username.fill(username)
await this.password.fill(password)
await this.button.click()


}




}