describe('template spec', () => {
  it('passes', () => {
    cy.visit('pizza')
  })

  it('requires an input before submitting the form', () => {
    cy.visit('pizza')
    cy.get('[data-cy="customer-name"]')
    .type('a')
      .should('have.value', 'a')
      .clear() 
      .type('ab') 
    cy.should('have.value', 'ab');
  })
})