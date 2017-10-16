
window.localStorage.setItem("age", "19");

window.localStorage.setItem("email", "cuck@cuckmail.com");

window.localStorage.setItem("Name",  "Ronnie McDonnie");

var age = localStorage.getItem("age");
var email = localStorage.getItem("email");
var Name = localStorage.getItem("Name")


	$("#age").text(age);
	$("#email").text(email);
	$("#Name").text(Name);


