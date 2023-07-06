import { Component } from '@angular/core';
import { VentaRecargaService } from '../venta-recarga.service';

@Component({
  selector: 'app-movistar',
  templateUrl: './movistar.component.html',
  styleUrls: ['./movistar.component.css']
})
export class MovistarComponent {
  recarga = {
    operador: 'Movistar',
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
