package com.api.hackathon.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="Tipo")
public class Alimento {
	
	@NotNull
	private String nome;
	@NotNull
	private String tipo;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idAlimento;
	
	@ManyToOne
	private Loja loja;

	//getters and setters
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public long getIdAlimento() {
		return idAlimento;
	}

	public void setIdAlimento(long idAlimento) {
		this.idAlimento = idAlimento;
	}

	public Loja getLoja() {
		return loja;
	}

	public void setLoja(Loja loja) {
		this.loja = loja;
	}

}
