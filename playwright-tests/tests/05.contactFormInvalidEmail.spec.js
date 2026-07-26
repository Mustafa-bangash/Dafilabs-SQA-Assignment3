const { test, expect } = require('@playwright/test');
const { HomePage } = require('./pages/HomePage');
const { ContactForm } = require('./pages/ContactForm');

test.describe('Contact Form Invalid Email', () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.scrollToSection('Contact');
  });

  test('should reject email without @ symbol', async ({ page }) => {
    const contactForm = new ContactForm(page);
    await contactForm.fillName('John Doe');
    await contactForm.fillEmail('invalidemail.com');
    await contactForm.fillMessage('Test message');
    await contactForm.submitForm();
    const errors = await contactForm.getValidationErrors();
    expect(errors.length).toBeGreaterThan(0);
  });

  test('should reject email with spaces', async ({ page }) => {
    const contactForm = new ContactForm(page);
    await contactForm.fillName('John Doe');
    await contactForm.fillEmail('invalid email@example.com');
    await contactForm.fillMessage('Test message');
    await contactForm.submitForm();
    const errors = await contactForm.getValidationErrors();
    expect(errors.length).toBeGreaterThan(0);
  });
});
