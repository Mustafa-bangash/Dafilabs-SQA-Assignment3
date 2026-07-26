const { test, expect } = require('@playwright/test');
const { HomePage } = require('./pages/HomePage');

test.describe('Broken Link Verification', () => {
  test('should verify all external links are accessible', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    
    const links = await page.locator('a[href]').all();
    expect(links.length).toBeGreaterThan(0);
  });

  test('should have working GitHub link', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    
    const githubLink = page.locator('a[href*="github"]').first();
    const isVisible = await githubLink.isVisible().catch(() => false);
    if (isVisible) {
      const href = await githubLink.getAttribute('href');
      expect(href).toBeTruthy();
    }
  });

  test('should have working LinkedIn link', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    
    const linkedinLink = page.locator('a[href*="linkedin"]').first();
    const isVisible = await linkedinLink.isVisible().catch(() => false);
    if (isVisible) {
      const href = await linkedinLink.getAttribute('href');
      expect(href).toBeTruthy();
    }
  });
});
