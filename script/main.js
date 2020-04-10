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

    var buttonPrevious = $('#prev');
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

    var activeMetaRadio = $('.app__radio-area__meta-radio.meta-radio--selected');
    var metaRadio = $('.app__radio-area__meta-radio');

// Establish the first and the last img with a class

    firstImg.addClass('first');
    lastImg.addClass('last');

// Picture change

    buttonPrevious.click(showPrevious);   
    buttonNext.click(showNext); 

// Keyboard controls

    $(document).keydown(function(e) {
        switch (e.keyCode) {
            case 37: // Arrow LEFT
                showPrevious()
                break
            case 38: // Arrow UP
                if (currentImg.hasClass('first') != true && activeMetaRadio.hasClass('first') != true) {
                    showFirst();
                }
                break
            case 39: // Arrow RIGHT
                showNext()
                break
            case 40: // Arrow DOWN
                if (currentImg.hasClass('last') != true && activeMetaRadio.hasClass('last') != true) {
                    showLast();
                }
                break
        }
    });
    
    metaRadio.click(function () { 
        createReferenceToImage($(this));
    });

// Functions

    function createReferenceToImage(dataNumber) {
        var metaRadioReference = (dataNumber.attr('data-number'));
        var linkedImg = $( "img[data-number=" + metaRadioReference + "]" );
        activeMetaRadio.removeClass('meta-radio--selected');
        dataNumber.addClass('meta-radio--selected');
        activeMetaRadio = dataNumber;
        currentImg.removeClass('active');
        linkedImg.addClass('active');
        currentImg = $('.app__img.active');
    };

    function metaRadioReAssign(){
        activeMetaRadio.removeClass('meta-radio--selected');
        activeMetaRadio = $('.app__radio-area__meta-radio.meta-radio--selected');
    };

    function resetImaginePosition(){
        currentImg.removeClass('active');
        currentImg = $('.app__img.active');
    };

    function showPrevious(){ //non vanno
        if (currentImg.hasClass('first') && activeMetaRadio.hasClass('first')) {
            showLast();
        } else {
            currentImg.prev().addClass('active');
            resetImaginePosition();
            activeMetaRadio.prev().addClass('meta-radio--selected');
            metaRadioReAssign();
        }
    };

    function showNext(){
        if (currentImg.hasClass('last') && activeMetaRadio.hasClass('last')) {
            showFirst();
        } else {
            currentImg.next().addClass('active');
            resetImaginePosition();
            activeMetaRadio.next().addClass('meta-radio--selected');
            metaRadioReAssign();
        }
    };

    function showFirst(){
        firstImg.addClass('active');
        resetImaginePosition();
        firstMetaRadio.addClass('meta-radio--selected');
        metaRadioReAssign();
    };

    function showLast(){
        lastImg.addClass('active');
        resetImaginePosition();
        lastMetaRadio.addClass('meta-radio--selected');
        metaRadioReAssign();
    };    
});