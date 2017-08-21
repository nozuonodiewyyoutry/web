var app=angular.module("ink1Module",[]);
app.controller("ink1ctrl",function($scope){
	$scope.numb="INK_01";
	$scope.picss=[{src:"image/p1.jpg",tex:"man"},{src:"image/p2.jpg",tex:"backpack"},{src:"image/p3.jpg",tex:"man"},{src:"image/p4.jpg",tex:"man"},
	{src:"image/p5.jpg",tex:"man"},{src:"image/p6.jpg",tex:"man"},{src:"image/p7.jpg",tex:"man"},{src:"image/p8.jpg",tex:"man"},{src:"image/p9.jpg",tex:"man"},
	{src:"image/p10.jpg",tex:"man"},{src:"image/p11.jpg",tex:"man"},{src:"image/p12.jpg",tex:"man"},{src:"image/p13.jpg",tex:"man"},{src:"image/p14.jpg",tex:"man"},
	{src:"image/p15.jpg",tex:"man"}];
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