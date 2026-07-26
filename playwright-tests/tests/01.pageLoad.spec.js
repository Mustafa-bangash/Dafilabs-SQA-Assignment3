const { test, expect } = require('@playwright/test');
const { HomePage } = require('./pages/HomePage');

test.describe('Website Loading and Page Title Verification', () => {
  test('should load the homepage successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    const title = await homePage.getPageTitle();
    expect(title).toBeTruthy();
  });

  test('should have correct page title', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    const title = await homePage.getPageTitle();
    expect(title).toContain('Muhammad Mustafa Khan');
  });
});
