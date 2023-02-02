import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { DetalleComponent } from './detalle/detalle.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { CrudproductosComponent } from './Admin/crudproductos/crudproductos.component';
import { CrudusuariosComponent } from './Admin/crudusuarios/crudusuarios.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { share } from 'rxjs';
import { PagoComponent } from './pago/pago.component';






@NgModule({
  declarations: [
    InicioComponent,
    ProductosComponent,
    DetalleComponent,
    PedidosComponent,
    DashboardComponent,
    CrudproductosComponent,
    CrudusuariosComponent,
    LoginComponent,
    RegistrarComponent,
    PagoComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    SharedModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],exports:[
    InicioComponent,
    ProductosComponent,
    DetalleComponent,
    PedidosComponent,
    DashboardComponent,
    CrudproductosComponent,
    CrudusuariosComponent,
    LoginComponent,
    RegistrarComponent,
    SharedModule,
    PagoComponent
  ]
})
export class PagesModule { }
