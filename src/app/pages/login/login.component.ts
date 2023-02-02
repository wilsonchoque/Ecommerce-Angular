import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login/login.service';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mensajeError={
    email:'',
    password:''
  }

  formLogin!:FormGroup;
  constructor(private frm: FormBuilder , private loginservice :LoginService , private router: Router , private usuarioservice: UsuarioService){
    this.formLogin=frm.group({
      email:['',
      [
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$')
      ]
      ],
      password:['',
      [ Validators.required,
        Validators.minLength(6)
      ]
      ] 
    })
  }
  
  login(){
    this.loginservice.loginUsuario(this.formLogin.value)
    .then(
      res=>{
            localStorage.setItem('user',JSON.stringify({'uid': res?.user.uid , 'email':res.user.email, 'photoURL':res.user?.photoURL }));
            this.router.navigate(['/dashboard/productos']);
          }
    )
    .catch(
      error=> {
        Swal.fire({
          icon: 'error',
          title: 'usuario o contraseña incorrecta',
        })
      }      
    )
    console.log(this.formLogin.value)
  }  


  validacion(name: string) {
    if(this.formLogin.get(name)?.errors && (this.formLogin.get(name)?.touched || this.formLogin.get(name)?.dirty)){
      if(this.formLogin.get(name)?.errors?.['required']){
        if(name=='email'){
          this.mensajeError.email="Campo requerido"; 
        }else if (name=='password'){
          this.mensajeError.password="Campo requerido";
        }
        
      }else if(this.formLogin.get(name)?.errors?.['minlength']){
        if(name=='password'){
          this.mensajeError.password="Mínimo de caracteres 6"; 
        }

      }else if(this.formLogin.get(name)?.errors?.['pattern']){
        if(name=='email'){
          this.mensajeError.email="Email Inválido";
        }
      }
    }
    return this.formLogin.get(name)?.errors && (this.formLogin.get(name)?.touched || this.formLogin.get(name)?.dirty);
  }

}
