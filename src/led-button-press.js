var led = require('@amperka/led')
  .connect(P1);

var button = require('@amperka/button')
  .connect(P3);

function onButtonPress() {
  led.toggle();
}

button.on('press', onButtonPress);