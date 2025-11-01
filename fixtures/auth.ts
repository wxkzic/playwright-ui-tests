import { test as base } from '@playwright/test';
import { users } from '../utils/test-data';

type Fixtures = { authStorageState: string };

export const test = base.extend<Fixtures>({
  authStorageState: async ({ browser, baseURL }, use) => {
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    await page.goto(baseURL!);
    await page.getByPlaceholder('Username').fill(users.valid.username);
    await page.getByPlaceholder('Password').fill(users.valid.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('**/inventory.html');
    const statePath = 'storageState/auth.json';
    await ctx.storageState({ path: statePath });
    await ctx.close();
    await use(statePath);
  }
});

export { expect } from '@playwright/test';
