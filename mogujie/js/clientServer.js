$(function(){
//	首页-热门问题
	$(".question-sel ul li").mouseenter(function(){
		var target=$(this).index();
		$(".question-sel ul span").stop().animate({"left":target*100+10+"px"},200);
		$(".question-sel div ol").eq(target).fadeIn(200).siblings().fadeOut(200);
	});
//	自助服务-购物流程
	$("#purchasing-process ul li").mouseenter(function(){
		var ind=$(this).index()-1;
		$("#purchasing-process ul li:lt("+$(this).index()+")").addClass("purchase-current");
		$("#purchasing-process ul li:gt("+ind+")").removeClass("purchase-current");
		$(".show ul li").eq(ind).fadeIn(200).siblings().fadeOut(200);
		$(".show div").css("background-position",-ind*66+"px -200px");
		if(ind>3){
			$("#purchasing-process ul div").eq(1).addClass("purchase-current");
		}else{
			$("#purchasing-process ul div").eq(1).removeClass("purchase-current");
		}
	});
	//	意见反馈
	//	图片上传
		$(".pic-selection input").change(function(){
			var pic=$(this).val();
			var suffix=pic.substr(pic.lastIndexOf(".")).toUpperCase();
			$(".pic-container").append("<div class='fb-upload-pic'>"+pic+"</div>")
			var a=$(".pic-container div img")[0].src;
			if($(".pic-container div").length>5){
				$(".pic-selection input").attr("disabled",true);
				$(".pic-selection div").text("最多添加6张图片");
				$(".pic-selection p").css("color","#a9a9a9").text("无法添加");
			}else{
				$(".pic-selection input").attr("disabled",false);
				$(".pic-selection div").text("（支持jpg/png/gif格式）");
				$(".pic-selection p").css("color","#000").text("选择图片");
			}
		});
//		点击提交
		$("#feedback button").click(function(){
			if($(".input-sug p input").val()==""||$(".input-sug p input").val().match(/^(86\s)?1[35789]\d{9}$/)==null){
				console.log($(".input-sug p input").val())
				$(".alertbox").css("display","block");
				$(".alertbox p").text("请正确填写手机号码");
			}else if($(".input-sug div textarea").val()==""){
				$(".alertbox").css("display","block");
				$(".alertbox p").text("请填写详细内容");
			}else{
				$(".input-sug p input").val("");
				$(".input-sug div textarea").val("");
				$(".pic-container").text("");
			}
		});
//		取消弹出框
		$(".alertbox p").click(function(){
			$(".alertbox").css("display","none");
		});
//		常见问题
//		常见问题分类
		$("#classification ul li").click(function(){
			$(this).addClass("classfic-current").siblings().removeClass("classfic-current");
		});
//		问题公告展示页
		$("#specific-question ul li").click(function(){
			$("#specific-question>div").text("ヾ(*´∀ ˋ*)ﾉ 感谢您的反馈");
			$("#specific-question ul li").css("display","none");
		})
});