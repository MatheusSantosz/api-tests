//verbo/metodo - endpoint . motivo(request) . extensao
/// <reference types="cypress" />
function allBooks() {
  
  return cy.request({
    method: 'GET',
    url: 'Books',
    failOnStatusCode: false,
  })
}

export { allBooks }; //exportar para utilizar em outro lugar
///dentro do request adicionando metodo
//function normal e em baixo eu retorno o return
 /// failOnStatusCode: false quando uma requisicao nao for 200 ele nao quebrar o test
