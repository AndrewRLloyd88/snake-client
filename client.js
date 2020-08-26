//A Seperate Module for The TCP (Transmission Control Protocol) Connection

//require the net package
const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  //event handler for data to handle incoming data and console log it to our client
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  //connect event handler on connect - when establish a connection to the server
  conn.on('connect', () => {
    console.log("Successfully connected to the game server.")
    conn.write('Name: ARL');
  });

//return conn
  return conn;
}

//exporting the connect function in an object
module.exports = {connect};
