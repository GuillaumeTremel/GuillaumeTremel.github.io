var nbreMini = 10;

var noImageEnCours = 1;

var noImagesMax = 10;

var tabImgDiapo = new Array(10); 


var nbreMini2 = 10;

var noImageEnCours2 = 1;

var noImagesMax2 = 10;

var tabImgDiapo2 = new Array(10); 


function preChargerImages() 
{
	for (i = 1; i <= 10; i++)
	{
		var imgDiapo = new Image();
		
		imgDiapo.src = "images/diaporama/img" + i +".jpg";
		
		tabImgDiapo[i] = imgDiapo;
	}
}

function preChargerImages2() 
{
for (i = 1; i <= 10; i++)
	{
		var imgDiapo2 = new Image();
		
		imgDiapo2.src = "images/diaporama2/img" + i +".jpg";
		
		tabImgDiapo2[i] = imgDiapo2;
	}
}

tabInfosDiapo = new Array(10)	

tabInfosDiapo[1] = "Batman";
tabInfosDiapo[2] = "Blade";
tabInfosDiapo[3] = "Captain America";
tabInfosDiapo[4] = "Daredevil";
tabInfosDiapo[5] = "Hulk";
tabInfosDiapo[6] = "Tahu";
tabInfosDiapo[7] = "Kopaka";
tabInfosDiapo[8] = "Onua";
tabInfosDiapo[9] = "Pohatu";
tabInfosDiapo[10] = "Lewa";

tabInfosDiapo2 = new Array(10)	

tabInfosDiapo2[1] = "Lelouch";
tabInfosDiapo2[2] = "Light";
tabInfosDiapo2[3] = "Spawn";
tabInfosDiapo2[4] = "Itachi Uchiha";
tabInfosDiapo2[5] = "Deadpool";
tabInfosDiapo2[6] = "Punisher";
tabInfosDiapo2[7] = "Rorshack";
tabInfosDiapo2[8] = "Alucard";
tabInfosDiapo2[9] = "Guts";
tabInfosDiapo2[10] = "Lobo";

/********** INITIALISATION ************/
function initDiapo()
{
	preChargerImages(); 
	preChargerImages2(); 
}

/********** AFFICHE DIAPO**********/
function affDiapo(indice)
{
	document.getElementById("diaporama").src = tabImgDiapo[indice].src;
	document.getElementById("infos").innerHTML = tabInfosDiapo[indice];
}


function affDiapo2(indice)
{
	document.getElementById("diaporama2").src = tabImgDiapo2[indice].src;
	document.getElementById("infos2").innerHTML = tabInfosDiapo2[indice];
}	
/********** FLECHES DU DIAPO **********/

function affImagePrecedente()
{
	if (noImageEnCours > 1 )
	{
		 noImageEnCours--
 affDiapo(noImageEnCours)	
	}
	
	if (noImageEnCours2 > 1 )
	{
		 noImageEnCours2--
 affDiapo2(noImageEnCours2)		
	
	}			
}

function affImageSuivante()
{
	if (noImageEnCours < noImagesMax )
	{
		 noImageEnCours++
		affDiapo(noImageEnCours);		
	}
	
	if (noImageEnCours2 < noImagesMax2 )
	{
		 noImageEnCours2++
		affDiapo2(noImageEnCours2);		
	}
}	

/************ CHANGE DIAPO LORS DU CLIQUE SUR MINIATURE ************/
function changerDiapo(indice)
{
	noImageEnCours = indice;
	affDiapo(noImageEnCours);
	
	noImageEnCours2 = indice;
	affDiapo2(noImageEnCours2);
}

