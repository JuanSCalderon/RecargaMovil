import { Component } from '@angular/core';
import { VentaRecargaService } from '../venta-recarga.service';


@Component({
  selector: 'app-uff',
  templateUrl: './uff.component.html',
  styleUrls: ['./uff.component.css']
})
export class UffComponent {
  recarga = {
    operador: 'Uff',
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
