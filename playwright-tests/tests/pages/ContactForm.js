const { test, expect } = require('@playwright/test');

class ContactForm {
  constructor(page) {
    this.page = page;
  }

  async getNameField() {
    return this.page.locator('input[placeholder*="Name"]').first();
  }

  async getEmailField() {
    return this.page.locator('input[placeholder*="Email"]').first();
  }

  async getMessageField() {
    return this.page.locator('textarea').first();
  }

  async getSubmitButton() {
    return this.page.getByRole('button', { name: /Send|Submit/i });
  }

  async fillName(name) {
    const field = await this.getNameField();
    await field.fill(name);
  }

  async fillEmail(email) {
    const field = await this.getEmailField();
    await field.fill(email);
  }

  async fillMessage(message) {
    const field = await this.getMessageField();
    await field.fill(message);
  }

  async submitForm() {
    const button = await this.getSubmitButton();
    await button.click();
    await this.page.waitForTimeout(2000);
  }

  async getValidationErrors() {
    const alertBox = this.page.locator('[role="alert"]');
    const alerts = await alertBox.all();
    const errors = [];
    for (const alert of alerts) {
      const text = await alert.textContent();
      if (text) errors.push(text.trim());
    }
    return errors;
  }

  async isFormVisible() {
    const nameField = await this.getNameField();
    return await nameField.isVisible().catch(() => false);
  }
}

module.exports = { ContactForm };
