import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario/usuario';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';
import { LoginService } from 'src/app/servicios/login/login.service';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  rol!:string;
  constructor(public loginservice : LoginService , private router: Router , public carritoservice:CarritoService ){
  }
  
  logout(){
    this.loginservice.logout()
    .then(
      res=>{
        console.log(res);
        this.router.navigate(['/']);
      }
    )
    .catch(
      error=>{
        console.log(error);
      }
    )
  }
}
