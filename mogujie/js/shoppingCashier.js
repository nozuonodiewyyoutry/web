$(function(){
    $(".li1").addClass('bkx');
    $(".li2").addClass('bkx1');
    
    // 点击支付宝支付
    $(".li2").click(function(){
        $(".li2 .zfb_paynum").css("display","block");
        $(".li1 .paynum").css("display","none");
        $(".li2 .zfb_md_paytab").css("display","block");
        $(".li1 .wx_md_paytab").css("display","none");
        $(".li1").siblings().removeClass('bkx');
        $(".li1").siblings().removeClass('bkx1');
        $(".li2").siblings().removeClass('bkx');
        $(".li2").siblings().removeClass('bkx1');
        $(".li1").addClass('bkx1');
        $(".li2").addClass('bkx');
    });

    //点击微信支付
     $(".li1").click(function(){
        $(".li2 .zfb_paynum").css("display","none");
        $(".li1 .paynum").css("display","block");
        $(".li2 .zfb_md_paytab").css("display","none");
        $(".li1 .wx_md_paytab").css("display","block");
        $(".li1").siblings().removeClass('bkx');
        $(".li1").siblings().removeClass('bkx1');
        $(".li2").siblings().removeClass('bkx');
        $(".li2").siblings().removeClass('bkx1');
        $(".li1").addClass('bkx');
        $(".li2").addClass('bkx1');
    });


    // 倒计时
    var intDiff = parseInt(1800);//倒计时总秒数量
    function timer(intDiff){
        window.setInterval(function(){
        var day=0,
            hour=0,
            minute=0,
            second=0;//时间默认值        
        if(intDiff > 0){
            day = Math.floor(intDiff / (60 * 60 * 24));
            hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
            minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        }
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        $('#djs').html(hour+'时'+'<s></s>'+minute+'分'+'<s></s>'+second+'秒');
        intDiff--;
        }, 1000);
    }
    window.setTimeout(function(){

    },3000);
    timer(intDiff);
    
    setTimeout(function(){window.location="shoppingCart.html";},1800000);

    $(".qrfk").css("display","none");
    // 确认付款
    $(".li3").children('ul').children('li').click(function(){
        $(".qrfk").css("display","block");
    });
    $('.li3').mouseleave(function(){
        $(".qrfk").css("display","none");
    });
});