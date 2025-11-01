import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private user = this.page.locator('[data-test="username"]');
  private pass = this.page.locator('[data-test="password"]');
  private loginBtn = this.page.locator('[data-test="login-button"]');
  private error = this.page.locator('[data-test="error"]');

  async open() {
    await this.page.goto('/');
    await expect(this.user).toBeVisible();
  }

  async login(username: string, password: string) {
    await this.user.fill(username);
    await this.pass.fill(password);
    await this.loginBtn.click();
  }

  async expectErrorContains(text: string) {
    await expect(this.error).toContainText(text);
  }
}
