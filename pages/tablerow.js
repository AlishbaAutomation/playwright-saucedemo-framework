export class Table{
    constructor(page){
        this.page=page;
        this.AddBtn=page.getByRole('button',{name:'Add'})
        this.FirstName=page.getByRole('textbox',{name:'First Name'})
        this.LasttName=page.getByRole('textbox',{name:'Last Name'})
        this.Email=page.getByRole('textbox',{name:'name@example.com'})
        this.Age=page.getByRole('textbox',{name:'Age'})
        this.Salary=page.getByRole('textbox',{name:'Salary'})
        this.Department=page.getByRole('textbox',{name:'Department'})
        this.Submitbtn=page.getByRole('button',{name:'Submit'})
        this.Search=page.getByRole('textbox',{name:'Type to search'})
          }
    async webopen(){
        await this.page.goto('https://demoqa.com/webtables')
    }
    async AddEmployee(name,lname,email,age,salary,dep,Empname){
        await this.AddBtn.click()
        await this.FirstName.fill(name)
        await this.LasttName.fill(lname)
        await this.Email.fill(email)
        await this.Age.fill(age)
        await this.Salary.fill(salary)
        await this.Department.fill(dep)
        await this.Submitbtn.click()
        await this.Search.fill(Empname)
    } 
    
    }

