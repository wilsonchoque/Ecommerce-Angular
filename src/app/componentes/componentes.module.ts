import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CardProductosComponent } from './card-productos/card-productos.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from '../pages/Admin/dashboard/dashboard.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
import { DialogCarritoComponent } from './dialog-carrito/dialog-carrito.component';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';




@NgModule({
  declarations: [
    SliderComponent,       
    CardProductosComponent,
    NavigationComponent,
    FormProductoComponent,
    TablaProductosComponent,
    DialogCarritoComponent,
    TablaUsuariosComponent,
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    RouterModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule,
    ReactiveFormsModule
  ],exports:[
    SliderComponent,        
    CardProductosComponent,
    NavigationComponent,
    FormProductoComponent,
    TablaProductosComponent,
    DialogCarritoComponent,
    TablaUsuariosComponent,
  ]
})
export class ComponentesModule { }
