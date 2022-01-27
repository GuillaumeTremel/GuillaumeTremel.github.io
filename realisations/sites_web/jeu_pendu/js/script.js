


var motSecret;
var tabLettresMot = new Array(); 
var tailleMot;
var coupsManques = 0;
var lettresTrouvees = 0;
var fini = false;

var tabMots = new Array();

tabMots [0] = "HARRY POTTER";
tabMots [1] = "RON WEASLEY";
tabMots [2] = "HERMIONE GRANGER";
tabMots [3] = "DRACO MALEFOY";
tabMots [4] = "VOLDEMORT";
tabMots [5] = "DUMBLEDORE";
tabMots [6] = "NEVILLE LONDUBAT";
tabMots [7] = "PETER PETTIGROW";
tabMots [8] = "AZKABAN";
tabMots [9] = "DOLORIS";
tabMots [10] = "IMPERIUM";
tabMots [11] = "AVADA KEDAVRA";



nbreAleatoire = Math.floor(Math.random() * tabMots.length);


motSecret = tabMots[nbreAleatoire];

tailleMot = motSecret.length;


var tabIndice = new Array ();

tabIndice[0] = "Héro de la série, le garçon qui a survécu.";
tabIndice[1] = "Personnage principal, ayant 2 frères jumeaux , 2 autres frères et une soeur.";
tabIndice[2] = "Personnage principal, ayant des parents moldus, deuxième personne la plus proche du héro.";
tabIndice[3] = "Personnage principal, cheveux blond, appartient à une famille qui a toujours était à Serpentard.";
tabIndice[4] = "Mage Noire dont son âme a était découpé en 8 morceaux.";
tabIndice[5] = "Directeur de Poudlard et le plus puissant mage de cette décennie.";
tabIndice[6] = "Gryffondor maladroit dont ses parents ont étaient tués par Bellatrix Lestrange .";
tabIndice[7] = "Traitre de la famille Potter et animal de l'avant dernier enfant de la famille Weasley.";
tabIndice[8] = "Prison gardée par les détraqueurs.";
tabIndice[9] = "Sort interdit permettant de torturer physiquement un être vivant.";
tabIndice[10] = "Sort interdit permettant de mettre la victime sous le contrôle de l'auteur du sort.";
tabIndice[11] = "Sort interdit provoquant la mort instantanée à la victime de ce sort.";


function recommencerJeu()
{
	location.reload();
}		
function afficherIndice()
{
	                                                      
	document.getElementById("zone-indice").innerHTML = "<strong>Indice</strong>: <br /> " + tabIndice[nbreAleatoire];
	document.getElementById("zone-indice").style.visibility = "visible";	  
}	
function cacherIndice()
{
	document.getElementById("zone-indice").innerHTML = "&nbsp;";
	
	document.getElementById("zone-indice").style.visibility = "hidden";	
}

function affLettres()
{
		document.write("<table><tr>");
	
		for ( i= 0; i < tailleMot; i++)
		{
		
			
			document.write('<td><p id="lettre' + i + '">' + motSecret.charAt(i) + '</p></td>');
		}
		document.write("</tr></table>");
		
		for (i = 0; i< tailleMot; i++)
			
		{
				tabLettresMot[i] = document.getElementById("lettre" + i);
		}
}

function changeCouleur(element, couleur)
{
	element.style.backgroundColor = couleur;
}

function choisir(element)
{	
	if (element.style.backgroundColor == "rgb(255, 0, 51)" || element.style.backgroundColor == "rgb(0, 204, 0)" || fini) 
	{
		return;	
	}
	
	var lettre = element.innerHTML;
	 
	changeCouleur(element, "#00CC00");
	
	var trouve = false;
	
	for (i = 0; i< tailleMot; i++)
	{
		
		if (tabLettresMot [i].innerHTML == lettre)
		{
			tabLettresMot[i].style.visibility = "visible";
			
			trouve = true;
			lettresTrouvees++;
			
		}
	}

	if (!trouve)
	{
		if (element.style.backgroundColor == "#FF0033" || fini)
	{
		return;	
	}
	
	var lettre = element.innerHTML;
	
	changeCouleur(element, "#FF0033");
	
	var trouve = false;
	
	for (i = 0; i< tailleMot; i++)
	{
		
		if (tabLettresMot [i].innerHTML == lettre)
		{
			tabLettresMot[i].style.visibility = "visible";
			
			trouve = true;
			lettresTrouvees++;
			
		}
	}
		coupsManques++;
		
		document.images["pendu"].src= "images/jeu-pendu/pendu-" + coupsManques + ".jpg";
		
		if (coupsManques == 9)
		{
				 
				 document.getElementById("zone-message").innerHTML = "Vous avez échoué moldu!";	 
			for ( i = 0; i < tailleMot; i++)
			{
				tabLettresMot [i].style.visibility = "visible";
			}
			
			fini = true;
		}
	}
	
	if  (lettresTrouvees == tailleMot)
	{
		
		document.getElementById("zone-message").innerHTML = "Félicitation sorcier!";	 
		
		fini = true;
	}
}


























