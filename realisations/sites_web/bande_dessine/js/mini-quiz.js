
// 1 seul code qui sert pour plusieurs mini quiz sur plusieurs pages...

// déclaration d'une variable
var repUtil

function initQuiz()
{   
	document.getElementsByName(nomGroupe).disabled = false;
	document.getElementById("message").innerHTML = "";
	document.getElementById("btnSubmit").disabled = false;
	document.getElementById("choix-" + bonneReponse).style.color = "#000";
	for (var i = 0; i < document.getElementsByName(nomGroupe).length; i++)
		{
			document.getElementsByName(nomGroupe)[i].disabled = false;
		}
	document.getElementById("formMiniQuiz").reset();
}

// Vérifie si un bouton radio est coché dans une question, 
function verifRadio()
{
	// msg referenceError : assignment to undeclared variable i / sans var devant le i
	for (var i = 0; i < document.getElementsByName(nomGroupe).length; i++)
	{
		if(document.getElementsByName(nomGroupe)[i].checked)
		{
			return true;
		}
	}
	return false;
}

function verifierReponse()
{
	 if (!verifRadio())
	 {
		 document.getElementById("message").innerHTML = "Veuillez répondre à la question.";
		 document.getElementById("message").style.color = "#f00";
		 document.getElementById("message").style.fontWeight = "normal";
	 }
	 else
	 {
		 if (bonneReponse == repUtil)
		 {
			document.getElementById("message").innerHTML = "Bravo ! Bonne réponse.";
			document.getElementById("message").style.color = "#090";
			document.getElementById("choix-" + bonneReponse).style.color = "#090";
		 }
		 else
		 {
			document.getElementById("message").innerHTML = "Désolé ! Mauvaise réponse.";
			document.getElementById("message").style.color = "#f00";
		 }
		 
		document.getElementById("message").style.fontWeight = "bold";
		document.getElementById("btnSubmit").disabled = true;
		
		for (var i = 0; i < document.getElementsByName(nomGroupe).length; i++)
		{
			document.getElementsByName(nomGroupe)[i].disabled = true;
			
		}
	 }
	 return false;
}




