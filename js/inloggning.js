// Här tar man sig vidare om man fyller in lösenordet admin 
let passSave = "admin";

// 3 försök 
let passCount = 1;
let passMax = 3;

// från onsubmit
function checkPass() {

	
	// här hämtar vi både form namnet och namnet i imputen det som är i form för lösenord
	let passWord = document.forms["formName"]["password"].value;
	

	//kontroll om vi är under 3 försök
	if (passCount <= passMax) {

		// kontroll om lösenordet inte är rätt
		if (passWord != passSave) {
			console.log(passCount);
			// en var för att ha koll på antalet försök
			var attemptsLeft = 4 - passCount;

			//meddela hur många gånger man försök
			document.getElementById("passStatus").innerHTML = "Du har " + attemptsLeft + " försök kvar";

			// uppdatera räckningen för varje gång det är fel lösenord 
			passCount++;

			// retunera falsk så att submit action inte körs 
			return false;
		} else {
			//Om nått finns i lösenordet , retunera sant så att submit action händer 
			
			document.cookie = "username="+document.forms["formName"]["inputEmail"].value;
			return true;
		}

	} else {
		// Info med hur det går för en
		document.getElementById("passStatus").innerHTML = "Försök igen";
		
		document.getElementById("passStatus").style.color = "tomato";
		return false;

	}
}

function makeCookie() {
	
	document.cookie = ("username=Anna Star"); // "inputEmail" ?
	
	console.log("cookie made"); 
	
}


