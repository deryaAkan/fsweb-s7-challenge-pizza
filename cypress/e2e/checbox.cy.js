describe('Checkbox Selection Test', () => {
  it('Selects multiple toppings using checkboxes', () => {
    cy.visit('/pizza');

    const toppings = ['topping-1', 'topping-2', 'topping-3', 'topping-4'];
    
    toppings.forEach((topping) => {
      cy.get(`[data-cy="${topping}"]`)
        .check()
        .should('be.checked');
      });
  });
});