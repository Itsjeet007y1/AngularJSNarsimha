var app=angular.module("myApp",[]);
app.factory("MathService",function(){
	var factObj={};
	factObj.sum=function(x,y){
		var z=parseInt(x)+parseInt(y);
		return z;
	};
	factObj.sub=function(x,y){
		var z=parseInt(x)-parseInt(y);
		return z;
	};
	factObj.mul=function(x,y){
		var z=parseInt(x)*parseInt(y);
		return z;
	};
	factObj.div=function(x,y){
		var z=parseInt(x)/parseInt(y);
		return z;
	};
	return factObj;
});
app.controller("DemoController",function($scope,MathService){
	$scope.val1="";
	$scope.val2="";
	$scope.result="";
	$scope.sum=function(){
		$scope.result=MathService.sum($scope.val1,$scope.val2);
	};
	$scope.sub=function(){
		$scope.result=MathService.sub($scope.val1,$scope.val2);
	};
	$scope.mul=function(){
		$scope.result=MathService.mul($scope.val1,$scope.val2);
	};
	$scope.div=function(){
		$scope.result=MathService.div($scope.val1,$scope.val2);
	};
});