var Readable = require('stream').Readable  
var util = require('util')  
var five = require('johnny-five')

util.inherits(MyStream, Readable)  
function MyStream(opt) {  
  Readable.call(this, opt)
}
MyStream.prototype._read = function() {};  
// hook in our stream
process.__defineGetter__('stdin', function() {  
  if (process.__stdin) return process.__stdin
  process.__stdin = new MyStream()
  return process.__stdin
})


var board = new five.Board();
var valueDiv = document.querySelector("#plantValue");
valueDiv.innerHTML = "Connecting to sensor";

board.on("ready",function(){
	var sensor = new five.Sensor({
		pin: "A0",
		freq: 2500,//emit data every 250ms
		threshold: 2
	});

	var sensor2 = new five.Sensor({
		pin: "A2",
		freq: 250,//emit data every 250ms
		threshold: 2
	});

	sensor.on("change", function(){
		var sensorInfo = this.value;

		Number.prototype.map = function (in_min, in_max, out_min, out_max) {
		  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
		}

		graphValue = Math.floor(sensorInfo.map(1023,400,0,100));
		valueDiv.innerHTML = "";
		// wet 400 dry 1023
		// JS mapping or re-maping
		var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		    type: 'doughnut',
		    data: {
		        datasets: [{
		            label: 'moisture levels',
		            data: [graphValue,100-graphValue],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],////
		            display:[
		            'false',
		            'no border'
		            ],
		            borderWidth: 1
		        }]
		    }
		});
	});

	sensor2.on("change", function(){
		var sensorInfo = this.value;

		Number.prototype.map = function (in_min, in_max, out_min, out_max) {
		  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
		}

		graphValue = Math.floor(sensorInfo.map(1023,0,0,100));
		valueDiv.innerHTML = "";
		// wet 400 dry 1023
		// JS mapping or re-maping
		var ctx = document.getElementById("myChart2");
		var myChart = new Chart(ctx, {
		    type: 'doughnut',
		    data: {
		        datasets: [{
		            label: 'light levels',
		            data: [graphValue,100-graphValue],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            display:[
		            'false',
		            'no border'
		            ],
		            borderWidth: 1
		        }]
		    }
		});
	});
});