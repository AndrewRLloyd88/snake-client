//refactoring the code to requre connect from client.js
//our const now uses ES6 syntax of importing an object
const { connect } = require("./client");
const { setupInput} = require("./input");
//our visual feedback
console.log('Connecting ...');
//run the connect function above
connect();

setupInput();