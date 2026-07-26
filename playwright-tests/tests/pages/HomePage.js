const { test, expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
    this.footerNav = page.getByRole('navigation', { name: 'Footer navigation' });
  }

  async goto() {
    await this.page.goto('/');
  }

  async getPageTitle() {
    return await this.page.title();
  }

  async scrollToSection(sectionName) {
    const button = this.footerNav.getByRole('button', { name: sectionName });
    await button.click();
    await this.page.waitForTimeout(500);
  }

  async isSectionVisible(sectionName) {
    const section = this.page.getByRole('heading', { name: sectionName });
    return await section.isVisible().catch(() => false);
  }

  async verifyExternalLink(platform) {
    let link;
    let expectedHref;

    switch (platform.toLowerCase()) {
      case 'github':
        link = this.page.locator('a[href*="github.com"]').first();
        expectedHref = 'https://github.com/';
        break;
      default:
        throw new Error(`Unknown platform: ${platform}`);
    }

    try {
      const isVisible = await link.isVisible({ timeout: 2000 });
      const href = await link.getAttribute('href');
      return { exists: isVisible, href, expectedHref };
    } catch {
      return { exists: false, href: null, expectedHref };
    }
  }
}

module.exports = { HomePage };
