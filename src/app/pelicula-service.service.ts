import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{ApiPelicula,RootObject} from '../app/models/peli'
@Injectable({
  providedIn: 'root'
})
export class PeliculaServiceService {

  private apikey: string = "0a0ed1329a515c5968c710869e2c3ff6"
  private url_Pelicula_popular: string = "https://api.themoviedb.org/3/movie/popular?api_key="
  private url_coger_detalles: string = "https://api.themoviedb.org/3/movie/"
  private url_lista_pelis: string = "https://api.themoviedb.org/3/search/movie?api_key=0a0ed1329a515c5968c710869e2c3ff6&language=en-US&query="
  constructor(private http: HttpClient	) { }
 // https://api.themoviedb.org/3/search/movie?api_key=0a0ed1329a515c5968c710869e2c3ff6&language=en-US&query=The%20Avengers
  pelicula_popular(){
   const url = `${this.url_Pelicula_popular}${this.apikey}&language=en`;
   return this.http.get<ApiPelicula >(url)
  
   }
 
 
   detalles_Peliculas(id_peli: String){
     const url = `${this.url_coger_detalles}/${id_peli}?api_key=${this.apikey}&language=en `
     return this.http.get<RootObject>(url);
   }
   
   lista_peliculas(pelicula_buscar: String){
     const url = `${this.url_lista_pelis}${pelicula_buscar}`;
    return this.http.get<ApiPelicula >(url)
 
 
   }
 }
 
