angular.module('app').factory('CartService', function($cookies, $http){

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
		
		$cookies.putObject('myCart', cart);
	} 
	
	var getCartNbItemBody = function(){
		return getCart().length;
	}
	
	var getCartItemsBody = function(){
		return getCart();
	}
	
	//supprime le panier. En faite ça renvoie un tableau vide, donc un panier vide.
	var deleteAllCartBody = function(){
		var cart = [];
		$cookies.putObject('myCart', cart);
		return cart;
	}
	
	//supprime un élément du panier. Le produit est passé en paramètre, 
	//on vérifie si le produit est bien dans le panier, puis on cherche
	//l'index du produit dans le tableau et on le supprime.On met à jour
	//Les cookies, et On retourne le nouveau panier.
	var deleteOneItemBody = function(id){
		var cart = getCart();
		for (var item in cart){
			if (Object.is (cart[item].item.id, id) ){
				cart.splice(item, 1);
			}
		}
		$cookies.putObject('myCart', cart);
		return cart;
	}
	
	
	return {
		addToCart : addToCartBody,
		getCartNbItem : getCartNbItemBody,
		getCartItems : getCartItemsBody,
		deleteAllCart : deleteAllCartBody,
		deleteOneItem : deleteOneItemBody
		
	}
})