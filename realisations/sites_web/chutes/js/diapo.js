var nbreMini = 15;

var noImageEnCours = 1;

var noImagesMax = 15;

var tabImgDiapo = new Array(15); 


function preChargerImages() 
{
	for (i = 1; i <= 15; i++)
	{
		var imgDiapo = new Image();
		
		imgDiapo.src = "images/diaporama/img" + i +".jpg";
		
		tabImgDiapo[i] = imgDiapo;
	}
}

tabInfosDiapo = new Array(15)	

tabInfosDiapo[1] = "Argentine - Chute Izague";
tabInfosDiapo[2] = "Islande - Litlanesfoss";
tabInfosDiapo[3] = "Chine et Vietnam - Detian";
tabInfosDiapo[4] = "Etats-Unis - Multnomah-Oregon";
tabInfosDiapo[5] = "Etats-Unis - Palouse";
tabInfosDiapo[6] = "Liban - Gouffre des Trois Ponts";
tabInfosDiapo[7] = "Kuang-Si-Luang - Prabang";
tabInfosDiapo[8] = "Tasmanie - Russel";
tabInfosDiapo[9] = "Thailande - Erawan";
tabInfosDiapo[10] = "Zambie-Zimbabwe - Chutes Victoria";
tabInfosDiapo[11] = "Bresil/Guyane/Venezuela - Mont-Roraima";
tabInfosDiapo[12] = "Etats-Unis - Arizona - Havasu";
tabInfosDiapo[13] = "Croatie -Plitvice";
tabInfosDiapo[14] = "Roumanie - Bigar";
tabInfosDiapo[15] = "France/Réunion - Troue de fer";

/********** INITIALISATION ************/
function initDiapo()
{
	preChargerImages(); 
}

/********** AFFICHE DIAPO**********/
function affDiapo(indice)
{
	document.getElementById("diaporama").src = tabImgDiapo[indice].src;
	document.getElementById("infos").innerHTML = tabInfosDiapo[indice];
}

/********** FLECHES DU DIAPO **********/

function affImagePrecedente()
{
	if (noImageEnCours > 1 )
	{
		 noImageEnCours--
 affDiapo(noImageEnCours)		
	}
}			


function affImageSuivante()
{
	if (noImageEnCours < noImagesMax )
	{
		 noImageEnCours++
		affDiapo(noImageEnCours);		
	}
}	

/************ CHANGE DIAPO LORS DU CLIQUE SUR MINIATURE ************/
function changerDiapo(indice)
{
	noImageEnCours = indice;
	affDiapo(noImageEnCours);
}