
app.controller('main', function($scope, $http, $sce) {

	$scope.deputes = [];
	$scope.change = function(e) {

		$http.get("data/depute1.json").success(function(data) {
			//console.log(data)
			
			$scope.deputes = data[e]
		})
	}

	$scope.change(0);
	
	$scope.directs = [];
	$http.get("data/direct.json").success(function(data) {
		
		$scope.directs = data
	})
	
	$scope.transfers = [];
	$http.get("data/transfer.json").success(function(data) {
		
		$scope.transfers = data
	})

});

app.directive('uichange', function() {
	return {
		
		link: function() {
			var $aDeputeLi = $(".depute-list-title li")
			$aDeputeLi.on("click", function() {
				$aDeputeLi.removeClass('active')
				$(this).addClass('active')
			})
		}

	}
})

app.directive('deputedir',function(){
	return {
		templateUrl:'directive/depute.html',
		replace:true
	}
})



app.directive('directdir',function(){
	return {
		
		template:'<tr ng-repeat="opt in directs">'+
					'<td>{{opt.title}}'+
					'</td>'+
					'<td class="red">{{opt.rate}}</td>'+
					'<td>{{opt.range}}</td>'+
					'<td>{{opt.money}}</td>'+
					'<td>{{opt.level}}</td>'+
					'<td class="process">'+
						'<span class="num">{{opt.progress}}</span>'+
						'<span class="process-span">'+
						'<span class="process-s"></span>'+
						'<s class="circle"></s>'+
						'</span>'+
					'</td>'+
					'<td>'+
						'<a href="list.html" class="join">立刻加入</a>'+
					'</td>'+
					'</tr>',
		replace:true
	
	}
})

app.directive('transferdir',function(){
	return {
		replace:true,
		template:'<tr ng-repeat="opt in transfers">'+
					'<td>{{opt.title}}'+
					'</td>'+
					'<td class="red">{{opt.rate}}</td>'+
					'<td>{{opt.range}}</td>'+
					'<td>{{opt.price}}</td>'+
					'<td>{{opt.method}}</td>'+
					'<td>'+
						'<a href="list.html" class="join">立刻加入</a>'+
					'</td>'+
					'</tr>'
	}
})