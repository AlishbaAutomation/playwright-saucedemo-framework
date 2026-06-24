import { test, expect } from '@playwright/test';
import { Table } from '../../pages/tablerow';
test('table', async ({ page }) => {

    const table = new Table(page);
    await table.webopen()
    await table.AddEmployee('Hira' ,'Khan' ,'Hira@gmail.com' , '23' ,'6600' ,'CS', 'Hira')
    await expect(page.getByRole('cell', { name: 'Hira', exact: true })).toBeVisible()
  


});