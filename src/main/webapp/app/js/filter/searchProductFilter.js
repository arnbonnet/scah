angular.module('app').filter('searchProduct', function() {
	return function(product, category1, category2, category3, category4) {
		
		var output = [];
		
		for(var index in product) {
			if(product[index].category == 'Livre' && category1){
				output.push(product[index]);
			} else if(product[index].category == 'Jeux vidéo' && category2){
				output.push(product[index]);
			} else if(product[index].category == 'DVD' && category3){
				output.push(product[index]);
			} else if(product[index].category == 'CD' && category4){
				output.push(product[index]);
			}
		}
		return output;
	}
});