
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PanelContentComponent } from './components/panel-content/panel-content.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AseguradosComponent } from './components/asegurados/asegurados.component';
import { PrestadoresComponent } from './components/prestadores/prestadores.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { DocumentacionComponent } from './components/documentacion/documentacion.component';
import { LiquidacionesComponent } from './components/liquidaciones/liquidaciones.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    PanelContentComponent,
    DashboardComponent,
    AseguradosComponent,
    PrestadoresComponent,
    SolicitudesComponent,
    DocumentacionComponent,
    LiquidacionesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularSvgIconModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
  ],
})
export class PanelLayoutModule { }
