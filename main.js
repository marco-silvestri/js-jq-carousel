$(document).ready(function () {
    var buttonPrev = $('#prev');
    var buttonNext = $('#next');
    var currentImg = $('.app__img.active');

    var firstImg = $('.app__img').first();
    var lastImg = $('.app__img').last();

    firstImg.addClass('first');
    lastImg.addClass('last');

    buttonPrev.click(function () {
        goBack();
        
    });

    buttonNext.click(function () {
        goForw(); 

    });

    $(document).keydown(function(e) {
        switch (e.keyCode) {
            case 37:
                goBack()
                break
            case 39:
                goForw()
                break
        }
    })

    currentImg.click(function () { 
        console.log($(this));
        
        
    });



    function goBack(){
        if (currentImg.hasClass('first')) {
            lastImg.addClass('active');
            currentImg.removeClass('active');
            currentImg = $('.app__img.active');
        } else {
            currentImg.prev().addClass('active');
            currentImg.removeClass('active');
            currentImg = $('.app__img.active');
        }
        
    
    };

    function goForw(){
        if (currentImg.hasClass('last')) {
            firstImg.addClass('active');
            currentImg.removeClass('active');
            currentImg = $('.app__img.active');
        } else {
            currentImg.next().addClass('active');
            currentImg.removeClass('active');
            currentImg = $('.app__img.active');
        }


    };


    







});