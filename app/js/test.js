var Readable = require('stream').Readable;
var util = require('util');
var five = require('johnny-five');

util.inherits(Mystream, Readable);
function MyStream(opt){
	Readable.call(this, opt);
}
MyStream.prototype._read = function(){};
process.__defineGetter__('stdin',function(){
	if(process.__stdin){
		return process.__stdin;
	}
});

// var board = new five.Board();
var valueDiv = document.querySelector("#plantValue");
valueDiv.innerHTML = "Connecting to sensor";