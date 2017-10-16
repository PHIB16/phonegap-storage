
window.localStorage.setItem(
"age", 
 "19"
);

window.localStorage.setItem(
"email", 
 "cuck@cuckmail.com"
);

window.localStorage.setItem(
"Name", 
 "Ronnie McDonnie"

);
function updateDisplay(){
	$("#age").text(window.localStorage.getItem("age"));
	$("#email").text(window.localStorage.getItem("email"));
	$("#Name").text(window.localStorage.getItem("Name"));
}

    
updateDisplay();