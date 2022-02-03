import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    // if(localStorage.getItem('historial')){
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
  }
// https://api.giphy.com/v1/gifs/search?api_key=rwja0IV3q4g2LjbR422esKEen8gt76Kb&q=mortalkombat&limit=10
  private apiKey: string = 'rwja0IV3q4g2LjbR422esKEen8gt76Kb';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  //Cambiar any por su tipo
  public resultados: Gif[] = [];

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

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
                    .set('api_key',this.apiKey)
                    .set('q',query)
                    .set('limit','10');

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{ params:params })
      .subscribe((resp) =>{
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(resp.data));
      })
    }
}
