import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http: HttpClient) { }
// https://api.giphy.com/v1/gifs/search?api_key=rwja0IV3q4g2LjbR422esKEen8gt76Kb&q=mortalkombat&limit=10
  private apiKey: string = 'rwja0IV3q4g2LjbR422esKEen8gt76Kb';
  private _historial: string[] = [];

  //Cambiar any por su tipo
  public resultados: any[] = [];

  // Romper la referencia con el operador spread (...)
  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string = '') {
    // Sacar espacios y todo en minusculas
    query = query.trim().toLocaleLowerCase();

    // Para insertar un elemento que ya existe en el array usar includes()
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.slice(0, 10);
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=rwja0IV3q4g2LjbR422esKEen8gt76Kb&q=${query}&limit=10`)
      .subscribe((resp:any) =>{
        console.log(resp.data);
        this.resultados = resp.data;
      })
    }
}
