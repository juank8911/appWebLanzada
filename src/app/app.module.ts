import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

// Modulos

import { PublicacionesModule } from './agregar-servicio/publicaciones.module';


// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { GestionarPublicacionesComponent } from './components/gestionar-publicaciones/gestionar-publicaciones.component';
import { GestionarMedicosComponent } from './components/gestionar-medicos/gestionar-medicos.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { TerminosYCondicionesComponent } from './components/terminos-y-condiciones/terminos-y-condiciones.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarCitaComponent } from './components/buscar-cita/buscar-cita.component';
import { SlidersComponent } from './components/sliders/sliders.component';
import { OrdenLlegadaComponent } from './components/orden-llegada/orden-llegada.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CalendarioCitasComponent } from './components/calendario-citas/calendario-citas.component';
import { GestionarCitasComponent } from './components/gestionar-citas/gestionar-citas.component';
import { AprobarPublicacionesComponent } from './components/aprobar-publicaciones/aprobar-publicaciones.component';
import { ContactenosRootComponent } from './components/contactenos-root/contactenos-root.component';
import { SlidersRootComponent } from './components/sliders-root/sliders-root.component';
import { ListadoPacientesComponent } from './components/listado-pacientes/listado-pacientes.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    GestionarPublicacionesComponent,
    GestionarMedicosComponent,
    ContactenosComponent,
    TerminosYCondicionesComponent,
    HomeComponent,
    BuscarCitaComponent,
    SlidersComponent,
    OrdenLlegadaComponent,
    PerfilComponent,
    CalendarioCitasComponent,
    GestionarCitasComponent,
    AprobarPublicacionesComponent,
    ContactenosRootComponent,
    SlidersRootComponent,
    ListadoPacientesComponent,
    BarraNavegacionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    PublicacionesModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
