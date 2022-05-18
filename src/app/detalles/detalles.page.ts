import { Component, OnInit } from '@angular/core';
import { PeliculaServiceService } from '../pelicula-service.service';
import { ActivatedRoute } from '@angular/router';
import { RootObject } from '../models/peli';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  constructor(private PeliculasService: PeliculaServiceService, private router:ActivatedRoute,) { 
   
    
  }
  public peliculas_Nombre!: RootObject;
  public pelicula_path!: string;
  public pelicula_title!: string;
  public pelicula_over!: string;
  public pelicula_original_language!: string;
  public pelicula_release_date!: string;
  public pelicula_vote_average!: number;

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
   
   // console.log(id);
   this.PeliculasService.detalles_Peliculas(id).subscribe(peli => {
     
      
      this.pelicula_title = peli.title;
      this.pelicula_path = peli.poster_path;
      this.pelicula_over = peli.overview;
      this.pelicula_original_language = peli.original_language;
      this.pelicula_release_date = peli.release_date;
      this.pelicula_vote_average = peli.vote_average;
     })
     
  }
}
