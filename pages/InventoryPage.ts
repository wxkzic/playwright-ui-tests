import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  private title = this.page.locator('.title');
  private cartBadge = this.page.locator('.shopping_cart_badge');

  async expectLoaded() {
    await expect(this.title).toHaveText('Products');
  }

  async addItem(name: string) {

    const item = this.page.locator('.inventory_item').filter({
      has: this.page.locator('.inventory_item_name', { hasText: name }),
    });
    await item.getByRole('button', { name: 'Add to cart' }).click();
  }

  async expectCartCount(n: number) {
    await expect(this.cartBadge).toHaveText(String(n));
  }
}
