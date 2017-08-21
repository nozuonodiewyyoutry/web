var index=0;
var lineMove_index=0;
var cp_timer=null;
$(function() {
	$(".b_l_side_nav ul").mouseenter(function(event) {
		$(".subnav_item").eq($(this).index()).css('display', 'block').siblings().css('display', 'none');;
	});
	$(".subnav_item").mouseleave(function(event) {
		$(".subnav_item").hide();
	});
	//轮播图
	$(".b_image").append('<ol></ol>')
	$(".b_image ul li").each(function(index, el) {
		$(".b_image ol").append('<li><img src="images/indexImg/b_icon_current.png" alt=""/></li>');
	});
	$(".b_image ol li:eq(0)").addClass('circle_current');
	setInterval(autoPlay,3000);
	//鼠标经过时图片移动，离开时恢复原位；
	$(".activity_img").hover(function() {
		$(this).stop(false,true).animate({"marginLeft":"-=10px"}, 400);
	}, function() {
		$(this).stop(false,true).animate({"marginLeft":"+=10px"}, 400);
	});
	// 红人穿搭循环遍历
	$(".hmp_content ul li").each(function(index, el) {
		$(this).children('a').append('<img src="'+hot_match_data[index].hot_img+'" alt=""/><span>'+hot_match_data[index].hot_txt+'</span>');
	});
	setInterval(randomData,2000);
	$(".hmp_content ol li").each(function(index, el) {
		$(this).children('a').append('<img src="'+hot_match_box_data[index].hot_img+'" alt=""/><span>'+hot_match_box_data[index].hot_txt+'</span>');
	});
	// 精选专题的初始化
	$(".p_title ol li").eq(0).addClass('current_li');
	cp_timer=setInterval(lineMove,2000);
	$(".p_title ol li").click(function(event) {
		clearInterval(cp_timer);
		lineMove_index=$(this).index();
		run();
		cp_timer=setInterval(lineMove,2000);
	});
	$(".left_but").click(function(event) {
		clearInterval(cp_timer);
		lineMove_index--;
		run();
		cp_timer=setInterval(lineMove,2000);
	});
	$(".right_but").click(function(event) {
		clearInterval(cp_timer);
		lineMove_index++;
		run();
		cp_timer=setInterval(lineMove,2000);
	});
});
var color=["#fe62a5","#7f7df5","#e34d50"];
function autoPlay(){
	index++;
	index=index > $(".b_image ul li").length-1?0:index;
	$(".b_image ul li").eq(index).addClass('b_current').siblings().removeClass('b_current');
	$(".b_image ol li").eq(index).addClass('circle_current').siblings().removeClass('circle_current');
	$(".b_side_color").css('background-color',color[index]);
}
var arr_hot_data=[0,1,2,3,4];
// animate({param1: value1, param2: value2}, speed)
function randomData(){
	var flag=parseInt(Math.random()*5);
	var data_index=parseInt(Math.random()*10);
	for (var i = 0; i < arr_hot_data.length; i++) {
		if (arr_hot_data[i] == data_index) {
			data_index=parseInt(Math.random()*10);
			i=-1;
			continue;
		}
	}
	arr_hot_data[flag]=data_index;
	$(".hmp_content ul li").eq(flag).addClass("current_hot1");
	setTimeout(function(){
		$(".hmp_content ul li").eq(flag).children('a').children('img').attr('src', hot_match_data[data_index].hot_img);
		$(".hmp_content ul li").eq(flag).children('a').children('span').text(hot_match_data[data_index].hot_txt);
		$(".hmp_content ul li").eq(flag).removeClass("current_hot1");
	},500);
}
function lineMove(){
	lineMove_index++;
	run();
	console.log(lineMove_index);
}
function run(){
	lineMove_index=lineMove_index>3?0:lineMove_index;
	lineMove_index=lineMove_index<0?3:lineMove_index;
	$(".p_title ol li").eq(lineMove_index).addClass('current_li').siblings().removeClass('current_li');
	$(".cp_list ul").stop(false,true).animate({left: -lineMove_index*945+"px",}, 500);
}


