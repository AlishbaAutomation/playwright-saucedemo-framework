export class demoqa {
    constructor(page) {
        this.page = page;
        this.Searchbtn = page.getByRole('textbox', { name: 'Type to search' })
        this.Addbtn = page.getByRole('button', { name: 'Add' })
        this.Fname=page.getByRole('textbox', { name: 'First Name' })
        this.LName=page.getByRole('textbox', { name: 'Last Name' })
        this.email=page.getByRole('textbox', { name: 'name@example.com' })
        this.age=page.getByRole('textbox', { name: 'Age' })
        this.salary=page.getByRole('textbox', { name: 'Salary' })
        this.dep=page.getByRole('textbox', { name: 'Department' })
        this.submitbtn= page.getByRole('button', { name: 'Submit' })
       
    }
    async SearchEmp(sname) {
        await this.Searchbtn.click()
        await this.Searchbtn.fill(sname)
        await this.Searchbtn.fill('')
    }
    async AddEmployee(name,lname,mail,age,sal,dep){
        await this.Addbtn.click()
        await this.Fname.fill(name)
        await this.LName.fill(lname)
        await this.email.fill(mail)
        await this.age.fill(age)
        await this.salary.fill(sal)
        await this.dep.fill(dep)
        await this.submitbtn.click()
        await this.Searchbtn.fill(name)
       
    }
}




