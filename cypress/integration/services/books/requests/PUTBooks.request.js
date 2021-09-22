/// <reference types="cypress" />

const payloadChangeBook = require('../payloads/change-book.json')

function changeBook(idBook) {
  return cy.request({
    method: 'PUT',
    url: `Books/${1}`,
    headers: {
      'Content-Type': 'application/json',  
    },
    failOnStatusCode: false,
    body: payloadChangeBook
  })
}

export { changeBook };