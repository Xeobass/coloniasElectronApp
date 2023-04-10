import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//angular Material
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';



//rutas
import { PrincipalComponent } from './principal/principal.component';
import { AccesoComponent } from './acceso/acceso.component';
import { MenuComponent } from './menu/menu.component';
import { GraphlayoutComponent } from './graphlayout/graphlayout.component';
import { RegistroGatoComponent } from './gatos/registro-gato/registro-gato.component';
import { ActualizaGatoComponent } from './gatos/actualiza-gato/actualiza-gato.component';
import { ListaGatoComponent } from './gatos/lista-gato/lista-gato.component';
import { RegistroVetesComponent } from './vetes/registro-vetes/registro-vetes.component';
import { ActualizaVetesComponent } from './vetes/actualiza-vetes/actualiza-vetes.component';
import { ListaVetesComponent } from './vetes/lista-vetes/lista-vetes.component';
import { ActualizaAdoptComponent } from './adoptante/actualiza-adopt/actualiza-adopt.component';
import { ListaAdoptComponent } from './adoptante/lista-adopt/lista-adopt.component';
import { RegistroColoniaComponent } from './colonias/registro-colonia/registro-colonia.component';
import { ActualizaColoniaComponent } from './colonias/actualiza-colonia/actualiza-colonia.component';
import { ListaColoniaComponent } from './colonias/lista-colonia/lista-colonia.component';
import { RegistroHuchaComponent } from './hucha/registro-hucha/registro-hucha.component';
import { ActualizaHuchaComponent } from './hucha/actualiza-hucha/actualiza-hucha.component';
import { ListaHuchaComponent } from './hucha/lista-hucha/lista-hucha.component';
import { RegistroMercaComponent } from './mercadillo/registro-merca/registro-merca.component';
import { RegistroPagoComponent } from './pago/registro-pago/registro-pago.component';
import { RegistroAdoptComponent } from './adoptante/registro-adopt/registro-adopt.component';
import { OkSaveDataComponent } from './mensajes/dialogs/ok-save-data/ok-save-data.component';
import {MatBadgeModule} from '@angular/material/badge';



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    AccesoComponent,
    MenuComponent,
    GraphlayoutComponent,
    RegistroGatoComponent,
    ActualizaGatoComponent,
    ListaGatoComponent,
    RegistroVetesComponent,
    ActualizaVetesComponent,
    ListaVetesComponent,
    ActualizaAdoptComponent,
    ListaAdoptComponent,
    RegistroColoniaComponent,
    ActualizaColoniaComponent,
    ListaColoniaComponent,
    RegistroHuchaComponent,
    ActualizaHuchaComponent,
    ListaHuchaComponent,
    RegistroMercaComponent,
    RegistroPagoComponent,
    RegistroAdoptComponent,
    OkSaveDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MaterialFileInputModule,
    MatGridListModule,
    MatDialogModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
