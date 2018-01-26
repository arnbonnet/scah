insert into _order (id,date, order_number,total_price, user_id) values
(nextval('seq_order'), '29-JUN-07', '46484392937', 10.3, 1),
(nextval('seq_order'),'29-JUN-17', '89789466322', 57.3, 1),
(nextval('seq_order'), '29-JUN-18', '87895842155', 82.5, 1);

insert into product_quantity (id, quantity, order_id, product_id) values
(1, 4, 8, 143),
(2, 3, 8, 152),
(3, 10, 9, 153),
(4, 1, 10, 150);