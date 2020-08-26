//refactoring the code to requre connect from client.js
//our const now uses ES6 syntax of importing an object
const { connect } = require("./client");
//our visual feedback
console.log('Connecting ...');
//run the connect function above
connect();