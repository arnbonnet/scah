package fr.dta.scah.order.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import fr.dta.scah.order.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

	public Order findOneById(long id);

	@Query("select o from Order o join fetch o.quantityProducts qp join fetch qp.product join fetch o.user where user_id = ?")
	public List<Order> findAllOfUserWithProducts(Long id);

}
