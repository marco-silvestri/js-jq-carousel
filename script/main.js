/*
*   ---------I AM A SIMPLE CAROUSEL--------
*   
*    Create a carousel which accepts n images in the html,
*   with functional arrows and functional dots.
*
*   -- Controls:
*   ↑ Go to first
*   ↓ Go to last
*   ← Go back
*   → Go forward
*
*   2020 - Marco Silvestri
*/

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
    
    for (i = 0; i < imgNumber; i++) {
        radioArea.append('<div class="app__radio-area__meta-radio" data-number="' + i + '"><i class="fas fa-asterisk"></i></div>');
        $('.app__img')[i].setAttribute('data-number', i);    
    }  

// Referencing and ruling the meta-radios

    var firstMetaRadio = $('.app__radio-area__meta-radio').first();
    var lastMetaRadio = $('.app__radio-area__meta-radio').last();
    
    firstMetaRadio.addClass('first meta-radio--selected');
    lastMetaRadio.addClass('last');

    var activeRadio = $('.app__radio-area__meta-radio.meta-radio--selected');
    var radio = $('.app__radio-area__meta-radio');

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

// Keyboard controls

    $(document).keydown(function(e) {
        switch (e.keyCode) {
            case 37:
                goBack()
                break
            case 38:
                if (currentImg.hasClass('first') != true && activeRadio.hasClass('first') != true) {
                    iAmTheFirst();
                }
                break
            case 39:
                goForw()
                break
            case 40:
                if (currentImg.hasClass('last') != true && activeRadio.hasClass('last') != true) {
                    iAmTheLast();
                }
                break
        }
    });
    
    radio.click(function () { 
        // TODO Implement it in an external function
        var dotReference = ($(this).attr('data-number'));
        activeRadio.removeClass('meta-radio--selected');
        $(this).addClass('meta-radio--selected');
        activeRadio = $(this);
        currentImg.removeClass('active');
        var linkedImg = $( "img[data-number="+dotReference+"]" );
        linkedImg.addClass('active');
        currentImg = $('.app__img.active');
    });

// Functions

    function metaRadioReAssign(){
        activeRadio.removeClass('meta-radio--selected');
        activeRadio = $('.app__radio-area__meta-radio.meta-radio--selected');
    };

    function imgReAssign(){
        currentImg.removeClass('active');
        currentImg = $('.app__img.active');
    };

    function goBack(){
        if (currentImg.hasClass('first') && activeRadio.hasClass('first')) {
            iAmTheLast();
        } else {
            currentImg.prev().addClass('active');
            imgReAssign();
            activeRadio.prev().addClass('meta-radio--selected');
            metaRadioReAssign();
        }
    };

    function goForw(){
        if (currentImg.hasClass('last') && activeRadio.hasClass('last')) {
            iAmTheFirst();
        } else {
            currentImg.next().addClass('active');
            imgReAssign();
            activeRadio.next().addClass('meta-radio--selected');
            metaRadioReAssign();
        }
    };

    function iAmTheLast(){
        lastImg.addClass('active');
        imgReAssign();
        lastMetaRadio.addClass('meta-radio--selected');
        metaRadioReAssign();
    };

    function iAmTheFirst(){
        firstImg.addClass('active');
        imgReAssign();
        firstMetaRadio.addClass('meta-radio--selected');
        metaRadioReAssign();
    };

    
});