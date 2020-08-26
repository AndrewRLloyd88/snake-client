const { stdout } = require("process");
// Stores the active TCP connection object.
let connection;

//handleUserInput registered as the "data" callback handler for stdin
const handleUserInput = (data) => {
  console.log(data)
  if (data === "\u0003") {
    process.exit();
  }

  // test experiment
  if(data === "w"){
    console.log('you hit the w key!')
    
  }

  if(data === "s"){
    console.log('you hit the s key!')
    
  }

  if(data === "a"){
    console.log('you hit the a key!')
    
  }

  if(data === "d"){
    console.log('you hit the d key!')
    
  }
};

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function (conn) {
  //were setting connection to conn
  connection = conn;
  const stdin = process.stdin;
  //without setRawMode(true) this just takes input in one line not individual keystrokes.
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //added on data event listener to handleUserInput
  stdin.on('data', handleUserInput) //handleUserInput is our callback
  return stdin;
}

module.exports = {setupInput}