export class Addemployee {
    constructor(page) {
        this.page = page;

        this.Textbox = page.getByRole('link', { name: 'PIM' })
        this.Addbutton = page.getByRole('button', { name: 'Add' })
        this.Firstname = page.getByRole('textbox', { name: 'First Name' })
        this.Middlename = page.getByRole('textbox', { name: 'Middle Name' })
        this.Lastname = page.getByRole('textbox', { name: 'Last Name' })
        this.Empid = page.getByRole('textbox').nth(4)
        this.Savebtn = page.getByRole('button', { name: 'Save' })
        this.otherid = page.getByRole('textbox').nth(5)
        this.licenseNo = page.locator('div:nth-child(2)>div>.oxd-input-group>div:nth-child(2)>.oxd-input')
        this.nationality = page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first()
        // this.Maritalstatus = page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
        this.gender = page.getByText('Male', { exact: 'True' });
        this.save = page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button')
        this.Bloodgrp = page.getByText('-- Select --').nth(1)
        this.select = page.getByRole('option', { name: 'A-' })
        // this.writetxt=page.locator('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input')
        this.slct = page.locator('.oxd-input.oxd-input--focus')
        this.SAVe=page.locator('form').filter({ hasText: 'Blood TypeA-Test Field Save' }).getByRole('button')
        // this.selectgrp=page.locator('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > div > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
        // this.selecttext=page.locator('.oxd-input.oxd-input--focus')
        // this.addgrpbtn=page.locator('form').filter({ hasText: 'Blood TypeBTest_Field Save' }).getByRole('button')
        this.attachfile = page.getByRole('button', { name: ' Add' })
        this.browsebtm = page.getByText('Browse')
        this.attachbtn = page.getByRole('button', { name: 'Save' }).nth(2)


        // await page.getByRole('option', { name: 'A-' }).click();
        // await page.locator('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input').click();
        // await page.locator('.oxd-input.oxd-input--focus').fill('wer');
        // await page.locator('form').filter({ hasText: 'Blood TypeA-Test Field Save' }).getByRole('button').click();
    }
    async Emp(fN, MN, LN, id, ID, Lno, Edate) {
        await this.Textbox.click()
        await this.Addbutton.click()
        await this.Firstname.fill(fN)
        await this.Middlename.fill(MN)
        await this.Lastname.fill(LN)
        await this.Empid.fill(id)
        await this.Savebtn.click()
        await this.otherid.fill(ID)
        await this.licenseNo.fill(Lno)

    }
    async Nationality(country) {

        await this.nationality.click();
        await this.page.getByRole('option', {
            name: country
        }).click();

    }

    // async field() {
    //     await this.Maritalstatus.click()

    //     await this.Maritalstatus.getByText('Married').click();
    // }
    async saveemp() {
        this.gender.click()
        this.save.click()
    }
    async bloodgrp(text) {
        await this.Bloodgrp.click();
        await this.select.click();
        await this.slct.fill(text);
        await this.SAVe.click()
        //await this.selectgrp.getByRole('option', {
        //     name: text
        // }).click();
        // await this.selecttext.fill(txt)
        // await this.addgrpbtn.click()
        await this.attachfile.click()
        await this.browsebtm.click()
        await this.browsebtm.setInputFiles('banner.jpeg');
        await this.attachbtn.click()
        //await page.getByRole('button', { name: ' Add' }).click();
        // await page.getByText('Browse').click();
        //await page.getByText('Browse').setInputFiles('banner.jpeg');
        //await page.getByRole('button', { name: 'Save' }).nth(2).click()
    }

}

