package com.api.hackathon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.hackathon.model.Loja;

public interface LojaRepository extends JpaRepository<Loja,Long>{
	public List<Loja> findAllByIdLojaContainingIgnoreCase(Long idLoja);

	public Loja save(String nome);

	public void deleteByNome(String nome);

	public Loja findAllByNomeContainingIgnoreCase(String nome);
}
