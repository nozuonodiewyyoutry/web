document.documentElement.style.fontSize=innerWidth/16+"px";//设置rem
/*轮播图*/
var ul=document.getElementsByTagName("ul")[1];
var banner=document.getElementsByTagName("div")[2];
//console.log(ul);
var lis=ul.children;
var circlebox=document.createElement("p");//7-14行为创建圆点
banner.appendChild(circlebox);
for (var i=0;i<lis.length;i++) {
	var circle=document.createElement("span");
	circlebox.appendChild(circle);
}
var spans=circlebox.children;
function getstyle (obj,attr) {
	return getComputedStyle(obj,null)[attr];//得到属性的值的打包函数
}
var w=parseInt( getstyle (lis[0],"width"));
//		console.log(w);
var oleft=0;
var n=0;//记录页数
ul.addEventListener("touchstart",function (ev) {
	ev.preventDefault();
	clearInterval(timer);
	var ex=ev.changedTouches[0].pageX;
//			console.log(ex);
	 oleft=this.offsetLeft;
//	 console.log( oleft);
	ul.addEventListener("touchmove",function (ev) {
		clearInterval(timer);
		var dis=ev.changedTouches[0].pageX-ex;		
				console.log(dis);
		ul.style.left=oleft+dis+"px";
		
	})
	ul.addEventListener("touchend",function (ev) {
		clearInterval(timer);
		n=Math.round(this.offsetLeft/w);
		
		if (n<-7) {
			n=-7;
		}
		if (n>0) {
			n=0;
		}
		
		ul.style.left=w*n+"px";	
		timer=setInterval(autoplay,1000)
	})
})
/*自动轮播*/
var key;
var timer=setInterval(autoplay,1000)
function autoplay () {
	n--;
	key=-n;
	console.log(key);
	for (var i=0;i<lis.length;i++) {
		spans[i].style.backgroundColor="white";
	}
	ul.style.left=w*n+"px";
	
	if (n<-6) {
		n=1
	}
	spans[key].style.backgroundColor="red";
	
}



