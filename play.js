//refactoring the code to requre connect from client.js
//our const now uses ES6 syntax of importing an object
const { connect } = require("./client");
const { setupInput} = require("./input");
//our visual feedback
console.log('Connecting ...');
//run the connect function above

//conn is your connection object
//we are just setting this ourselves!
conn = connect();
// console.log(conn)

//send write commands
//we are passing our connection object into setUpInput
setupInput(conn);