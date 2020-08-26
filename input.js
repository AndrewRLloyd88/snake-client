const { stdout } = require("process");
// Stores the active TCP connection object.
let connection;

//handleUserInput registered as the "data" callback handler for stdin
const handleUserInput = (data) => {
  // console.log(data)
  if (data === "\u0003") {
    process.exit();
  }

  // test experiment
  if(data === "w"){
    // console.log('you hit the w key!')
    //passing the string "Move: up"
    connection.write("Move: up");
  }

  if(data === "s"){
    // console.log('you hit the s key!')
    connection.write("Move: down");
  }

  if(data === "a"){
    // console.log('you hit the a key!')
    connection.write("Move: left");
  }

  if(data === "d"){
    // console.log('you hit the d key!')
    connection.write("Move: right");
  }

  if(data === "r"){
    // console.log('you hit the d key!')
    connection.write("Say: Go Snake Go!");
  }

  if(data === "q"){
    // console.log('you hit the d key!')
    connection.write("Say: Must get the precious....!");
  }
};

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
//setUpInput is now capable of taking in a parameter conn 
//connection is set equal to conn;
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