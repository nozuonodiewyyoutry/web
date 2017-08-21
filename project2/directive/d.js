var app=angular.module("dMoudle",[]);//创建一个模块，名为dmodule，该模块被引用后返回views/d.html里的内容
app.directive("header",function(){//创建一个header指令
	 return {
	 	 restrict:'AE',
	 	 templateUrl:"views/d.html",//指令会返回从views/d.html得到的东西
	 	 replace:false//表示引用后是否覆盖前面的东西，true为不覆盖
	 }
})

