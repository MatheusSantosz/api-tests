/// <reference types="cypress" />

import * as POSTBooks from '../requests/POSTBooks.request';


context('POST Books', () => {
  it('Adicionar um novo livro', () => {
    POSTBooks.addBook().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq("Livro de Historia");
      expect(response.body.description).to.eq("Livro 1");
      expect(response.body.pageCount).not.to.equal('3');
      expect(response.body.excerpt).to.eq("string");
      expect(response.body.publishDate).to.eq("2021-09-21T23:33:44.605Z");

      
    })
  });
});