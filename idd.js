// Express server on port 3000
// const express = require('express');

// return the current time in the format "HH:MM:SS"
function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return console.log(`${hours}:${minutes}:${seconds}`);
};
// cal the getTime function every second
setInterval(getTime, 1000);

// This code was written with the help of github copilot