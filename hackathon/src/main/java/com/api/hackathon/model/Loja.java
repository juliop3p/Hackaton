package com.api.hackathon.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table
public class Loja {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idLoja;
	
	@NotNull
	private String nome;
	
	private long telefone;
	
	@NotNull
	private long latidude;
	
	@NotNull
	private long longitude;
	
	@NotNull
	private String imagem;
	
	@OneToMany(mappedBy = "loja", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("loja")
	private List<Alimento> alimento;

	//getters and setters
	public long getIdLoja() {
		return idLoja;
	}

	public void setIdLoja(long idLoja) {
		this.idLoja = idLoja;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public long getTelefone() {
		return telefone;
	}

	public void setTelefone(long telefone) {
		this.telefone = telefone;
	}

	public long getLatidude() {
		return latidude;
	}

	public void setLatidude(long latidude) {
		this.latidude = latidude;
	}

	public long getLongitude() {
		return longitude;
	}

	public void setLongitude(long longitude) {
		this.longitude = longitude;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	
	public List<Alimento> getAlimento() {
		return alimento;
	}

	public void setAlimento(List<Alimento> alimento) {
		this.alimento = alimento;
	}

}
