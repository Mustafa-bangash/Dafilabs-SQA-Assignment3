const { test, expect } = require('@playwright/test');
const { HomePage } = require('./pages/HomePage');

test.describe('Navigation Between Sections', () => {
  test('should navigate to About section', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.scrollToSection('About');
    const isVisible = await homePage.isSectionVisible('About Me');
    expect(isVisible).toBeTruthy();
  });

  test('should navigate to Skills section', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.scrollToSection('Skills');
    const isVisible = await homePage.isSectionVisible('Skills');
    expect(isVisible).toBeTruthy();
  });
});
