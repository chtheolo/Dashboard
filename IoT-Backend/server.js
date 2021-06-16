const express = require('express');
const cors = require('cors');
const config = require('./config');

var app = express();
app.use(cors());

/*---wifi service gets sensor data from drone when drone reach the Ground Station.---*/

var date = new Date();
var measurements = [
    {
      'date': date.setDate(date.getDate() + 50),
      'sensor_data': 2.3
    },{
      'date': date.setDate(date.getDate() + 50),
      'sensor_data': 3.5
    },{
      'date': date.setDate(date.getDate() + 50),
      'sensor_data': 4.6
    },{
      'date': date.setDate(date.getDate() + 50),
      'sensor_data': 5.8
    },{
      'date': date.setDate(date.getDate() + 50),
      'sensor_data': 1.6
    },{
      'date': date.setDate(date.getDate() + 50),
      'sensor_data': 1.9
    },{
      'date': date.setDate(date.getDate() + 50),
      'sensor_data': 2.5
    },{
      'date': date.setDate(date.getDate() + 50),
      'sensor_data': 4.7
    },
];

  var i=0;
 //EXPRESS REST API
app.get('/gas', function (req, res) {
  i = i%measurements.length;
  res.write(JSON.stringify(measurements[i]));
  i++;
  res.end();
});


app.get('/gas_all', function (req, res) {
  res.write(JSON.stringify(measurements));
  res.end();
});

app.listen(config.webserver.port, function () {
    console.log('Air6Systems API listening on port ' + config.webserver.port +'!');
});