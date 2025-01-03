package com.example.thrive.user.repo;

import com.example.thrive.user.model.EntrepreneurModel;
import com.example.thrive.user.model.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    Optional<Product> findByProductName(String name);

    List<Product> findAllByProductOwner(EntrepreneurModel entrepreneurModel);

}
