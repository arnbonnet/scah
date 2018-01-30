/**
 * Controller permettant la gestion du panier dans les templates : cart.html
 */

angular.module('app').controller('CartCtrl', function($scope, CartService, OrdersService, $location, UserService) {
	
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
		
	}
	
	//valider le panier : créer une commande
	$scope.create = function (){
		if (UserService.getRole() != ''){
			var order = {'date':'2018-01-31', 'orderNumber':Math.round(Math.random(999999)*100000), 'totalPrice':$scope.totalPrice() }
			var quantityProduct = [];
			for (var item in $scope.cart){
				quantityProduct.push({'product' :{'id':$scope.cart[item].item.id}, 'quantity' :$scope.cart[item].nb } );
			}
			order.quantityProducts = quantityProduct;
			console.log(order);
			
			
			return OrdersService.addOrder(order).then(function(response){
				console.log('order creation success');
				$location.path('/userOrders');
				return response.data;
			}, function(response){
				console.log('error creating order' + response.data)
			});
			
		}
		else {
			console.log('non connecte');
			$location.path('/connection');
		}
		
		
	}
	
});