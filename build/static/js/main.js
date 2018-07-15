$(document).ready(function () {
    //Pop up
    $('#pop_up_cancel').click(function(){
        $('.pop_up_menu').fadeOut();
        $('#wrap').css('display','none');
    });
    // закрыть по клику вне окна
    $(document).mouseup(function (e) {
        var popup = $('.pop_up_menu');
        if ($('.pop_up_menu').css('display') == 'block' && e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.pop_up_menu').fadeOut();
            $('#wrap').css('display','none')
        }
    });
    // открыть по таймеру
    $(window).on('load', function (){
        setTimeout(function(){
                $('#wrap').css('display','block');
                $(".pop_up_menu").fadeIn();
        }, 5000);
    });
    //Slide menu
    $('#menu').click(function(){
        $('.slide_menu').slideToggle();
        $('.navigation_s').css('position','relative');
        $('#wrap').css('display','block');
    });
    $('#slide_menu_cancel').click(function(){
        $('.slide_menu').slideUp();
        $('.navigation_s').css('position','sticky');
        $('#wrap').css('display','none');
    });
    //Slide search
    $('#search').click(function(){
        $('.slide_search').slideToggle();
        $('.navigation_s').css('position','relative');
        $('#wrap').css('display','block');
    })
    $('#slide_search_cancel').click(function(){
        $('.navigation_s').css('position','sticky');
        $('#wrap').css('display','none');
        $('.slide_search').slideUp();
    });;
});