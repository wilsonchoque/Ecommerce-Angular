import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto/producto';
import { ProductoService } from 'src/app/servicios/productos/producto.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogCarritoComponent } from 'src/app/componentes/dialog-carrito/dialog-carrito.component';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  id!:string;
  producto:any=[]=[];
  constructor(private productoservice: ProductoService , private routeparam:ActivatedRoute ,private matdialog : MatDialog, ){
    this.id=String(routeparam.snapshot.paramMap.get('id')); 
    this.getDetalle()
  }

getDetalle(){
  let producto;
  this.productoservice.obtenerProductoporID(this.id)
  .then(
    res=>{
      this.producto = {
        id: res.id,
        ...(res.data() as Producto),
      };
      //console.log(this.producto.nombre)
    },
    error=>{
      console.log(error);
    }
  )
}
openDialogCarrito(){
  //abro el componente
  this.matdialog.open(DialogCarritoComponent,{data:
    {id:this.producto?.id, nombre:this.producto?.nombre,imagen:this.producto?.imagen, costo:this.producto?.costoUnitario, oferta:this.producto?.oferta}
  })
}
}
