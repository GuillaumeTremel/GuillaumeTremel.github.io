/******** Ajoute un effet modéré (smooth) lors du défilement entre les slides *********/
/******** sert pour le menu et a besoin jquery-2.1.1.min.js ************/
/* on pourrait changer 'section' pour 'div' et ça fonct. */
$(function() {
  var scrollToAnchor = function( id ) {
	var elem = $("section[id='"+ id +"']"); // on crée une balise d'ancrage  /* avant section */
	
	if ( typeof elem.offset()  === "undefined" ) { // on verifie si l'élément existe
		elem = $("#"+id); }
	if ( typeof elem.offset()  !== "undefined" ) { // si l'élément existe, on continue
	  $('html, body').animate({
			  scrollTop: elem.offset().top }, 1200 );} // on défini un temps de défilement de page - plus le chiffre est gros + lent  avant 600
  };
  
  $("a").click(function( event ) { // on attache la fonction au click
	if ( $(this).attr("href").match("#") ) { // on vérifie qu'il s'agit d'une ancre
	  event.preventDefault();
	  var href = $(this).attr('href').replace('#', '') // on scroll vers la cible
	  scrollToAnchor( href ); }
  });
});
		

/********* Ajoute une class dans le menu si la section est visible  ******/
$(document).scroll(function() {
	var cutoff = $(window).scrollTop() + 200; // on défini la position de déclenchement (*1)
	// Find current section and highlight nav menu
	var curSec = $.find('.current'); // on cherche l'élément (section) avec la class current
	var curID = $(curSec).attr('id'); // on récupère son ID
	var curNav = $.find('a[href=#'+curID+']'); // on cherche l'élément de navigation correspondant (*2)
	$('li .elem-link').removeClass('active'); // on nettoie la navigation de la class active présente
	$(curNav).addClass('active'); // (*2) -> on ajoute la class active

	$('section').each(function(){
	   if($(this).offset().top + $(this).height() > cutoff){ // si la section est dans le champ de scroll
			$('section').removeClass('current') // on nettoie les sections de la class current présente
			$(this).addClass('current'); // on ajoute la class current à la section visible
			return false; // on stoppe l'iteration (le cas contraire, seule la derniere section se verra ajoutée la class)
		}
	});
});


// lorsque l'on clique sur actualiser la page courante ou F5 remonte en haut
$(window).load(function() { $('html, body').animate({scrollTop: 0}, 1000)});