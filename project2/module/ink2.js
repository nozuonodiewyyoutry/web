var app=angular.module("ink2Module",[]);
app.controller("ink2ctrl",function($scope){
	$scope.numb="INK_02";
	$scope.picss=[{src:"image/i139.jpg",tex:"人"},{src:"image/i149.jpg",tex:"main"},
	{src:"image/i159.jpg",tex:"main"},{src:"image/i1111.jpg",tex:"main"},
	{src:"image/i1210.jpg",tex:"花"},{src:"image/i1091.jpg",tex:"main"},
	{src:"image/i111.jpg",tex:"main"},{src:"image/i59.jpg",tex:"房子"},
	{src:"image/i49.jpg",tex:"人"},{src:"image/i39.jpg",tex:"房子"},
	{src:"image/i29.jpg",tex:"main"},{src:"image/i129.jpg",tex:"main"}
	];
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