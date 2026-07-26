const { test, expect } = require('@playwright/test');
const { HomePage } = require('./pages/HomePage');
const { ContactForm } = require('./pages/ContactForm');

test.describe('Contact Form Valid Submission', () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.scrollToSection('Contact');
  });

  test('should submit form with valid data', async ({ page }) => {
    const contactForm = new ContactForm(page);
    await contactForm.fillName('John Doe');
    await contactForm.fillEmail('john@example.com');
    await contactForm.fillMessage('This is a test message');
    await contactForm.submitForm();
    const errors = await contactForm.getValidationErrors();
    expect(errors.length).toBe(0);
  });

  test('should accept email with plus sign', async ({ page }) => {
    const contactForm = new ContactForm(page);
    await contactForm.fillName('Jane Smith');
    await contactForm.fillEmail('jane+test@example.com');
    await contactForm.fillMessage('Testing plus sign in email');
    await contactForm.submitForm();
    const errors = await contactForm.getValidationErrors();
    expect(errors.length).toBe(0);
  });
});
