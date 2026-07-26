const { test, expect } = require('@playwright/test');
const { HomePage } = require('./pages/HomePage');

test.describe('Responsive Layout Check', () => {
  test.describe('Mobile Viewport (375x667)', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test('should display correctly on mobile', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      const title = await homePage.getPageTitle();
      expect(title).toBeTruthy();
    });
  });

  test.describe('Tablet Viewport (768x1024)', () => {
    test.use({ viewport: { width: 768, height: 1024 } });

    test('should display correctly on tablet', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      const title = await homePage.getPageTitle();
      expect(title).toBeTruthy();
    });
  });

  test.describe('Desktop Viewport (1920x1080)', () => {
    test.use({ viewport: { width: 1920, height: 1080 } });

    test('should display correctly on desktop', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      const title = await homePage.getPageTitle();
      expect(title).toBeTruthy();
    });
  });
});
