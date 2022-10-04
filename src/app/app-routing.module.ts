import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//vistas
//ng generate component main
import { AccesoComponent } from './acceso/acceso.component';
import { PrincipalComponent } from './principal/principal.component';
import { GraphlayoutComponent } from './graphlayout/graphlayout.component';
import { RegistroGatoComponent } from './gatos/registro-gato/registro-gato.component';
import { ListaGatoComponent } from './gatos/lista-gato/lista-gato.component';
import { ActualizaGatoComponent } from './gatos/actualiza-gato/actualiza-gato.component';
import { ActualizaVetesComponent } from './vetes/actualiza-vetes/actualiza-vetes.component';
import { ListaVetesComponent } from './vetes/lista-vetes/lista-vetes.component';
import { RegistroVetesComponent } from './vetes/registro-vetes/registro-vetes.component';
import { ActualizaAdoptComponent } from './adoptante/actualiza-adopt/actualiza-adopt.component';
import { ListaAdoptComponent } from './adoptante/lista-adopt/lista-adopt.component';
import { RegistroAdoptComponent } from './adoptante/registro-adopt/registro-adopt.component';
import { ActualizaColoniaComponent } from './colonias/actualiza-colonia/actualiza-colonia.component';
import { ListaColoniaComponent } from './colonias/lista-colonia/lista-colonia.component';
import { RegistroColoniaComponent } from './colonias/registro-colonia/registro-colonia.component';
import { RegistroMercaComponent } from './mercadillo/registro-merca/registro-merca.component';
import { RegistroPagoComponent } from './pago/registro-pago/registro-pago.component';
import { ActualizaHuchaComponent } from './hucha/actualiza-hucha/actualiza-hucha.component';
import { ListaHuchaComponent } from './hucha/lista-hucha/lista-hucha.component';
import { RegistroHuchaComponent } from './hucha/registro-hucha/registro-hucha.component';
//import { RegHuchaComponent } from './reg-hucha/reg-hucha.component';
//import { RegRecaudacionComponent } from './reg-recaudacion/reg-recaudacion.component';
//import { GrafHuchasComponent } from './graf-huchas/graf-huchas.component';
//import { NuevaColoniaComponent } from './nueva-colonia/nueva-colonia.component';
//import { MuestraDatosColoniaComponent } from './muestra-datos-colonia/muestra-datos-colonia.component';

const routes: Routes = [
  { path: 'acceso', component: AccesoComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'layout', component: GraphlayoutComponent, children:[{ path: 'acceso',component: AccesoComponent }] },
  { path: 'reg-gato', component: RegistroGatoComponent },
  { path: 'lista-gato', component: ListaGatoComponent },
  { path: 'actualiza-gato', component: ActualizaGatoComponent },
  { path: 'actualiza-vete', component: ActualizaVetesComponent },
  { path: 'lista-vete', component: ListaVetesComponent },
  { path: 'reg-vete', component: RegistroVetesComponent },
  { path: 'actualiza-adopt', component: ActualizaAdoptComponent },
  { path: 'lista-adopt', component: ListaAdoptComponent },
  { path: 'reg-adopt', component: RegistroAdoptComponent },
  { path: 'actualiza-colonia', component: ActualizaColoniaComponent },
  { path: 'lista-colonia', component: ListaColoniaComponent },
  { path: 'reg-colonia', component: RegistroColoniaComponent },
  { path: 'reg-mercadillo', component: RegistroMercaComponent },
  { path: 'reg-pago', component: RegistroPagoComponent },
  { path: 'actualiza-hucha', component: ActualizaHuchaComponent },
  { path: 'lista-hucha', component: ListaHuchaComponent },
  { path: 'reg-hucha', component: RegistroHuchaComponent },
  //{ path: 'reg-hucha', component: RegHuchaComponent },
  //{ path: 'reg-recaudacion', component: RegRecaudacionComponent },
  //{ path: 'graf-huchas', component: GrafHuchasComponent },
  //{ path: 'nueva-colonia', component: NuevaColoniaComponent },
  //{ path: 'muestra-colonia', component: MuestraDatosColoniaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
