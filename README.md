# React Redux Calculator

Uma calculadora simples, desenvolvida com React e Redux. O objetivo é entender o funcionamento do Redux.

Esse peojeto foi criado com [Create React App](https://github.com/facebook/create-react-app), usando o template TS com [Redux](https://redux.js.org/) e [Redux Toolkit](https://redux-toolkit.js.org/).

## Scripts

No diretório do projeto, você pode executar:

### `yarn start`

Executa o projeto em modo de desenvolvimento.\
Acesse [http://localhost:3000](http://localhost:3000) para viasualizar no browser.

### `yarn test`

Roda os testes no modo "watch".

### `yarn build`

Compila o projeto para produção, na pasta "build".\

## To Do

  - [x] Formulas não podem terminar em operadores.
  - [x] Formulas não podem terminar com pontos.
  - [x] Não pode ser possível calcular uma fórmula vazia.
  - [x] Deve ser possível inserir um número negativo.
  - [x] Uma fórmula não pode começar com um operador.
  - [x] Deve ser possível substítuir um operador no final de uma fórmula.
  - [x] Se a fórmula estiver vazia e existir um resultado, deve ser possível inserir esse resultado no inicio da próxima fórmula.
  - [x] Não pode ser possível inserir duas ou mais pontos consecutivos.
  - [x] Um zero deve ser inserido à esquerda de pontos no começo da fórmula e depois de operadores.
  - [x] Deve ser possível remover o último caractere da fórmula.
  - [x] Caso o último caractere da fórmula seja ")", ao remover o ultimo caractere, remover o ultimo número completamente.
