$(document).ready(function () {
    var buttonPrev = $('.app__img').prev();
    var buttonNext = $('.app__img').next();
    var currentImg = $('.app__img').has('active');
    
    buttonPrev.click(function () { 
        console.log($(this));
        currentImg.next().addClass('active');
        currentImg.removeClass('active');
        
        
    });

    buttonNext.click(function () { 
        console.log($(this));
        currentImg.prev().addClass('active');
        currentImg.removeClass('active');
        
        
    });

    currentImg.click(function () { 
        console.log($(this));
        
        
    });












});