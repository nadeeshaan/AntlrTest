var Listener = require('../generated-parser/NELListener');

function TestListener() {
    Listener.NELListener.call(this); // inherit default listener
    return this;
}

TestListener.prototype = Object.create(Listener.NELListener.prototype);
TestListener.prototype.constructor = TestListener;

TestListener.prototype.enterScript = function(ctx) {
    console.log("DDD FFFF GGGG");
};

exports.TestListener = TestListener;