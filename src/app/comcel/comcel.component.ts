import { Component } from '@angular/core';
import { VentaRecargaService } from '../venta-recarga.service';

@Component({
  selector: 'app-comcel',
  templateUrl: './comcel.component.html',
  styleUrls: ['./comcel.component.css']
})
export class ComcelComponent {
  recarga = {
    operador: 'Comcel',
    valor: 0,
    vendedor: ''
  };

  constructor(private ventaRecargaService: VentaRecargaService) { }

  venderRecarga(): void {
    this.ventaRecargaService.venderRecarga(this.recarga);
    console.log('Recarga vendida: ', this.recarga)
    this.recarga.valor = 0;
    this.recarga.vendedor = '';
  }
}
