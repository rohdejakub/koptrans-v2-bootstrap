$(document).ready(function() {

    // funkcja rozwijania menu
    $("#menu-hamburger").click(function() {
        $(".nav_main").slideToggle(400, function(){
            $(this).toggleClass("nav_expanded").css('display', '');//
        });
    });
    // funkca dodająca klase active do rozwiniętego menu
    $("#oferta-button").click(function(){
        if($('#oferta-button').hasClass('expanded')) {
            $('#oferta-button').removeClass('expanded text-white');
            $('#oferta-button').find('.glyphicon').toggleClass('glyphicon-menu-down glyphicon-menu-up');
            $("#blackbox").slideToggle(0, function () {
                $("#oferta-menu").fadeToggle(100, function () {
                    $('#oferta-menu').toggleClass('display-block display-none').css('display', '');
                });
            });
            $(".header-scroll").animate({height: '65px'}, 100, function(){
                $(".header-scroll").removeClass('header-scroll90').css('height','');
            });
        }
        else
        {
            $(this).addClass("expanded text-white");
            $('#oferta-button').find('.glyphicon').toggleClass('glyphicon-menu-down glyphicon-menu-up');
            $(".header-scroll").animate({height: '90px'}, 100, function () {
                $(".header-scroll").addClass('header-scroll90').css('height', '');
                });
            $("#blackbox").slideToggle(0, function () {
                $("#oferta-menu").fadeToggle(100, function () {
                    $('#oferta-menu').toggleClass('display-block display-none').css('display', '');
                    });
                });
            }
    });

    //Funkcja sprawdzająca wysokośc ekranu i ustawiająca wysokość cover-photo
    function setCoverPhotoHeight(){
        var windowHeight = $(window).height();
        $('.cover-photo').css('height', windowHeight);
    }
    setCoverPhotoHeight();

    //Funkcja dodająca klasę nawigacji po scrollu (fixed, bacground)
    function fixedHeader(){
        if($(window).width() >768) {
            if ($(window).scrollTop() > 10) {
                $('header').addClass('header-scroll');
                if ($('#oferta-button').hasClass("expanded")){
                    $('header').addClass('header-scroll90');
                    }
            } else {
                if(! $('#oferta-button').hasClass('active')) {
                    $('header').removeClass('header-scroll header-scroll90');
                }
            }
        }
    }
    $(window).scroll(fixedHeader);

    //animacja scrolla
    $("#button-oferta").click(function() {
        $('html,body').animate({
                scrollTop: $("#corobimy").offset().top -65 },
            'slow');
    });

});
// koniec document.ready

// pobieranie daty
$("#date").text((new Date()).getFullYear());

/*//funkcja sprawdzająca która sekcja znajduje sie na ekranie
 function sectionInViewport(){
 var sections = $('section');
 var viewportTop = $(window).scrollTop();
 var viewportBottom = $(window).height() + viewportTop;
 var activeSection;
 var i;

 //pętla przez sekcje strony
 for(i = 0 ; i < sections.length ; i++){
 var forSection = $(sections[i]);
 var sectionTop = $(forSection).offset().top;
 var sectionBottom = sectionTop + forSection.height();

 //warunek sprawdzający która sekcja znajduje się w widoku
 if(viewportBottom > sectionTop && viewportTop < sectionBottom){
 activeSection= i;
 }
 }
 return addClassToNav(activeSection);
 }
 // konie sectionInViewport

 //funkcja dodająca klasę do menu w zależności od pozycji z funkcji sectionInViewport
 function addClassToNav(liIndex){
 var liCollection = $('nav a');
 var liActiv = liCollection[liIndex];
 liCollection.removeClass('active');
 $(liActiv).addClass('active');
 }
 // koniec addClassToNav

 //wywoływanie funkcji sprawdzającej pozycje sekcji
 $(window).scroll(sectionInViewport);*/

