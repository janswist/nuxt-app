describe('Todo App', () => {
  const todo = 'Groceries'
  const date = /\d{1,2}\/\d{1,2}\/\d{4}/

  it('successfully adds and removes todo list item', () => {
      cy.visit('/')
  
      cy.get('input[name="newtodo"]')
        .type(todo)
        .type('{enter}')
      
      cy.contains(todo)
      cy.contains(date)
      
      cy.get('.item')
        .contains(todo)
        .get('.delete-button')
        .click()

      cy.contains(todo).should('not.exist')
  })  
})