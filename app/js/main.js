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

board.on("ready",function(){
	var sensor = new five.Sensor({
		pin: "A0",
		freq: 250,//emit data every 250ms
		threshold: 2
	});

	sensor.on("change", function(){
		var sensorInfo = this.value;

		Number.prototype.map = function (in_min, in_max, out_min, out_max) {
		  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
		}

		valueDiv.innerHTML = sensorInfo.map(1023,400,0,100);
		// wet 400 dry 1023
		// JS mapping or re-maping
	});
});