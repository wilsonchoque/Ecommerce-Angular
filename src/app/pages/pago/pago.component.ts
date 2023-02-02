import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';
import { LoginService } from 'src/app/servicios/login/login.service';
import { PedidosService } from 'src/app/servicios/pedidos/pedidos.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {
  total=0;
  constructor( public carritoservice:CarritoService , private loginservice:LoginService, private pedidosservice :PedidosService , private router : Router){
    this.calcularTotal();
  }
  calcularTotal(){
    for (let i = 0; i < this.carritoservice.listaItemCarritos.length; i++) {
      this.total += this.carritoservice.listaItemCarritos[i].total;
    }
    return this.total;
  }
  
}
