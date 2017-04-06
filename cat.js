var mainPicture = $('.hero img');
$('.thumbnail').on('click', function(event) {
  
  var imgSrc = $(event.currentTarget).find('img').attr('src');
  mainPicture.attr('src', imgSrc);
});
                    
                    