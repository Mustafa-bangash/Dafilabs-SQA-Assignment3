describe('Contact form validation', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('button', 'Contact Me').should('be.visible').click();
    cy.get('form[aria-label="Contact form"]').should('be.visible');
  });

  it('shows validation errors when submitting the contact form empty', () => {
    cy.get('form[aria-label="Contact form"]').within(() => {
      cy.get('button[type="submit"]').click();

      // Validate that each required field reports an error on empty submit.
      cy.contains('Name is required').should('be.visible');
      cy.contains('Email is required').should('be.visible');
      cy.contains('Message is required').should('be.visible');

      // Ensure no success confirmation is shown when the form is invalid.
      cy.contains(/thank you|message sent|success/i).should('not.exist');
    });
  });
});
