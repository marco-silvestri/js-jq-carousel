$(document).ready(function () {

// References

    var buttonPrev = $('#prev');
    var buttonNext = $('#next');
    var currentImg = $('.app__img.active');
    var firstImg = $('.app__img').first();
    var lastImg = $('.app__img').last();
    var imgNumber = $('.app__img').length;
    var radioArea = $('#app__radio-area');
    
    // Generate a meta-radio for each img is loaded
    
    for (index = 0; index < imgNumber; index++) {
        radioArea.append('<div class="app__radio-area__meta-radio"></div>');    
    }

    // Referencing and ruling the meta-radios

    var firstMetaRadio = $('.app__radio-area__meta-radio').first();
    var lastMetaRadio = $('.app__radio-area__meta-radio').last();
    
    firstMetaRadio.addClass('first meta-radio--selected');
    lastMetaRadio.addClass('last');

    var activeRadio = $('.app__radio-area__meta-radio.meta-radio--selected');
    
    // Establish the first and the last img with a class

    firstImg.addClass('first');
    lastImg.addClass('last');

// Picture change

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

// Debug area

    currentImg.click(function () { 
        console.log($(this));
        
        
    });


// Functions

    function goBack(){
        if (currentImg.hasClass('first') && activeRadio.hasClass('first')) {
            lastImg.addClass('active');
            currentImg.removeClass('active');
            currentImg = $('.app__img.active');
            lastMetaRadio.addClass('meta-radio--selected');
            activeRadio.removeClass('meta-radio--selected');
            activeRadio = $('.app__radio-area__meta-radio.meta-radio--selected');
        } else {
            currentImg.prev().addClass('active');
            currentImg.removeClass('active');
            currentImg = $('.app__img.active');
            activeRadio.prev().addClass('meta-radio--selected');
            activeRadio.removeClass('meta-radio--selected');
            activeRadio = $('.app__radio-area__meta-radio.meta-radio--selected');
        }
        
    
    };

    function goForw(){
        if (currentImg.hasClass('last') && activeRadio.hasClass('last')) {
            firstImg.addClass('active');
            currentImg.removeClass('active');
            currentImg = $('.app__img.active');
            firstMetaRadio.addClass('meta-radio--selected');
            activeRadio.removeClass('meta-radio--selected');
            activeRadio = $('.app__radio-area__meta-radio.meta-radio--selected');
        } else {
            currentImg.next().addClass('active');
            currentImg.removeClass('active');
            currentImg = $('.app__img.active');
            activeRadio.next().addClass('meta-radio--selected');
            activeRadio.removeClass('meta-radio--selected');
            activeRadio = $('.app__radio-area__meta-radio.meta-radio--selected');
        }


    };

});