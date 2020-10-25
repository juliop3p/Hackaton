package com.api.hackathon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.hackathon.model.Alimento;
import com.api.hackathon.repository.AlimentoRepository;

@RestController
@RequestMapping("/tipos")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AlimentoController {

	@Autowired
	private AlimentoRepository repository;

	@GetMapping
	public ResponseEntity<List<Alimento>> getAll() {
		return ResponseEntity.ok(repository.findAll());
	}
	@GetMapping("/{tipo}")
	public ResponseEntity<List<Alimento>> GetByNome(@PathVariable String tipo){
		return ResponseEntity.ok(repository.findAllByTipoContainingIgnoreCase(tipo));
	}
	@PostMapping
    public ResponseEntity<Alimento> post(@RequestBody Alimento tipo) {
         return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(tipo));
    }

    @PutMapping
    public ResponseEntity<Alimento> put(@RequestBody Alimento tipo) {
        return ResponseEntity.status(HttpStatus.OK).body(repository.save(tipo));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
