package fr.dta.scah.order.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import fr.dta.scah.order.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	
	//	"Select o from Order o inner join ProductsOrder po inner join Product p where o.id = ?"
	//@Query("select o from Order o join ProductQuantity pq join Product p where o.id = :id")
	//public Order findOneById(@Param("id") long id);
}
