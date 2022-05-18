import { Component } from '@angular/core';
import { Result, } from '../models/peli';
import { Router } from '@angular/router';
import { PeliculaServiceService } from '../pelicula-service.service';
import {HttpClient, } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
 
  texto!: string;
  public peliculas: Array<Result> = []
  constructor ( private router:Router,private PeliculasService: PeliculaServiceService) {}

  ngOnInit(): void {

  
   this.PeliculasService.pelicula_popular().subscribe(peli => {
     
    
    
    this.peliculas = peli.results;
    
    })
  
  }

  busqueda_peli(){
    console.log(this.texto);
    if(this.texto == ""){
      this.PeliculasService.pelicula_popular().subscribe(peli => {
     
    
    
        this.peliculas = peli.results;
        
        })
    }else{
    
    this.PeliculasService.lista_peliculas(this.texto).subscribe(peli => {
     
    
    
      this.peliculas = peli.results;
      
      })
    }
  }
  
}
