# api-tests
fakeRestApi



## Para utilizar o projeto seguir os passos abaixo

### Possuir um editor de texto (para instalar  o Visual Studio Code)
```
> sudo apt install code
```
### Comando para criar um Projeto Node:
```
> npm init -y
```
## Para instalar o cypress com a última versão disponível com dependencia dev:
```
> npm install -D cypress
```   
## Para instalar o cypress na versão específica do projeto:
```
> npm install cypress@8.4.1
```    
## Configurar o arquivo "package.json" para abrir o cypress:
```
>   "cypress:open": "./node_modules/.bin/cypress open",
    "cypress:run": "cypress run --spec cypress/integration/services/books/tests/*"
```   

## Para executar o script que abre o cypress:
```
 > npm run cypress:open
  ```  

## Para executar sem o script no terminal:

```
> npm run cypress:run
```


<a>2. Exemplo </a>
```
cy.request({                                         
   method: 'GET',
   url: '/login',
   body: {
   nome: 'teste',
   senha: '123456',
 },
}).then((response) => {
        expect(response.body).to.have.property('message')
        expect(response.status).to.eq(200)})
 ``` 

### Developed

- [x] Test de Api

<h4 align="center"> 
	 Status 🚀 Finalizado 
</h4>
