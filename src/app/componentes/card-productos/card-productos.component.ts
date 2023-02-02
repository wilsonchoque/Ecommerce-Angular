import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/productos/producto.service';
import { DialogCarritoComponent } from '../dialog-carrito/dialog-carrito.component';

@Component({
  selector: 'app-card-productos',
  templateUrl: './card-productos.component.html',
  styleUrls: ['./card-productos.component.css']
})
export class CardProductosComponent implements OnInit {

  listaProductos:any=[];
  constructor(private productoservice:ProductoService, private matdialog : MatDialog, private router  :Router ){}

  ngOnInit(): void {
    this.getProductos();  
  }
  async getProductos(){
    try {
      this.productoservice.obtenerProducto().subscribe(
        res=>{
          this.listaProductos = res ;
        },
        error=>{
          console.log(error);
        }
      );
    } catch (error) {
      console.log(error);
    }
   
  }
  openDialogCarrito(i:number){
    //abro el componente
    this.matdialog.open(DialogCarritoComponent,{data:
      {id:this.listaProductos[i]?.id, nombre:this.listaProductos[i]?.nombre,imagen:this.listaProductos[i]?.imagen, costo:this.listaProductos[i]?.costoUnitario, oferta:this.listaProductos[i]?.oferta}
    })
  }
  irRuta(id:string){
    this.router.navigate([`productos/detalle/${id}`]);
  }
}
