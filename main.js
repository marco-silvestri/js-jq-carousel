$(document).ready(function () {
    var buttonPrev = $('#prev');
    var buttonNext = $('#next');
    var currentImg = $('.app__img.active');
    
    buttonPrev.click(function () { 
        if (currentImg == $('.gallery').first('img')){
            currentImg = $('.gallery').last('img');
        }
        currentImg.prev().addClass('active');
        currentImg.removeClass('active');
        currentImg = $('.app__img.active');
        console.log(currentImg);
    });

    buttonNext.click(function () {
        if (currentImg == $('.gallery').last('img')){
            currentImg = $('.gallery').first('img');
        } 
        currentImg.next().addClass('active');
        currentImg.removeClass('active');
        currentImg = $('.app__img.active');
    });

    currentImg.click(function () { 
        console.log($(this));
        
        
    });




    







});