
/* ====== Add Smooth effect ===== */
$(function() {
  var scrollToAnchor = function( mysect1) {
    var elem = $("section[id='"+ mysect1 +"']"); // on crée une balise d'ancrage
    if ( typeof elem.offset()  === "undefined" ) { // on verifie si l'élément existe
		elem = $("#"+id); }
    if ( typeof elem.offset()  !== "undefined" ) { // si l'élément existe, on continue
      $('html, body').animate({
              scrollTop: elem.offset().top }, 600 );} // on défini un temps de défilement de page
  };
  $("a").click(function( event ) { // on attache la fonction au click
    if ( $(this).attr("href").match("#") ) { // on vérifie qu'il s'agit d'une ancre
      event.preventDefault();
      var href = $(this).attr('href').replace('mysect1', '') // on scroll vers la cible
      scrollToAnchor( href ); }
  });
});