/// <reference types="cypress" />
function deleteBook(idBook) {
  return cy.request({
    method: 'DELETE',
    url: 'Books/1',
    failOnStatusCode: false
  })
}

export { deleteBook };