import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/productos/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent {
  formRProductos!:FormGroup;
  
  constructor(private frmB:FormBuilder , private productoservice : ProductoService , private router:Router){
    this.formRProductos=frmB.group({
      nombre:['',
        [
          Validators.required
        ]
      ],     
          
      imagen:['',
        [
          Validators.required
        ]
      ],      
      costoUnitario:['',
        [
          Validators.required
        ]
      ],
      oferta:['',
        [
          Validators.required
        ]
      ],
      
    });
  }

  

  async GuardarProducto(){
    try {
      let res= this.productoservice.agregarProducto(this.formRProductos.value);
      if(await res){
        Swal.fire({
          icon: 'success',
          title: 'Usuario registrado',
        });  
        
        //this.router.navigate(['/']);
      }
      this.formRProductos.reset();
      this.formRProductos.markAsPristine();
      this.formRProductos.clearValidators();
    } catch (error) {
      console.log(error);
    } 
  }
  //validacion formulario
  validacion(name: string) {
    return this.formRProductos.get(name)?.errors && (this.formRProductos.get(name)?.touched || this.formRProductos.get(name)?.dirty);
  }
  //regresar
  regresar(){
    this.router.navigate(['dashboard/productos']);
  }
}
