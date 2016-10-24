(function(){
  angular
	.module('MyApp')
	.directive('navigation', navigation);
	function navigation () {
		return {
			restrict: 'E',			
			templateUrl: '/components/directives/navigation.template.html'
		};
	};

})();

(function(){
	angular
		.module('MyApp')
		.directive('bodyHeight', bodyHeight);
	function bodyHeight($compile){
		return {
			restrict: 'A',
			link: function(scope, element, attrs){
				var winW   = window.innerWidth,
					winH   = window.innerHeight,
					header = document.getElementsByTagName("header"),
					headH  = header[0].offsetHeight;
				element.css('min-height',winH - headH-10+'px');
			}
		}
	};
}());

(function () {
	angular
		.module('MyApp')
		.directive('autoActive', autoActive);
		function autoActive($location) {
			return {
				restrict: 'A',
				scope: false,
				link: function (scope, element) {
					function setActive() {
						var path = $location.path();
						if (path) {
							angular.forEach(element.find('li'), function (li) {
								var anchor = li.querySelector('a');
								if (anchor.href.match('#' + path + '(?=\\?|$)')) {
									angular.element(li).addClass('active');
								} else {
									angular.element(li).removeClass('active');
								}
							});
						}
					}
					setActive();
					scope.$on('$locationChangeSuccess', setActive);
				}
			}	
	};
}());