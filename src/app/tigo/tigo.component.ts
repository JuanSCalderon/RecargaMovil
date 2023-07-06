import { Component } from '@angular/core';
import { VentaRecargaService } from '../venta-recarga.service';

@Component({
  selector: 'app-tigo',
  templateUrl: './tigo.component.html',
  styleUrls: ['./tigo.component.css']
})
export class TigoComponent {
  recarga = {
    operador: 'Tigo',
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
