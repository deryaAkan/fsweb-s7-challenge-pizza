describe('Form Submission Test', () => {
  it('Submits the pizza order form', () => {
    cy.visit('/pizza'); 
    cy.visit('/success');

    cy.get('[data-cy="topping-1"]').check();
    cy.get('[data-cy="customer-name"]').type('John Doe'); 

    cy.get('[data-cy="form-submit-button"]').click();
    
    cy.url().should('include', '/success');
  });
});
