package fr.dta.scah;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Session;

public abstract class AbstractRepository<T> {

	@PersistenceContext
	EntityManager em;

	private Class<T> klass;

	public AbstractRepository(Class<T> klass) {
		this.klass = klass;
	}

	public AbstractRepository() {

	}

	protected Session getSession() {
		return em.unwrap(Session.class);
	}
}