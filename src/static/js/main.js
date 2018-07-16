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
    });
    $('#slide_search_cancel').click(function(){
        $('.navigation_s').css('position','sticky');
        $('#wrap').css('display','none');
        $('.slide_search').slideUp();
    });
    //Authorization
    $('#user').click(function(){
        $('#authorization').fadeIn();
        $('#wrap').css('display','block');
    });
    $('#authorization_cancel').click(function(){
        $('#authorization').fadeOut();
        $('#wrap').css('display','none');
    });
    $('#registration_btn').click(function(){
        $('.enter').css('display','none');
        $('.registration').fadeIn();
        $('.authorization_btn-enter').removeClass('authorization_btn-active');
        $('.authorization_btn-registration').addClass('authorization_btn-active')
    });
    $('#enter_btn').click(function(){
        $('.registration').css('display','none');
        $('.enter').fadeIn();
        $('.authorization_btn-registration').removeClass('authorization_btn-active');
        $('.authorization_btn-enter').addClass('authorization_btn-active')
    });
    $('#change_password_view').click(function () {
        if ($('#password').get(0).type=='password')
            $('#password').get(0).type='text';
        else $('#password').get(0).type='password'
    });
    $('#registration_submit').click(function () {
        var pas1=$('#first_password').val(),
            pas2=$('#second_password').val();
        if(pas1!=pas2) {
            alert("Пароли  не совпадают. Пожалуйста, проверьте  идентичность паролей в обоих полях!");
        }

    });
});