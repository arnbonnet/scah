angular.module('app').factory('CartService', function($cookies){

	function getCart(){
		var cart = $cookies.getObject('myCart');
		if(cart == undefined){
			cart = [];
		}
		return cart;
	}
	
	var addToCartBody = function(product, quantity){
		console.log('added new product in cart');
		var cart = getCart();
		var element = {
				item : product,
				nb : quantity
		} 
		var found = false;
		for(var p in cart){
			if(cart[p].item.id == product.id){
				cart[p].nb += quantity;
				found = true;
			}
			//console.log('added in list: ' + cart[p].item + 'bn:'+cart[p].nb);
		}
		if(!found){
			cart.push(element);
		}
		console.log(cart);
		$cookies.putObject('myCart', cart);
	} 
	
	var getCartNbItemBody = function(){
		return getCart().length;
	}
	
	var getCartItemsBody = function(){
		return getCart();
	}
	
	return {
		addToCart : addToCartBody,
		getCartNbItem : getCartNbItemBody,
		getCartItems : getCartItemsBody
	}
})