import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // Non-Null assertion operator (!) - TypeScript
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  // Cuando no se conoce hay que especificar el elemento

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    this.txtBuscar.nativeElement.value = '';
  }
}
