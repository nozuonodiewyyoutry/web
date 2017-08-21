$(function(){
    // 点击选项卡
    $('#xxk').click(function(event){
        $('#xxk1').removeClass('cart_slide_xxk');
        $('#xxk').addClass('cart_slide_xxk');
    });
    $('#xxk1').click(function(event){
        $('#xxk').removeClass('cart_slide_xxk');
        $('#xxk1').addClass('cart_slide_xxk');
    });

    // 全选全不选
    isChecked = false;
    var display = $('tbody .tr1,.tr2').css('display');
    $('#select').click(function(){
        isChecked = !isChecked;
        if(isChecked){
            $("input[name='commodityCheckbox']").prop("checked",true);
            $(".cart_tr_2").css('background','#fff2f2');
            console.log(display);
            if($('tbody .tr1,.tr2').css('display')!="none"){
                console.log(display);
                $('.sumPrice').text('¥ 79.00');
                $('.sumNum').text(1);
                $(".goPayment").css({'background-image':'../images/shoppingCartImg/cart1.png',"background-position":"0 -216px"});
            }
        }else{
            $("input[name='commodityCheckbox']").prop("checked",false);
            $(".cart_tr_2").css('background','#fff');
             $('.sumPrice').text('¥ 0.00');
             $('.sumNum').text(0);
            $(".goPayment").css({'background-image':'../images/shoppingCartImg/cart.png1',"background-position":"0 -800px"});
        }
    });
    $('#select1').click(function(){
        isChecked = !isChecked;
        if(isChecked){
            $("input[name='commodityCheckbox']").prop("checked",true);
            $(".cart_tr_2").css('background','#fff2f2');
            if($('tbody .tr1,.tr2').css('display')!="none"){
                $('.sumPrice').text('¥ 79.00');
                $('.sumNum').text(1);
                $(".goPayment").css({'background-image':'../images/shoppingCartImg/cart1.png',"background-position":"0 -216px"});
            }
        }else{
            $("input[name='commodityCheckbox']").prop("checked",false);
            $(".cart_tr_2").css('background','#fff');
             $('.sumPrice').text('¥ 0.00');
             $('.sumNum').text(0);
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
            $('.sumNum').text(1);
            $(".goPayment").css({'background-image':'../images/shoppingCartImg/cart1.png',"background-position":"0 -216px"});
        }else{
            $(".tr1,.tr2 input[name='commodityCheckbox']").prop("checked",false);
            $(".tr2").css('background','#fff');
            $('.sumPrice').text('¥ 0.00');
            $('.sumNum').text(0);
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
            $('.sumNum').text(1);
            $(".goPayment").css({'background-image':'../images/shoppingCartImg/cart1.png',"background-position":"0 -216px"});
        }else{
            $(".tr1 input[name='commodityCheckbox']").prop("checked",false);
            $(".tr2 input[name='commodityCheckbox']").prop("checked",false);
            $(".tr2").css('background','#fff');
            $('.sumPrice').text('¥ 0.00');
            $('.sumNum').text(0);
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


    // 去付款
    // $('#payBtn').click(function(){
    //     $('#payBtn').href="shoppingCart.html";
    // });
}); 
