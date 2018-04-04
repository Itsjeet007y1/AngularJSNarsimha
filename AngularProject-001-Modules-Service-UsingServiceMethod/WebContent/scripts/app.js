/**
 * app.js file
 */
var app=angular.module("myApp",[]);
app.service("loginService",function(){
	this.isValidUser=function(s1,s2) {
		var result="";
		if(s1=="Jitendra" && s2=="admin123"){
			result="Welcome : "+s1;
		} else {
			result="Invalid Username/Password";
		}
		return result;
	};
});
app.controller("DemoController",function($scope,loginService){
	$scope.uname="";
	$scope.password="";
	$scope.str="";
	$scope.f1=function(){
		$scope.str=loginService.isValidUser($scope.uname,$scope.password);
	};
});