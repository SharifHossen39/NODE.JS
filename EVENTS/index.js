const school = require("./school.js");

const School = new school();

School.on("bellRing", ({ period, message }) => {
  console.log(`${message} in ${period} period`);
});

School.startPeriod();
// ----------------------------------------------------------

// const events = require("events");

// const eventEmitter = new events();

// eventEmitter.on("scream", (msg) => {
//   console.log(msg);
// });
// eventEmitter.on("cry", (msg) => {
//   console.log(msg);
// });

// eventEmitter.emit("scream", "I hear scream");
// eventEmitter.emit("cry", "don't cry");

// ---------------------------------------------------------------------------------------------
