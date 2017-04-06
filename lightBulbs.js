var lightBulbs = $('.lightbulb');



lightBulbs.click(function(event) {    
//    $(event.currentTarget).toggleClass('bulb-on');
    $('.lightbulb').removeClass('bulb-on');
    $(event.currentTarget).addClass('bulb-on');    
});
