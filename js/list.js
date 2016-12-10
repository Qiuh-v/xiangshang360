

app.controller('productlist',function($scope,$http,filterrate){
	$scope.opts = [];
	$http.get("data/productlist.json").success(function(data) {
		$scope.opts = data;
		
	})
	
	$scope.sortvalue = '';
	
	//设置不同排序条件，val为传入的条件
	$scope.changesortvalue = function(val){
		$scope.sortvalue = val;
	}
	
	//选择不同预期年化收益率调用的方法
	$scope.changerate = function(lower,upper){
		console.log($scope.opts)
		
		filterrate(lower,upper,function(arr){
			
			//利用闭包取到筛选后的数据，更新到$scope.opts
			$scope.opts = arr
			
		})
		
		
	}
})

app.directive('productdir',function(){
	return {
		replace:true,
		templateUrl:'directive/productlist.html'
		
	}
})


//把小数转为百分数
app.filter("persent",function(){
	
	return function(obj){
		
		return obj*100+'%';
	}
})

//按收益率排序的service
app.service('filterrate',function($http){
	return function(lower,upper,callback,fn){
		var out = [];
		var temp = [];
		$http.get("data/productlist.json").success(function(data) {
			temp = data
			
			angular.forEach(temp,function(item){
				
				if(item.ratedata>=lower/100 && item.ratedata <= upper/100){
					out.push(item)
				}
			})
			//console.log(out);
			callback(out);
			
		})
		
	}
})

//选择筛选条件改变样式，背景设为橙色
app.directive('selectuichange', function() {
	return {
		
		link: function() {
			var $aSelectLi = $(".select li")
			$aSelectLi.on("click", function() {
				$(this).siblings().removeClass('active')
				$(this).addClass('active')
			})
		}

	}
})

//选择排序条件改变样式，字体颜色为橙色
app.directive('sortuichange',function(){
	return {
		link: function(){
			var $aSortSpan = $('.sort span');
			$aSortSpan.on('click',function(){
				$(this).siblings().removeClass('active');
				$(this).addClass('active');
			})
		}
	}
})
