var filter=angular.module('filter',[]);
filter.controller('filter_controller',function($scope){
	$scope.clicked=function(){
		
	}
	$scope.add_filter=function(filter){
		filter.selected=true;
		display();
	};
	$scope.remove_filter=function(filter){
		filter.selected=false;
		display();
	};
	$scope.filters=
	[{filter:"Responsive",selected:false}
	];

	function display(){
		$scope.show=0;
		for(var i in $scope.filters){
			if ($scope.filters[i].selected)
				$scope.show=1;
		}
	}
	$scope.skills=
		[{"name":"HTML","level":100},
		 {"name":"CSS","level":100},
		 {"name":"Javascript","level":100},
		 {"name":"JQuery","level":100},
		 {"name":"Bootstrap","level":100},
		 //{"name":"PHP","level":30},
		 {"name":"Photoshop","level":70},
		 //{"name":"Laravel","level":10},
		 {"name":"AngularJs","level":40}];
});