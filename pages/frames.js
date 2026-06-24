export class Frames {
    constructor(page) {
        this.page = page
        this.frame = page.locator('#frame1').contentFrame().getByRole('heading', { name: 'This is a sample page' })
        this.frame2 = page.locator('#frame2').contentFrame().getByRole('heading', { name: 'This is a sample page' })


    }
    async wenbopen() {
        await this.page.goto('https://demoqa.com/frames?utm_source=chatgpt.com')
    }
     GetFrametext() {
        return this.frame.getByText('This is a sample page')
        return this.frame2.getByText('This is a sample page')

    }

}
// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.locator('#frame1').contentFrame().getByRole('heading', { name: 'This is a sample page' }).click();
//   await page.locator('#frame2').contentFrame().getByRole('heading', { name: 'This is a sample page' }).click();
//   await page.locator('#frame1').contentFrame().locator('html').click();
//   await page.locator('#frame1').contentFrame().locator('html').click();
//   await page.locator('#frame1').contentFrame().locator('html').click();
//   await page.locator('#frame1').contentFrame().locator('html').click();
