$(function(){

   $('#perv').click(function(){
        var l=parseInt($('.nav-list').css('left'));
        if(l==-1210){
            $('.nav-list').animate({left:0},400);
            $('#perv').css('display','none');
            $('#next').css('display','block');
        }
    });
    $('#next').click(function(){
        var l=parseInt($('.nav-list').css('left'));
        if(l==0){
            $('.nav-list').animate({left:-1210},400);
            $('#perv').css('display','block');
            $('#next').css('display','none');
        }
    });

    $('.nav-list li').each(function(index){
        $(this).click(function(){
            divs = $(this).children();
            $(this).siblings('li').children().removeClass('current');
           divs.siblings('div').removeClass('nav-tm');
            divs.addClass('current');
            $(".s"+(index+1)+"").css('display','block').siblings('.pool-list').css('display','none');
        });

    });




});