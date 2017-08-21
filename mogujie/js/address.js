
$(document).ready(function(){
        //侧面点击区
        function  add(obj1,obj2){
            $(obj1).click(function(){
                $(obj2).toggle(200);
                 $(obj1).toggleClass("me_title1");
            })
        }
        add($("#me_title1"),$("#me_nav_ul1"));
        add($("#me_title2"),$("#me_nav_ul2"));
        add($("#me_title3"),$("#me_nav_ul3"));
        add($("#me_title4"),$("#me_nav_ul4"));
        add($("#me_title5"),$("#me_nav_ul5"));
       //新增地址区
       $("#add_span").click(function() {
           $(".address_hide").show();
           $(".addwraper").show();
       });
       //省市联动区
       $.each(provinceJson,function(k,p){
                    var option="<option value='"+p.id+"'>"+p.province+"</option>";
                    $('.selProvince').append(option);
         });
       $(".selProvince").change(function() {
                  var selValue=$(this).val();
                  $('.selCity option:gt(0)').remove();
                   $('.selDistrict option:gt(0)').remove();
                   $.each(cityJson,function(k,p){
                        if(p.id==selValue||p.parent==selValue){
                            var option="<option value='"+p.id+"'>"+p.city+"</option>";
                            $('.selCity').append(option);
                        }
                   });
       });
       $('.selCity').change(function(){
                var selValue=$(this).val();
                $('.selDistrict option:gt(0)').remove();
                $.each(countyJson,function(k,p){
                    if(p.id==selValue||p.parent==selValue){
                        var option="<option value='"+p.id+"'>"+p.county+"</option>";
                        $('.selDistrict').append(option);
                    }
                });
            });
       //点击确认地址区
       $(".confirm_btn").click(function(){
            
       });
       $(".cancel_btn").click(function(){
            $(".addwraper").hide(30);
       });
});