var app = angular.module('myApp', []);

app.controller('baseCtrl',function(){
	
});

app.directive('headerdir',function(){
	return {
		replace:true,
		templateUrl:'directive/header.html'
	}
});

app.directive('footerdir',function(){
	return {
		replace:true,
		templateUrl:'directive/footer.html'
	}
});