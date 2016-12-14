'use strict';

angular.
	module('phoneDetail').
	component('phoneDetail', {
		templateUrl: 'phone-detail/phone-detail.template.html',
		controller: ['$routeParams', 'Phone',
			function PhoneDetailController($routeParams, Phone) {
				var self = this;

				self.setImagePreview = function setImagePreview(img){
					self.mainImagePath = img;
				};
				self.slideImage = function slideImage(img){
					self.mainImagePath = img;
				};
				self.dblClick =  function dblClick(img){
					self.imgDblClick = img;
				};
				self.phoneDetail = Phone.get({phoneId: $routeParams.phoneId}, function(phone){
					self.phoneDetail = phone;
					self.setImagePreview(self.phoneDetail.images[0]);
					self.titlePage = self.phoneDetail.name;
				});
				console.log(self.titlePage);
				
			}
		]
})