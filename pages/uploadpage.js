export class uploadfile{
    constructor(page){
        this.page=page;
        
    }
    async Upload(){
        await this.page.goto('https://the-internet.herokuapp.com/upload')
        await this.page.getByRole('button' , {name:'Choose File'}).setInputFiles('C:/Users/AMC/Desktop/banner.jpeg')
        await this.page.getByRole('button' ,{name:'Upload'}).click()
       
    }
}