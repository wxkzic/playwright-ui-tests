import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../utils/test-data';


test.describe('Login', () => {
  test('success login redirects to inventory', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login(users.valid.username, users.valid.password);
    await expect(page).toHaveURL(/inventory\.html$/);
  });

  test('locked user sees error', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login(users.locked.username, users.locked.password);
    await login.expectErrorContains('Sorry, this user has been locked out');
  });
});
