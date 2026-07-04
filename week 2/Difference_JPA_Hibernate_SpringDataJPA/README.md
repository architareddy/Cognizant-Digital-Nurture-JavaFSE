# Hands-on 4

## Difference between JPA, Hibernate and Spring Data JPA

| Feature | JPA | Hibernate | Spring Data JPA |
|---------|-----|-----------|-----------------|
| Definition | Java Persistence API (JPA) is a specification for object-relational mapping (ORM). | Hibernate is an ORM framework that implements JPA. | Spring Data JPA is a Spring framework module that simplifies JPA-based data access. |
| Type | Specification | Implementation (ORM Framework) | Abstraction over JPA |
| Purpose | Defines standards for persistence. | Implements ORM and handles database operations. | Reduces boilerplate code and simplifies database access. |
| Boilerplate Code | More | Moderate | Very Less |
| Transaction Management | Not provided directly. | Managed manually using Hibernate APIs. | Managed using Spring's `@Transactional` annotation. |
| Repository Support | No | No | Yes (`JpaRepository`) |
| Dependency | Requires an implementation like Hibernate. | Can work independently. | Requires JPA implementation such as Hibernate. |
| Example | `EntityManager` | `Session` | `JpaRepository` |

## Hibernate Example

```java
Session session = factory.openSession();
Transaction tx = session.beginTransaction();
session.save(employee);
tx.commit();
session.close();
```

## Spring Data JPA Example

```java
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}

@Autowired
private EmployeeRepository employeeRepository;

@Transactional
public void addEmployee(Employee employee) {
    employeeRepository.save(employee);
}
```

## Conclusion

- **JPA** is a specification that defines how Java objects are persisted.
- **Hibernate** is an implementation of JPA that provides ORM functionality.
- **Spring Data JPA** is built on top of JPA and simplifies database operations by reducing boilerplate code.