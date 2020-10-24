package com.api.hackathon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.hackathon.model.Loja;
import com.api.hackathon.repository.LojaRepository;

@RestController
@RequestMapping("/loja")
public class LojaController {
	@Autowired
	private LojaRepository repository;

	@GetMapping
	public ResponseEntity<List<Loja>> GetAll() {
		return ResponseEntity.ok(repository.findAll());
	}
	
	/*@GetMapping("/nome/{nome}")
	public ResponseEntity<List<Loja>> GetByNome(@PathVariable String nome){
		return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome));
	}*/
	
	@PostMapping
    public ResponseEntity<Loja> post(@RequestBody String nome) {
         return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(nome));
    }

    @PutMapping
    public ResponseEntity<Loja> put(@RequestBody String nome) {
        return ResponseEntity.status(HttpStatus.OK).body(repository.save(nome));
    }

    @DeleteMapping("/{nome}")
    public void delete(@PathVariable String nome) {
        repository.deleteByNome(nome);
    }
}