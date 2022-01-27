/* Tremel Guillaume */

/* ********* DÉCLARATION DES VARIABLES ********** */
/* VAR DÉCLARATION NOMBRE QUESTIONS */
var nbreQuestions = 10;


 //réponse des questions 
 var tabBonneRep = new Array();
 
 tabBonneRep[1] = "b";
 tabBonneRep[2] = "a";
 tabBonneRep[3] = "d";
 tabBonneRep[4] = "a";
 tabBonneRep[5] = "b";
 tabBonneRep[6] = "b";
 tabBonneRep[7] = "c";
 tabBonneRep[8] = "d";
 tabBonneRep[9] = "c";
 tabBonneRep[10] = "a";
 
 // variable qui contiendra les réponses de l'utilisateur 
 var tabRepUtil = new Array();
 
 var points = 0;
 /************* VARIABLE GLOBALE POUR POURCENTAGE égale à 0********/
 
 
// La plus grosse partie à faire par les étudiants...
// 1. fonction pour initialiser le Quiz
function initialiserQuiz()
{

	  	
	
	
	
	document.getElementById("form1").reset();
	document.getElementById('nom').focus();
	//permet le rollHover sur le texte
	rollHover = true;
	
	

}
// 2. fonction lors du survol du curseur sur un choix
function afficherSurvol(nomId)
{
	
	// si le rollhover est permis 
	if (rollHover == true)
	{
		document.getElementById(nomId).style.backgroundColor = "#009380"; 
		
		
		// mettre le curseur de la main
		document.getElementById("span-" + nomId).style.cursor = "pointer";
	}
}


// 3. fonction lors de la sortie du curseur sur le choix
function cacherSurvol(nomId)
{
	if (rollHover == true)
	{
		document.getElementById(nomId).style.backgroundColor = "#E6E6E6";  
		document.getElementById("span-" + nomId).style.cursor = "default";
	}
	
}


// 6. Vérifie si un des boutons radios est coché 
// Cette fonction est appelée pour chacune des questions 
// on ne demande pas de retourner sa valeur

function verifRadio(nomGroupe)
{
	var compteur = 0;		
			                     
	while (compteur < document.getElementsByName(nomGroupe).length)
	{
		if (document.getElementsByName(nomGroupe)[compteur].checked)
		{
			return true; //  1 bouton coché par questions
		}
						
		compteur++;
	}
	
	return false; // aucun coché
}




// 5. fonction pour valider si la question a été répondu
function validerQuestion()
{

	// variable pour vérifier que toutes les questions sont répondus
	var tousRepondu = true;
	
	// validation des boutons d'options pour chacun des numéros
	for(i= 1; i <= nbreQuestions; i++)
	{
		// q1 q2 q3 ...
		laQuestion = "q" + i;
		
		if (!verifRadio(laQuestion))
		{
			// il va y avoir un ajout à cette ligne de code : voir énoncé
			document.getElementById("erreurQuest" + i).innerHTML = "Vous n'avez pas répondu à la question.";
			
			// faux les quest. n'ont pas tous été répondu
			tousRepondu = false;
		}
		else
		{
			document.getElementById("erreurQuest" + i).innerHTML = "";
		}	
		
	}
	
	
	if (tousRepondu == false)
	{

		return false; // pas répondus
	}
	else
	{
		
		return true;  // tous répondus
	}
}




// 7. fonction pour afficher les réponses
function affReponses ()
{
	// bonne partie de ce qu'il y a ici va aider pour initialiser 
	
	
	// désactiver le champ nom 
	document.getElementById('nom').disabled = true;
	
	// récupère tout les éléments ayant comme nom de classe choix dans une variable de type tableau
	elemChoix = document.getElementsByClassName("choix");
	
	
	// boucle pour passer dans chacune des questions "i"
	for(i = 1; i <= nbreQuestions; i++)
	{
		// dans initialiser pas besoin du if car on augmente pas les points
		if (tabRepUtil[i] == tabBonneRep[i])
		{
			points++;
			
			// met une ligne verticale verte à gauche des lettres
			elemChoix[i - 1].style.borderLeft = "2px solid #093";
			
		}
		else
		{
			// dans init. on va avoir besoin de certains éléments du else mais sans le else en lui-même 
			
		
			elemChoix[i - 1].style.borderLeft = "2px solid #f00";
			
			
			document.getElementById(tabRepUtil[i] + i).style.color = "#FF0000"; 
			
			
			document.getElementById("span-" + tabRepUtil[i] + i).style.borderBottom = "dotted";
			
			
			document.getElementById("span-" + tabRepUtil[i] + i).style.fontWeight = "bold";
		}
		
		// HORS DE LA BOUCLE CAR ON FAIT AFFICHER LA BONNE REPONSE EN VERT DANS TOUT LES CAS
		document.getElementById(tabBonneRep[i] + i).style.color = "#006600"; 
	
		
		document.getElementById(tabBonneRep[i] + i).style.fontWeight = "bold";
		// BOUCLE À L'INTERIEUR D'UNE BOUCLE POUR PASSER SUR CHACUN DES BOUTONS RADIOS "J"
		for (j = 0; j < document.getElementsByName("q" + i).length; j++)
		{
			document.getElementsByName("q" + i)[j].disabled = true; 
			document.getElementById("btnCorriger").disabled = false;
		}
	} 

	
	pourcentage = Math.round((points / nbreQuestions) * 100);
	
	
	// AFFICHE dynamiquement les points et le pourcentage obtenu CODE À AJOUTER
	document.getElementById("resultat").innerHTML = "Vous avez obtenu la note de : " + points + "/" + nbreQuestions;
	
	// désactive le bouton Corriger 
	document.getElementById("btnCorriger").disabled = true;

	
	document.getElementById("btnCorriger").style.opacity = "0.5";
	
	document.getElementById("btnEnvoyer").disabled = false;

}



// 8. Enregistrer les information - Méthode de stockage
function memoriser()
{
	if (typeof localStorage != 'undefined' && JSON)	
	{
		localStorage.clear();
	
		// 1. récupérer la valeur du champ nom
		var nom = document.getElementById('nom').value;
		
		// 2. Enregistrer dans le localStorage identique à pourcentage...
										// clé      valeur							
		localStorage.setItem('nom', JSON.stringify(nom));
		
		// ici pas besoin de récupérer la valeur, car elle est déjà dans une variable
		
		localStorage.setItem('pourcentage', JSON.stringify(pourcentage));
		
		
		
		// déclaration de mon objet pour les réponses de l'user
		var objReponses = {};
		
		for (i = 1;i <= nbreQuestions; i++)
		{
			 objReponses["q" + i] = tabRepUtil[i];
		}
		
		console.log(objReponses);
		console.log(JSON.stringify(objReponses));
		
		// pour sérialiser ( former une chaine ) un objet JS 
		localStorage.setItem('reponses', JSON.stringify(objReponses));
		
		document.getElementById("message").innerHTML = "mémorisation effectuée.";
	
		
	}	
	else
	{
		// affiche dans la zone de msg
		document.getElementById("message").innerHTML = "Malheureusement, localStorage et/ou le JSON n'est pas supporté par votre navigateur.";
	
	}	
};

// 4. fonction principale appelée dans le html pour valider le formulaire
function validerQuiz()
{
	var erreur = false;
	
	// code pour valider le nom (comme les questions)
	function validerChampsTexte(nomId, txtErreur, pErreur)
		{ 
			var texte = document.getElementById(nomId).value;
			
			var modele = /^([A-ZÉÈÊËÎÏ]('[A-Z])?[a-zéèêëîïôç]+( |\-)?)+$/;
			
			if(!texte.match(modele))
			{
				document.getElementById("erreurNom").innerHTML = "Vous n'avez pas écrit votre prénom.";
				
				
				return false;
			}
			else
			{
				document.getElementById("erreurNom").innerHTML = "";
				return true;
			}
		}   
	// valider Questions
	if (!validerQuestion()) erreur = true;
	if (!validerChampsTexte("nom","nom","erreurNom")) erreur = true;
	if (erreur == false)
	{
		//quand tout est valide
		
		rollHover = false;
		// appel de fonction
		affReponses();
		
		memoriser();
		
	}
	
	return false; // empêche d'envoyer le formulaire  et de passer à la page suivante
	
}

/* *************** CODE POUR LA PAGE RÉSULTAT *********************** */


function affDate()
{
	
// laVariable pour former la date
	var newD = new Date();
	
	var day = newD.getDate();
	
	var month = newD.getMonth() + 1;
	
	var fullYear = newD.getFullYear();
	// lorsque la date est formée, identique au code pour le nom sauf pourles id et variables
	if (day < 10) day = "0" + month;
	if (month < 10) month = "0" + month;
	
	document.getElementById("info-date").innerHTML =(  day + "/" + month + "/" + fullYear );
	

	
	
}







// C. fonction pour afficher un message personnalisé selon le pourcentage obtenu
// déclaration de la fonction
function affMessage()
{
	var msg = "";
	
	if(pourcentage < 60)
	{
		msg = "Vous devriez vous cultiver un peu.";
		
	}
	else
	{
		if(pourcentage < 85)
		{
			msg = " Vous devriez vous cultiver d'avantage.";
		}
		else
		{
			if(pourcentage > 85)
			{
			msg = " Très bien joué.";
			}
			else
			{
				if(pourcentage == 10)
				{
					msg = " Parfait.";
				}	
			}	
		}	
	}
	
	document.getElementById("info-message").innerHTML = msg;

}	
	

	
	
	
// A. récupère les infos du web storage...
function affInfos()
{
	if (typeof localStorage != 'undefined' && JSON)
	{
		// important de var devant nom var il faut qu'il soit considéré comme une variable globale 
		nom = JSON.parse(localStorage.getItem('nom'));
		
		
		// aff. dynamique du nom dans le html
		document.getElementById('info-nom').innerHTML = nom;
		
		//aff. champ nom formulaire
		document.getElementById('nom').value = nom;
		
		document.getElementById('info-resultat').value = pourcentage;
		
		affDate();
		
		var key;
		
		var objReponses = JSON.parse(localStorage.getItem('reponses'));
		
		compteur = 1;
		
		for (key in objReponses)
		{
			if (objReponses.hasOwnProperty(key))
			{
				document.getElementById("cell-rep-util-" + compteur).innerHTML = objReponses[key];
				
				// données dans le champ du formulaire qui sera cachée
				document.getElementById("Q" + compteur).value = objReponses[key];
				
				if (objReponses[key]== tabBonneRep[compteur])
				{
					document.getElementById("cell-rep-util-" + compteur ).style.color = "#009900";
					
					
					
					document.getElementById("cell-pts-" + compteur).innerHTML = '1';
					
					document.getElementById("cell-icone-" + compteur).innerHTML = "<img src ='images/btnvalider1.png'>";
					
					points++;
				}
				else
				{
					document.getElementById("cell-rep-util-" + compteur).style.color = "#FF0000";
					
				
					document.getElementById("cell-pts-" + compteur).innerHTML = '0';
				
					document.getElementById("cell-icone-" + compteur).innerHTML = "<img src ='images/btnvalider2.png'>";
				}
				
				
				document.getElementById("cell-rep-util-" + compteur ).style.fontWeight = "bold";
				 
				
				document.getElementById("cell-bonne-rep-" + compteur ).style.fontWeight = "bold";
				compteur ++;
			}
			
	
			
		}
		
		
		
		//appel de la fonction pour afficher un message personnalisée
		affMessage();
		
		
		// ne pas oublier d'utiliser la variable globale
		document.getElementById("cell-total-pts").innerHTML = points + "/" + nbreQuestions;
		document.getElementById("info-message").innerHTML = points + "/" + nbreQuestions;
	}
	else
	{
		// affiche dans la zone de msg
		document.getElementById("message").innerHTML = "Malheureusement, localStorage et/ou le JSON n'est pas supporté par votre navigateur.";
	}
	
}



// D. fonction qui permet d'envoyer les données selon le destinataire choisi
function envoyerResultats()
{
	var choix = document.getElementById("destinataire").value;
	
	
	if (choix== "Anne-Stephanie Lebrun") document.getElementById("form-resultats").action = "mailto:lebrunas@cgmatane.qc.ca?subject=Résultats du quiz de: Anne-Stephanie Lebrun";
	
	if (choix== "Claudine Billette") document.getElementById("form-resultats").action = "mailto:billetec@cgmatane.qc.ca?subject=Résultats du quiz de: Claudine Billette";
	
	if (choix== "Dany Raymond") document.getElementById("form-resultats").action = "mailto:narutosama11@hotmail.com?subject=Résultats du quiz de: Dany Raymond ";
	
	if (choix== "Guillaume Tremel") document.getElementById("form-resultats").action = "mailto:guiguitre@hotmail.com?subject=Résultats du quiz de: Guillaume Tremel";
	
	

	document.getElementById("confirmation").innerHTML= "Votre résultat a bien été envoyé.";
}



