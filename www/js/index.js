function updateDisplay() {
	$("#age").text(window.localStorage.GetItem("age");
	$("#email").window.localStorage.GetItem("email");
	$("#Name").window.localStorage.GetItem("Name");
}

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

updateDisplay();