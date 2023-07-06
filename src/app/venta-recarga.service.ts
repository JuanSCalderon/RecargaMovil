import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentaRecargaService {
  private recargasVendidas: any[] = [];

  constructor() { }

  venderRecarga(recarga: any): void {
    this.recargasVendidas.push(recarga);
  }

  getRecargasVendidas():any[] {
    return this.recargasVendidas;
  }

  getRecargasOperador(operador: string): any[] {
    return this.recargasVendidas.filter(recarga => recarga.operador === operador);
  }

  getRecargasPersona(persona: string): any[] {
    return this.recargasVendidas.filter(recarga => recarga.vendedor === persona);
  }
}
