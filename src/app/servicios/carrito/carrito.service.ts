import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  listaItemCarritos:any=[]=[];
  constructor() {
    if(!localStorage.getItem('carrito')){
      localStorage.setItem('carrito','[]') ;
    }
    this.listaItemCarritos=JSON.parse(String(localStorage.getItem('carrito')));
  }


}
