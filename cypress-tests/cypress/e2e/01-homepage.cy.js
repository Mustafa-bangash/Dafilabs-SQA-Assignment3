describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads successfully and has the correct page title', () => {
    // Verify the deployed site title matches the expected React/Vite app title.
    cy.title().should('eq', 'Muhammad Mustafa Khan | Software Engineer & MERN Developer');

    // Confirm the primary call-to-action is visible on the homepage.
    cy.contains('button', 'Contact Me').should('be.visible');
  });
});
