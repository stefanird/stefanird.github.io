//creates an alert
alert('Hello world');

/* 
This is a
multi-line comment
*/

function openMenu() {
	var x = document.getElementById("portfolioTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
		}
	else {
		x.className = "topnav";
		}
	}
