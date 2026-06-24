import { test, expect } from '@playwright/test'
import { Logintest } from '../../pages/validlgn';
import { Addemployee } from '../../pages/Addemployee';
test.describe('All test', () => {
    test.beforeEach('login ', async ({ page }) => {
        const lgn = new Logintest(page)
        await lgn.webopen()
        await lgn.validlogin('Admin', 'admin123')
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
    });
    test('add employess', async ({ page }) => {
        const addemp = new Addemployee(page)
        await addemp.Emp('john', 'alex', 'dinya', '22129', '45637', '165794644')
        await addemp.Nationality('Afghan')
        //await addemp.field()
        await addemp.saveemp()
        await addemp.bloodgrp('qwerty')


    });
});
