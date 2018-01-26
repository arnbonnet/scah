/**
 * Controller permettant la gestion du panier dans les templates : cart.html
 */

angular.module('app').controller('CartCtrl', function($scope, CartService, OrdersService) {
	
	//renvoie le panier avec les produits sous la forme d'un liste, qui pour 
	//chaque case contient un objet, avec deux clefs : item et nb. item renvoie 
	//un produit acheté par l'utilisateur.visiteur, et nb renvoie la quantité de
	//ce produit.
	$scope.cart = CartService.getCartItems();
	
	
	//renvoie le prix total du panier.
	$scope.totalPrice = function(){
		var price = 0;
		
		for (var item in $scope.cart){
			price = price + $scope.cart[item].item.price* $scope.cart[item].nb;
			
		}
		return Math.round(price*1000)/1000;
	}
	
	
	//supprimer le panier
	$scope.deleteCart = function(){
		$scope.cart = CartService.deleteAllCart();
	}
	
	//supprime un produit
	$scope.deleteOneItem = function (id){
		$scope.cart=CartService.deleteOneItem(id);
		console.log($scope.cart);
	}
	
	//valider le panier : créer une commande
	
});