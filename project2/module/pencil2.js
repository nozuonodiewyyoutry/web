var app=angular.module("pencil2Module",[]);
app.controller("pencil2ctrl",function($scope){
	$scope.numb="pencil_02";
	$scope.picss=[{src:"image/p2_1.jpg",tex:"man"},{src:"image/p2_2.jpg",tex:"backpack"},{src:"image/p2_3.jpg",tex:"man"},{src:"image/p2_4.jpg",tex:"man"},
	{src:"image/p2_5.jpg",tex:"man"},{src:"image/p2_6.jpg",tex:"man"},{src:"image/p2_7.jpg",tex:"man"},{src:"image/p2_8.jpg",tex:"man"},{src:"image/p2_9.jpg",tex:"man"},
	{src:"image/p2_10.jpg",tex:"man"},{src:"image/p2_11.jpg",tex:"man"},{src:"image/p2_12.jpg",tex:"man"},{src:"image/p2_13.jpg",tex:"man"},{src:"image/p2_14.jpg",tex:"man"},
	{src:"image/p2_15.jpg",tex:"man"},{src:"image/p2_16.jpg",tex:"man"}];
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