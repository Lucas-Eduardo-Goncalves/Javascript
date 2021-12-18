# Introdução

## O que veremos nesse modulo?
Uma introdução a paginas web com javascript

### Boas Práticas
  1° - Nunca utilizar a função `document.querySelector("<h1>");` buscando uma teg, e sim uma classe `.<suaClasse>` ou pelo id `#<seuId>`.
  2° - Ter um arquivo para o javascript, para css, para html.
   

### Alguns Comandos na DOM
  `document.querySelector("<h1>");` Vai trazer todos os h1 na seu documento em execução atual.
  
  Mudando o conteudo de texto de uma teg:
  ```js
    var titulo = document.querySelector('h1');
    titulo.textContent = 'Banana'
  ```