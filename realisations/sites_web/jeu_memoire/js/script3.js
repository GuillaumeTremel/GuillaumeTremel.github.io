var nbreImages = 4;

var tabTxtBanniere = new Array();




var motSecret;
var tabLettresMot = new Array(); 
var tailleMot;
var coupsManques = 0;
var lettresTrouvees = 0;
var fini = false;

var tabMots = new Array();


tabTxtBanniere[1] = "Gon";
tabTxtBanniere[2] = "Killua";
tabTxtBanniere[3] = "Leorio";
tabTxtBanniere[4] = "Kurapika";



tabMots [0] = "ALL MIGHT";
tabMots [1] = "JIRAIYA";
tabMots [2] = "KAMÉ SENNIN";
tabMots [3] = "KORO SENSEI";
tabMots [4] = "BISCUIT KRUEGER";
tabMots [5] = "GENKAI";
tabMots [6] = "IZUMI CURTIS";
tabMots [7] = "KISUKE URAHARA";
tabMots [8] = "FRANKEN STEIN";
tabMots [9] = "DOLORIS";
tabMots [10] = "IMPERIUM";
tabMots [11] = "AVADA KEDAVRA";



nbreAleatoire = Math.floor(Math.random() * tabMots.length);


motSecret = tabMots[nbreAleatoire];

tailleMot = motSecret.length;




function affBanniere()
{
	nbreAleatoire = Math.floor((Math.random() * nbreImages) + 1);
	document.write('<img id="banniere" src="images/bannieres/banniere' + nbreAleatoire + '.jpg" alt="' + tabTxtBanniere[nbreAleatoire] + '" />' + '<div id="texte-entete">' + tabTxtBanniere[nbreAleatoire] + '</div>');
}

function recommencerJeu()
{
	location.reload();
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
				 
				 document.getElementById("zone-message").innerHTML = "Échec!";	 
			for ( i = 0; i < tailleMot; i++)
			{
				tabLettresMot [i].style.visibility = "visible";
			}
			
			fini = true;
		}
	}
	
	if  (lettresTrouvees == tailleMot)
	{
		
		document.getElementById("zone-message").innerHTML = "Bien joué!";	  
		
		
		fini = true;
	}
}






























