package com.api.hackathon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.hackathon.model.Alimento;

public interface AlimentoRepository extends JpaRepository<Alimento,Long>{
	public List<Alimento> findAllByTipoContainingIgnoreCase(String tipo);
}
