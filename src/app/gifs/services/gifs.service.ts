import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor() { }

  private _historial: string[] = [];

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

    console.log(this._historial)
  }
}
