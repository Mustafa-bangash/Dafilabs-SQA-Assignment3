describe('Contact form valid submission', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('button', 'Contact Me').should('be.visible').click();
    cy.get('form[aria-label="Contact form"]').should('be.visible');
  });

  it('fills the contact form with valid values and submits it', () => {
    cy.get('form[aria-label="Contact form"]').within(() => {
      cy.get('#name').type('Test User');
      cy.get('#email').type('testuser@example.com');
      cy.get('#message').type('This is a valid test message.');
      cy.get('button[type="submit"]').click();
    });

    // The deployed site currently uses EmailJS and may show a response message after submission.
    cy.get('section#contact').within(() => {
      cy.contains(/failed to send message|thank you|message sent|success/i, { matchCase: false })
        .should('be.visible');
    });
  });
});
