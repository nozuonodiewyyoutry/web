$(function(){
    // 点击选项卡
    $('.cart_slide>ul>li>a').click(function(event){
        $(this).addClass('cart_slide_xxk').siblings().removeClass('cart_slide_xxk');
    });

    // 全选全不选
    isChecked = false;
    var display =$('tbody .tr1,.tr2').css('display');
    console.log(display);
    $('#select').click(function(){
        isChecked = !isChecked;
        if(isChecked){
            $("input[name='commodityCheckbox']").prop("checked",true);
            $(".cart_tr_2").css('background','#fff2f2');
            console.log(display);
            if(display!="none"){
                console.log(display);
                $('.sumPrice').text('¥ 79.00');
                $(".goPayment").css({'background-image':'../images/shoppingCartImg/cart1.png',"background-position":"0 -216px"});
            }
        }else{
            $("input[name='commodityCheckbox']").prop("checked",false);
            $(".cart_tr_2").css('background','#fff');
             $('.sumPrice').text('¥ 0.00');
            $(".goPayment").css({'background-image':'../images/shoppingCartImg/cart.png1',"background-position":"0 -800px"});
        }
    });
    $('#select1').click(function(){
        isChecked = !isChecked;
        if(isChecked){
            $("input[name='commodityCheckbox']").prop("checked",true);
            $(".cart_tr_2").css('background','#fff2f2');
            if(display!="none"){
                $('.sumPrice').text('¥ 79.00');
                $(".goPayment").css({'background-image':'../images/shoppingCartImg/cart1.png',"background-position":"0 -216px"});
            }
        }else{
            $("input[name='commodityCheckbox']").prop("checked",false);
            $(".cart_tr_2").css('background','#fff');
             $('.sumPrice').text('¥ 0.00');
            $(".goPayment").css({'background-image':'../images/shoppingCartImg/cart.png1',"background-position":"0 -800px"});
        }
    });

    var flag = false;
    $(".tr1 input[name='commodityCheckbox']").click(function(){
        flag = !flag;
        if(flag){
            $(".tr1,.tr2 input[name='commodityCheckbox']").prop("checked",true);
            $(".tr2").css('background','#fff2f2');
            $('.sumPrice').text('¥ 79.00');
            $(".goPayment").css({'background-image':'../images/shoppingCartImg/cart1.png',"background-position":"0 -216px"});
        }else{
            $(".tr1,.tr2 input[name='commodityCheckbox']").prop("checked",false);
            $(".tr2").css('background','#fff');
            $('.sumPrice').text('¥ 0.00');
            $(".goPayment").css({'background-image':'../images/shoppingCartImg/cart.png1',"background-position":"0 -800px"});
        }
    });
    $(".tr2 input[name='commodityCheckbox']").click(function(){
        flag = !flag;
        if(flag){
            $(".tr2 input[name='commodityCheckbox']").prop("checked",true);
            $(".tr1 input[name='commodityCheckbox']").prop("checked",true);
            $(".tr2").css('background','#fff2f2');
            $('.sumPrice').text('¥ 79.00');
            $(".goPayment").css({'background-image':'../images/shoppingCartImg/cart1.png',"background-position":"0 -216px"});
        }else{
            $(".tr1 input[name='commodityCheckbox']").prop("checked",false);
            $(".tr2 input[name='commodityCheckbox']").prop("checked",false);
            $(".tr2").css('background','#fff');
            $('.sumPrice').text('¥ 0.00');
            $(".goPayment").css({'background-image':'../images/shoppingCartImg/cart.png1',"background-position":"0 -800px"});
        }
    });

    var valuez = $('.cart_num_input').val();
    // 数量按钮改变
    $(".cart_num_add").click(function(){
        if (valuez!=1) {
            valuez--;
            $('.cart_num_input').val(valuez);
        };
    });
    $(".cart_num_reduce").click(function(){
        valuez++;
        $('.cart_num_input').val(valuez);
    });
    //删除商品
    $('#delectCommodity').click(function(){
        $('tbody').children('.tr1,.tr2').css('display',"none");
        $('tbody .J_mundo').css('display','table-row');
    });

    $('.J_undo').click(function(){
        $('tbody').children('.tr1,.tr2').css('display',"table-row");
        $('tbody .J_mundo').css('display','none');
    });


    // 点击新增地址
    $('.newDress').click(function(){
        $(".J_otherAddrWrap").css('display',"block");
        $(".cart_address_wrap").css("display","none");
    });
    $('.confirm_btn').click(function(){
        $(".J_otherAddrWrap").css('display',"none");
        $(".cart_address_wrap").css("display","block");
    });
}); 
