/// <reference types="cypress" />

import * as GETBooks from '../requests/GETBooks.request';

describe('GETBooks', () => {
it('Listar todos os livros', () => {
  GETBooks.allBooks().should((response) =>{
    cy.log(response.status)
    cy.log(response.statusText)
    cy.log(response.body)

    expect (response.status).to.eq(200) //esperava que 200 fosse igual a 200
    expect (response.body).to.be.not.null;  //retorno nao pode ser nulo
  })
});  
});

describe('other', () => {
  
  it('testing', () => {
       cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=available',
        failOnStatusCode: false,

    }).then((response) => {
        expect(response.status).to.eq(200)
      
    })

})




  });

