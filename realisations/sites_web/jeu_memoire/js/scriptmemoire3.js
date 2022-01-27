/************ CODE COMPLET *************/

// déclaration des variables globales
var debutJeu;			// var debutJeu = false;    // seulement avant initialiser()

var inconnu;						
						
var choixInconnu;		// var choixInconnu = false;  // seulement avant initialiser()			

var nbreCliques;		// var nbreCliques = 0; 	// seuleemnt avant initialiser()

var trouve;

// mettre à l'intérieur le nbre d'images ds le jeu
var tabDejaClique = new Array(25);  

/*
 initialiser une var globale 
 selon le nombre d'images contenu ds votre jeu
 donner comme exemple nbreEtudiants = 25;
 avantage : si vous ajoutez ou enlevez des images,
 vous changez la valeur de la variable globale et 
 vous n'avez pas besoin rien changer ailleurs dans le code.
 
 Sinon, vous aurez à modifier plusieurs endroits ds le code.
*/

/*********************** 18 INITIALISER LE JEU AU DÉPART ***************/
function initialiserJeu()
{
	debutJeu = false;
	choixInconnu = false;
	trouve = false;
			
	nbreCliques = 0;
	
	for (i = 0; i < 25; i++)
	{
		// ici var de type tableau avec [] 
		// où on place ds des cases 0 1 2 3...
		tabDejaClique[i] = i;
	}
	
	// normalement on charge en mémoire les images qui vont être retrounées
	// on ne le fait pas pour cette fois...
	
	document.getElementById("inconnu").src = "images/jeu-memoire/inconnu.jpg";
	document.getElementById("btnDebuter").src = "images/jeu-memoire/btnDebuter.jpg";
	
	// boucle qui va cacher toutes les images no 0 à 5 pas de 6
	for (i = 0; i < 25; i++)
	{
		// appel de la fonction pour cacher l'image…	
		// i prend la valeur 0 1 2 3 4 5 à chaque passage dans la boucle
		cacherImages(i);
	}
	
	document.getElementById("nbreEssais").innerHTML = nbreCliques;
	document.getElementById("message").innerHTML = " ";   // montrer avec et sans  
	document.getElementById("fin").innerHTML = "";	
}

/***************** 1. AFFICHAGE DE L'IMAGE À RECHERCHER ****************/
function affRecherche() 
{
	if (choixInconnu == false)                       
	{
		document.getElementById("message").innerHTML = " ";  // montrer avec et sans  
		
		// on multiplie par le nombre d'images
		var rdm = Math.floor(Math.random() * 25);
		
		document.getElementById("inconnu").src = "images/jeu-memoire/no" + rdm + ".jpg";

		// conserve en mémoire le chiffre de l'image à rechercher
		inconnu = rdm;
		choixInconnu = true;
	}
}

/***************** 3. MÉLANGER LES IMAGES CACHÉES **********************/
function melangerImgCaches()
{
	//alert("ds melangerImgCaches");
	// au départ les images sont placés dans cet ordre
	// on fonctionne avec le chiffre à la fin du nom de l'image.
	var tabImgOrdre = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24);
	
	tabImgMelange = new Array(25);  // tabImgRdm
	
	// on multiplie par le nombre d'images
	// floor : retourne le nombre inférieur le + proche ou égal à.
	// si 5.9 floor donne 5
	var rdm = Math.floor(Math.random() * 25);	   

	// le 6 n'est pas accepté parce que nos images commencent à 0 et nous n'avons pas de no 6
	for (i = 0; i < 25; i++)
	{  
		// tant que le tableau des images en ordre indique -1
		// on génère un no aléatoirement
		while (tabImgOrdre[rdm] == -1)
		{
			rdm = Math.floor(Math.random() * 25);
		}

		
		// va chercher le no dans le tableau des img en ordre en l'emplacemen généré par le rdm
		// et le place dans le tableau des images mélangées à l'emplacement i (l'indice de boucle)
		tabImgMelange[i] = tabImgOrdre[rdm];
		
		// simplement pour savoir qu'elle image a déjà été mêlée
		tabImgOrdre[rdm] = -1;
	}
	
	/* Test */
	/*
	for (i = 0; i < 6; i++)
	{
		alert("tabImgMelange " + tabImgMelange[i]);
	}
	*/
}

/************************ 5. CACHER LES IMAGES *************************/

function cacherImages(no)
{
	// si on n'utiliserait pas le passage par paramètre avec une
	// variable, on serait obligé d'écrire 25 fois cette ligne
	// document.getElementById("image0").src = "images/jeu-memoiredessus.jpg";
	document.getElementById("image" + no).src = "images/jeu-memoire/dessus.jpg";		   
}

/*************** 4. TOURNER LES IMAGES en une seule fois  **************/
function tournerImages()
{			
	for (i = 0; i < 25; i++)
	{
					// fait référence au id image0, ... ds html
		document.getElementById("image" + i).src = "images/jeu-memoire/no" + tabImgMelange[i] + ".jpg";
		
		setTimeout("cacherImages(" + i + ")", 200);
	}
}

/************************** 2. DÉBUTER JEU *****************************/
function debuterJeu()
{	

	if (debutJeu == false && trouve == false)
	{	

		if (choixInconnu == false)
		{
			document.getElementById("message").innerHTML = "Cliquez sur «  Rechercher » avant.";
			document.getElementById("message").style.color = "#cc0000";
		}
		else
		{
			debutJeu = true;
			
			document.getElementById("btnDebuter").src = "images/jeu-memoire/btnArreter.jpg";
			
			melangerImgCaches();
			tournerImages();	
		}
	}
	else 
	{
		initialiserJeu();
	}	
}


/*********************** 6. CHOIX DE L'IMAGE CLIQUÉE *******************/
function choixImage(no)
{	

	// alert(tabDejaClique[no]);
	
	if (debutJeu == true && tabDejaClique[no] != -1)
	{		
		document.getElementById("image" + no).src = "images/jeu-memoire/no" + tabImgMelange[no] + ".jpg";
		
		nbreCliques++;		
		document.getElementById("nbreEssais").innerHTML = nbreCliques;
				
		// si le no de l'image cliqué dans le tableau des images mélangées est le même que le no de l'image recherchée
		if (tabImgMelange[no] == inconnu)
		{			
			if (nbreCliques == 1)
			{
				message = "Du premier coup bravo!";
			}
			else
			{
				if (nbreCliques <= 3)
				{
					message = nbreCliques + " fois, vous pouvez faire mieux!"
				}
				else
				{
					message = nbreCliques + " fois, soyez attentif!";
				}
			}
				
			document.getElementById("message").innerHTML = message;
			document.getElementById("message").style.color = "#339900";  /* vert */
				
			trouve = true;
			debutJeu = false;
		}
		
		// simplement pour garder en mémoire les images qui ont été retrounées
		// empêche de cliquer 2 fois sur le même numéro
		// on remplace les numéros 0 1 2 3 4 5 par des -1 (retrounée - n'existe plus)
		// tout dépend de l'image ici no que le joueur a cliqué
		tabDejaClique[no] = -1;  
		

	}	
}
