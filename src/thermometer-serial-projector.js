var thermometer = require('@amperka/thermometer')
  .connect(A4);

setInterval(function() {
  var celsius = thermometer.read('C');

  console.log(
    '<div style="font-size: .5em">',
      'Температура',
    '</div>',
    celsius.toFixed(1),
    '℃'
    );
}, 1000);