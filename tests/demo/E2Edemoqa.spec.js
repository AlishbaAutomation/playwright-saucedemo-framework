import { test, expect } from '@playwright/test'
import { demoqa } from '../../pages/demoqa';
test('demoqa', async ({ page }) => {
    await page.goto('https://demoqa.com/webtables')
    const demo = new demoqa(page)
    await demo.SearchEmp('Cierra')
    await expect(page.getByRole('cell', { name: 'Cierra', exact: true }))
    await demo.AddEmployee('hira', 'khan ', 'hira@test.com', '25', '5500', 'QA')
    await expect(page.getByRole('cell', { name: 'hira', exact: true }))
    await expect(page.getByRole('cell', { name: 'Khan' }))
    await expect(page.getByRole('cell', { name: 'QA' }))





});