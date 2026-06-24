import { test, expect } from '@playwright/test'
import { Multipletabs } from '../../pages/multipletabs';
test('Multiple tabs test', async ({ page }) => {
    const tabs = new Multipletabs(page)
    await tabs.webOpen()
    const Newpage = await tabs.newTabs();
    await expect(Newpage.getByRole('heading', { name: 'New Window' })).toBeVisible();


});