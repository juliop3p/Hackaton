package com.api.hackathon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.hackathon.model.Loja;

public interface LojaRepository extends JpaRepository<Loja,Long>{
	public List<Loja> findAllByNomeContainingIgnoreCase(String nome);
}
