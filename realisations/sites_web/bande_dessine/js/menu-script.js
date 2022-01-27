( function( $ ) {
$( document ).ready(function() {
$('#cssmenu li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp();
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown();
			element.siblings('li').children('ul').slideUp();
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp();
		}
	});
});
} )( jQuery );

$(document).ready(function() {
	// On écoute le scroll sur la page
	$(document).scroll(function() {
		// On récupère la hauteur de la page
		var hautfen = $(window).height();
		// On récupère la position du scroll
		var posScroll = $(window).scrollTop();
		// On calcule l'endroit à partir duquel on veut faire apparaître le bouton
		var diff = hautfen - posScroll - (hautfen/2);
		if (diff < 0) {
			// On fait apparaître le bouton en fondu sur 0.5s
			$('#return-top').fadeIn(500);
		} else {
			// On fait disparaitre le bouton en fondu sur 0.5s
			$('#return-top').fadeOut(500);
		}
	});
});


$(document).ready(function(){
	// On récupère la largeur de la fenêtre du navigateur
	var largfen = $(window).width();
	// On calcule la position à laquelle on veut placer le bouton en largeur
	var largfen2 = (largfen/2) + (910/2) - 20;
	// On ajoute dynamiquement au chargement de la page la position du bouton
	$('#return-top').css('left', largfen2+'px');
	// On fait les mêmes opérations au redimensionnement de la page
	$(window).resize(function(){
		var largfen = $(window).width();
		var largfen2 = (largfen/2) + (910/2) - 20;
		$('#return-top').css('left', largfen2+'px');
	});
});