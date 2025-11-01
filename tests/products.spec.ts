import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';

test('add item to cart increments badge', async ({ page }) => {
  const inventory = new InventoryPage(page);
  await page.goto('/inventory.html');
  await inventory.expectLoaded();
  await inventory.addItem('Sauce Labs Backpack');
  await inventory.expectCartCount(1);
});
