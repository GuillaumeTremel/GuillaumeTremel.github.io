var nbreImages = 10;

var tabTxtBanniere = new Array();

tabTxtBanniere[1] = "Islande - Seljalandsfoss";
tabTxtBanniere[2] = "Islande - Seljalandsfoss";
tabTxtBanniere[3] = "États-Unis - Cascade gorge Porcupine";
tabTxtBanniere[4] = "Liban - Gouffre des trois ponts";
tabTxtBanniere[5] = "Croatie -Plitvice";
tabTxtBanniere[6] = "Arizona - Chutes d'Havasu ";
tabTxtBanniere[7] = "Venezuela - Salto Angel";
tabTxtBanniere[8] = "Zimbabwe - Victoria";
tabTxtBanniere[9] = "Islande - Seljalandsfoss";
tabTxtBanniere[10] = "Roumanie - Bigar";

function affBanniere()
{
	nbreAleatoire = Math.floor((Math.random() * nbreImages) + 1);
	document.write('<img id="banniere" src="images/bannieres/banniere' + nbreAleatoire + '.jpg" alt="' + tabTxtBanniere[nbreAleatoire] + '" />' + '<div id="texte-entete">' + tabTxtBanniere[nbreAleatoire] + '</div>');
}

function initForm()
{
	document.getElementById("form1").reset();
	document.getElementById("Nom").focus();
}

function validerCivilite()
{
	
	var compteur = 0;
	
	while (compteur < document.getElementsByName("civilite").length)
	{
		if (document.getElementsByName("civilite")[compteur].checked)
		{
			document.getElementById("erreurCivilite").innerHTML = "";
			return true;
		}
		
		compteur++
	}
	
	document.getElementById("erreurCivilite").innerHTML = "Veuillez séléctionner votre civilité. ";
	return false;
}


function validerChampsTexte(nomId, txtErreur, pErreur)
{
	champ = document.getElementById(nomId);
	
	if (champ.value == "")
	{
		document.getElementById(pErreur).innerHTML = ' Veuillez entrez votre ' + txtErreur + '.';
		
		return false;
	}
	else
	{
		document.getElementById(pErreur).innerHTML = "";
		return true;
	}
}

function envoieFormulaire()
{
	var sujet = document.getElementById("sujet").value;
	
	document.getElementById("form1").action = "mailto:billettec@cgmatane.qc.ca?cc=guiguitre@hotmail.com?&amp;subject=" + sujet;
	window.location.reload();
}

function validerForm()
{
	var erreur =  false;
	
	if (!validerCivilite()) erreur = true;
	if (!validerChampsTexte("nom", "nom", "erreurNom")) erreur = true;
	if (!validerChampsTexte("ville", "ville", "erreurVille")) erreur = true;
	if (!validerChampsTexte("courriel", "courriel", "erreurCourriel")) erreur = true;
	if (!validerChampsTexte("sujet", "sujet", "erreurSujet")) erreur = true;
	if (!validerChampsTexte("message", "message", "erreurMessage")) erreur = true;


	if ( erreur == false)
	{
		envoieFormulaire();
		return true;
	}	
	else return false;
}