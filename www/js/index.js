var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
//EVENT LISTENER
document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}


// device APIs are available
//

//EVENT HANDLER
    function onDeviceReady() {
	
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
    }

//EVENT HANDLER
    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	
//EVENT HANDLER
    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
    }
