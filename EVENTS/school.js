const EventEmitter = require("events");

const emitter = new EventEmitter();

class school extends EventEmitter {
  startPeriod() {
    console.log("Class starts...");
    setTimeout(() => {
      this.emit("bellRing", {
        period: "second",
        message: "Ring the bell",
      });
    }, 3000);
  }
}

module.exports = school;
