import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelContentComponent } from './modules/panel-layout/components/panel-content/panel-content.component';
import { DashboardComponent } from './modules/panel-layout/components/dashboard/dashboard.component';
import { AseguradosComponent } from './modules/panel-layout/components/asegurados/asegurados.component';
import { PrestadoresComponent } from './modules/panel-layout/components/prestadores/prestadores.component';
import { SolicitudesComponent } from './modules/panel-layout/components/solicitudes/solicitudes.component';
import { DocumentacionComponent } from './modules/panel-layout/components/documentacion/documentacion.component';
import { LiquidacionesComponent } from './modules/panel-layout/components/liquidaciones/liquidaciones.component';

const routes: Routes = [
  {
    path: '',
    component: PanelContentComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'asegurados', component: AseguradosComponent },
      { path: 'prestadores', component: PrestadoresComponent },
      { path: 'solicitudes', component: SolicitudesComponent },
      { path: 'documentacion', component: DocumentacionComponent },
      { path: 'liquidaciones', component: LiquidacionesComponent },
    ],
  },
  // Agrega más rutas según sea necesario para otras secciones del Sidebar
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
