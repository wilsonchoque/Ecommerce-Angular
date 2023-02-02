import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto/producto';
import { ProductoService } from 'src/app/servicios/productos/producto.service';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent implements OnInit {
  listaProductos:any=[];

  constructor( private productoservice: ProductoService){}
  ngOnInit():void{
    this.getProductos();
  }

  async getProductos(){
    try {
      this.productoservice.obtenerProducto().subscribe(
        res=>{
          this.listaProductos=res;
        },
        error=>{
          console.log(error);
        }
      );
    } catch (error) {
      
    }
  }

  eliminarProducto(producto : Producto){
    const response = this.productoservice.deletedProducto(producto)
    console.log(response)
  }  

  
}
