const { test, expect } = require('@playwright/test');
const { HomePage } = require('./pages/HomePage');
const { ContactForm } = require('./pages/ContactForm');

test.describe('Contact Form Validation', () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.scrollToSection('Contact');
  });

  test('should show validation error when submitting empty form', async ({ page }) => {
    const contactForm = new ContactForm(page);
    await contactForm.submitForm();
    const errors = await contactForm.getValidationErrors();
    expect(errors.length).toBeGreaterThan(0);
  });

  test('should show error for empty name field', async ({ page }) => {
    const contactForm = new ContactForm(page);
    await contactForm.fillEmail('test@example.com');
    await contactForm.fillMessage('Test message');
    await contactForm.submitForm();
    const errors = await contactForm.getValidationErrors();
    expect(errors.length).toBeGreaterThan(0);
  });

  test('should show error for empty email field', async ({ page }) => {
    const contactForm = new ContactForm(page);
    await contactForm.fillName('John Doe');
    await contactForm.fillMessage('Test message');
    await contactForm.submitForm();
    const errors = await contactForm.getValidationErrors();
    expect(errors.length).toBeGreaterThan(0);
  });

  test('should show error for empty message field', async ({ page }) => {
    const contactForm = new ContactForm(page);
    await contactForm.fillName('John Doe');
    await contactForm.fillEmail('test@example.com');
    await contactForm.submitForm();
    const errors = await contactForm.getValidationErrors();
    expect(errors.length).toBeGreaterThan(0);
  });
});
