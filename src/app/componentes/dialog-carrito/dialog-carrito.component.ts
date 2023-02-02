import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-dialog-carrito',
  templateUrl: './dialog-carrito.component.html',
  styleUrls: ['./dialog-carrito.component.css']
})
export class DialogCarritoComponent implements OnInit {
  formcarrito!:FormGroup;
  carrito:any=[]=[];
  total!:number;
    constructor( @Inject(MAT_DIALOG_DATA) public data:{id:string, nombre:string,imagen:string, costo:string, oferta:string} , private formPreguntaBuilder:FormBuilder , private carritoservice: CarritoService){
      this.formcarrito=formPreguntaBuilder.group({
        cantidad:['',
        [
          Validators.required
        ]  
        ],
      });
    }
    ngOnInit(): void {
      this.carrito=JSON.parse(String(localStorage.getItem('carrito')));
    }
    agregarcarrito(){
      this.calculototal();
        //si hay datos
        if(this.carrito.length!==0){
          const res= this.carrito.find((carritoitem:any)=>carritoitem.idpro == this.data.id);
          //actualizar la cantidad y el total
          if(res){
            this.carrito.map((carritoitem:any, index:number)=>{
              if(carritoitem.idpro==this.data.id){
                carritoitem.cantidad=carritoitem.cantidad + this.formcarrito.get('cantidad')?.value;
                if(this.data.oferta){
                  carritoitem.total= Number(this.data.oferta) * carritoitem.cantidad;
                }else{
                  carritoitem.total= Number(this.data.costo) * carritoitem.cantidad;
                }
                console.log(carritoitem.cantidad);
                console.log(index)
                this.carrito[index].cantidad=carritoitem.cantidad;
                this.carrito[index].total=carritoitem.total;
                //console.log(this.carrito)
                localStorage.setItem('carrito',JSON.stringify(this.carrito));
              }
            })
          }else if(res==undefined){
            this.carrito.push({'idpro':this.data?.id , 'nombre':this.data?.nombre, 'imagen':this.data?.imagen,'costoUnitario':this.data?.costo, 'oferta':this.data?.oferta, 'cantidad':this.formcarrito.get('cantidad')?.value, 'total':this.total});
            localStorage.setItem('carrito',JSON.stringify(this.carrito));
          }
       
        }else{
          this.carrito.push({'idpro':this.data?.id , 'nombre':this.data?.nombre, 'imagen':this.data?.imagen,'costoUnitario':this.data?.costo, 'oferta':this.data?.oferta, 'cantidad':this.formcarrito.get('cantidad')?.value, 'total':this.total});
          localStorage.setItem('carrito',JSON.stringify(this.carrito));
        }
        
        this.carritoservice.listaItemCarritos=JSON.parse(String(localStorage.getItem('carrito')));
    }
    calculototal(){
      if(this.formcarrito.get('cantidad')?.valid && this.formcarrito.get('cantidad')?.value!=0){
        if(this.data.oferta){
          this.total= Number(this.data.oferta ) * this.formcarrito.get('cantidad')?.value;
          console.log(this.total); 
        }else{
          this.total= Number(this.data.costo ) * this.formcarrito.get('cantidad')?.value;
          console.log(this.total);
        }
        
      }
    }

    validacion(name: string) {
      return this.formcarrito.get(name)?.errors && (this.formcarrito.get(name)?.touched || this.formcarrito.get(name)?.dirty ) 
    }
}
