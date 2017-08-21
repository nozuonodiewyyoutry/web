var app=angular.module("otherModule",[]);
app.controller("otherctrl",function($scope){
	$scope.numb="other";
	$scope.picss=[{src:"image/o1.jpg",tex:"man"},{src:"image/o2.jpg",tex:"backpack"},{src:"image/o4.jpg",tex:"man"},
	{src:"image/o5.jpg",tex:"man"},{src:"image/o6.jpg",tex:"man"},{src:"image/o7.jpg",tex:"man"},{src:"image/o8.jpg",tex:"man"},{src:"image/o9.jpg",tex:"man"},
	{src:"image/o10.jpg",tex:"man"},{src:"image/o11.jpg",tex:"man"},{src:"image/o12.jpg",tex:"man"},{src:"image/o13.jpg",tex:"man"},{src:"image/o14.jpg",tex:"man"},
	{src:"image/o15.jpg",tex:"man"}];
//	console.log($scope.picss.length)
	$scope.show=function(scope){
		$scope.n=$scope.picss[this.$index].src;
		$scope.te=$scope.picss[this.$index].tex;
		$scope.current=true;
	    var that=this.$index;
	$scope.rightgo=function(){
		    that++;
	if(that>$scope.picss.length-1){
		that=0;
	    }
	$scope.te=$scope.picss[that].tex;
	$scope.n=$scope.picss[that].src;
	 }
	$scope.leftgo=function(){
		   that--;
	if(that<0){
		that=$scope.picss.length-1
	    }
	$scope.te=$scope.picss[that].tex;
	$scope.n=$scope.picss[that].src;
	 }
	}
	$scope.hide=function(scope){
		$scope.current=false;
	}
    })