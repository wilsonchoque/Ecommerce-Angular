import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent {
  listaUsuarios:any=[];
  constructor(private usuarioservice : UsuarioService){
    this.getUsuarios();
  }
  async getUsuarios(){
    try {
      this.usuarioservice.obtenerUsuario().subscribe(
        res=>{
          this.listaUsuarios=res;
        },
        error=>{
          console.log(error);
        }
      );
    } catch (error) {
      
    }
  }
}
