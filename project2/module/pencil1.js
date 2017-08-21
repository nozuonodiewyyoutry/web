var app=angular.module("pencil1Module",[]);
app.controller("pencil1ctrl",function($scope){
	$scope.numb="pencil_01";
	$scope.picss=[{src:"image/p1_1.jpg",tex:"man"},{src:"image/p1_2.jpg",tex:"backpack"},{src:"image/p1_3.jpg",tex:"man"},{src:"image/p1_4.jpg",tex:"man"},
	{src:"image/p1_5.jpg",tex:"man"},{src:"image/p1_6.jpg",tex:"man"},{src:"image/p1_7.jpg",tex:"man"},{src:"image/p1_8.jpg",tex:"man"},{src:"image/p1_9.jpg",tex:"man"},
	{src:"image/p1_10.jpg",tex:"man"},{src:"image/p1_11.jpg",tex:"man"},{src:"image/p1_12.jpg",tex:"man"},{src:"image/p1_13.jpg",tex:"man"}];
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