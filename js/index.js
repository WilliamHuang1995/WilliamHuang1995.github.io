import Typed from './typed.js';



var options = {
    strings: ['Aspired to be the best ^1500',
              'Always ready to learn ^1500',
              'Capable and passionate ^1500',
              'Willing to relocate ^1500',
              'William <b>Huang</b> ^5000'
             ],
    typeSpeed: 40,
    fadeOut:true,
    showCursor: true,
    loop: false
}
var typed = new Typed("#typed", options);

$('.btn').click(function(){
    display()
});

function display(){
    if($('.pdf').css("display")==="none"){
        $('.pdf').css("display","block")
        $('.profile-pic').css("display","none")
        
        $('#resume').text('Return')
        scrollToPDF()
    }else{
        $('.pdf').css("display","none")
        $('.profile-pic').css("display","block")
        
        $('#resume').text('Résumé')
    }
}
function scrollToPDF() {
    $('html, body').animate(
        { scrollTop: $('.pdf').offset().top }, 'slow');
    return false;
}

