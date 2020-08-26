//refactoring the code to requre connect from client.js
//our const now uses ES6 syntax of importing an object
const { connect } = require("./client");
//our visual feedback
console.log('Connecting ...');
//run the connect function above
connect();


//handleUserInput registered as the "data" callback handler for stdin
const handleUserInput = (data) => {
  console.log(data)
  if (data === "\u0003") {
    process.exit();
  }

  //test experiment
  // if(data === "\u0062" || data === "b"){
  //   console.log('you hit the b key!')
  // }
};

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function () {
  const stdin = process.stdin;
  //without setRawMode(true) this just takes input in one line not individual keystrokes.
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //added on data event listener to handleUserInput
  stdin.on('data', handleUserInput) //handleUserInput is our callback
  return stdin;
}

setupInput();