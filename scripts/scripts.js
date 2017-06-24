// PORTFOLIO

// Display portfolio item overlay
$('.portfolioItem').on('click', function(){
	$('.portfolioItemOverlay').removeClass("portfolioItemOverlayShow");
    $(this).find('.portfolioItemOverlay').toggleClass("portfolioItemOverlayShow");
//    $('img').css('-webkit-filter','grayscale(100%) opacity(60%) contrast(120%)');
//    $(this).find('img').css('-webkit-filter','grayscale(0%) opacity(100%) contrast(100%)');
    $('img').removeClass('portfolioClicked');
    $(this).find('img').addClass('portfolioClicked');
});

//$('.portfolioItem').hover(
//  function() {
//    $(this).find('img').css('-webkit-filter','grayscale(0%) opacity(100%) contrast(100%)');
//  }, function() {
//    $(this).find('img').css('-webkit-filter','grayscale(100%) opacity(60%) contrast(120%)');
//  }
//);

