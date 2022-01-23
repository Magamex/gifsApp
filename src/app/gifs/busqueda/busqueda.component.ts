import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  constructor(private GifsService: GifsService) { }

  ngOnInit(): void {
  }
  // Non-Null assertion operator (!) - TypeScript
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  // Cuando no se conoce hay que especificar el elemento

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    if (valor.trim().length === 0) {return;}

    this.GifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }
}
