/*main1的m_l的banner*/
var part2key=0;
$(".buttonleft").click(function() {
	$(".buttonright").css("display","block");
	part2key--;
	if (part2key<=0) {
		part2key=0;
		$(".buttonleft").css("display","none");
	}
	$("ul").css("left",-340*part2key+"px");
})

$(".buttonright").click(function() {
	$(".buttonleft").css("display","block");
	part2key++;
	if (part2key>=2) {
		part2key=2;
		$(".buttonright").css("display","none");
		$(".buttonleft").css("display","block");
	}
	$("ul").css("left",-340*part2key+"px");
})
//var part2flag=0;
//$(".main1 .m_l .part2 .slider ul>li img").eq(part2flag).mouseenter(function() {
//	
//})
/*searchbox的点击事件*/
$(".searchbox").click(function() {
	$(this).css("height","200px");
	$(this).text("历史记录")
})
//*colorselect选择颜色图片的点击事件*/
function clickselect (obj1,obj2,obj3,obj4) {
	obj1.click(function() {
		obj2.css("display","block");
		obj4.css("display","none");
		obj1.css("border","2px solid #5c5c5c");
		obj3.css("border","0px solid #5c5c5c");
	})
}
clickselect ($(".colorselect .pic1"),$(".colorselect .picked1"),$(".colorselect .pic2"),$(".colorselect .picked2"));
clickselect ($(".colorselect .pic2"),$(".colorselect .picked2"),$(".colorselect .pic1"),$(".colorselect .picked1"));
//*size选择尺码的点击事件*/
clickselect ($(".size span").eq(0),$(".size .picked3"),$(".size span").eq(1),$(".size .picked4"));
clickselect ($(".size span").eq(1),$(".size .picked4"),$(".size span").eq(0),$(".size .picked3"));

/*option_menu点击增删商品数量*/
var option_menu_sum=1;
var option_menu_max1=parseInt($(".sp4").text());//转化数字
var option_menu_val=parseInt($(".sp2 input").val());//转化数字
$(".sp3").click(function() {
	$(".sp1").css("color","#999999")
	
	option_menu_sum++;
	if (option_menu_sum>=option_menu_max1) {
		option_menu_sum=option_menu_max;
		$(".sp3").css("color","#DDDDDD")
	}
	$(".sp2 input").val(option_menu_sum);
})
$(".sp1").click(function() {
	$(".sp1").css("color","#999999")
	option_menu_sum--;
	if (option_menu_sum<=1) {
		option_menu_sum=1;
		$(".sp1").css("color","#DDDDDD")
	}
	$(".sp2 input").val(option_menu_sum);
})
/*点击商品套餐效果*/
$(".combo").eq(0).css("display","block");
$(".m2_h span").click(function() {
	var key=$(this).index();
	$(".m2_h span").removeClass("showborder");
	$(this).addClass("showborder");
	$(".combo").css("display","none")
	$(".combo").eq(key).css("display","block");
})
/*clickdiv主体第二部分点击弹出框*/
$(".p_text").click(function() {	
	$(".clickdiv").css("display","none");
//	$(this).next().css("display","block");
	$(this).next().fadeToggle(10);//判断当前的div是否出现，出现就消失，消失就出现
})
$(".clickdiv .content .c_p span").click(function() {
	$(".clickdiv").css("display","none");
})
/*clickdiv主体第二部分点击弹出框里的效果*/
clickselect ($(".c1_span1"),$(".c1_img1"),$(".c1_span2"),$(".c1_img2"));
clickselect ($(".c1_span2"),$(".c1_img2"),$(".c1_span1"),$(".c1_img1"));
clickselect ($(".c2_img0"),$(".c2_img1"),$(".c2_img3"),$(".c2_img2"));
clickselect ($(".c2_img3"),$(".c2_img2"),$(".c2_img0"),$(".c2_img1"));