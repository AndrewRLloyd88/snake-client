//A Seperate Module for The TCP (Transmission Control Protocol) Connection

//require the net package
const net = require('net');
const {IP, PORT} = require('./constants')

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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
module.exports = { connect };





//test movement code
// setInterval(() => {
//   conn.write('Move: up')
// }, 1000);
// setInterval(() => {
//   conn.write('Move: down')
// }, 50);
// conn.write('Move: up')
// setTimeout(() => {
//   conn.write('Move: left')
// }, 50);
// setTimeout(() => {
//   conn.write('Move: right')
// }, 50);
// conn.write('Move: left')
// conn.write('Move: left')