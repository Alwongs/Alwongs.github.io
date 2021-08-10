$(function () {
    var div = $('img');
    var i = 0;
    while (i < 1000) {
        div.animate({
            'width': '70%',
            'height': '70%',
        }, 200);
        div.animate({
            'width': '100%',
            'height': '100%',
        }, 900);
        i++;
    }



});


