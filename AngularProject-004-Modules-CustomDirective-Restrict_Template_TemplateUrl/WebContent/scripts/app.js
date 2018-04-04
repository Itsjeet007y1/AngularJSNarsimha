var app=angular.module("myApp",[]);
app.directive("demoDirective",function(){
	var directOb={};
	directOb.restrict="E";
	directOb.template="<h1>Hello :{{uname}}</h1>";
	return directOb;
});
app.directive("studentList",function(){
	var directObj={};
	directObj.restrict="A";
	directObj.templateUrl="Template.html";
	return directObj;
});
app.controller("DemoController",function($scope){
	$scope.uname="Jitendra";
	$scope.students=[
		{sname:"Smith",course:"Html"},
		{sname:"John",course:"jQuery"}
	];
});