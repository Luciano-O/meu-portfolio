# PROJECT BLAH BLAH

## Requisitos

Para desenvolvimento, você precisa apenas do Node instalado.

### Node

[Node](http://nodejs.org/) É fácil de instalar e hoje já contem o [NPM](https://npmjs.org/).
Caso a instalação seja concluída com sucesso você deve conseguir utilizar o comando abaixo.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

---

## Instalação

    $ git clone https://github.com/ORG/PROJECT.git
    $ cd PROJECT
    $ npm install

## Iniciar

    $ npm start

## Build simples para produção

    $ npm run build

---

## Languages & tools

### HTML

### JavaScript

- [JSHint](http://www.jshint.com/docs/) is used to prevent JavaScript error.
- [JSCS](https://npmjs.org/package/jscs) is used to check coding conventions.
- [Browserify](http://browserify.org/) to handle allow us to write our client-side scripts with [es6 syntax](http://es6.github.io/) thanks to [es6ify](https://github.com/thlorenz/es6ify).
- [React](http://facebook.github.io/react) is used for UI.

### CSS

- [cssnext]

### Static server with Livereload

The app embed for development a static connect server with livereload plugged.
So each time you start the app, you get automatic refresh in the browser whenever you update a file.