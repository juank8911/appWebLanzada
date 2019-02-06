import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes

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
import { HorarioComponent } from './agregar-servicio/components/horario/horario.component';
import { ImagenesComponent } from './agregar-servicio/components/imagenes/imagenes.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CalendarioCitasComponent } from './components/calendario-citas/calendario-citas.component';
import { GestionarCitasComponent } from './components/gestionar-citas/gestionar-citas.component';
import { AprobarPublicacionesComponent } from './components/aprobar-publicaciones/aprobar-publicaciones.component';
import { ContactenosRootComponent } from './components/contactenos-root/contactenos-root.component';
import { SlidersRootComponent } from './components/sliders-root/sliders-root.component';
import { ListadoPacientesComponent } from './components/listado-pacientes/listado-pacientes.component';


const appRoutes: Routes = [
    {path: '', component : LoginComponent},
    {path : 'login', component: LoginComponent},
    {path : 'registro', component: RegistroComponent},
    {path : 'home', component: HomeComponent},
    // {path : 'publicaciones', component: GestionarPublicacionesComponent },
    {path : 'medicos', component: GestionarMedicosComponent },
    {path : 'contactenos', component: ContactenosComponent },
    {path : 'terminosycondiciones', component: TerminosYCondicionesComponent },
    {path : 'buscarcita', component: BuscarCitaComponent },
    {path : 'slider', component: SlidersComponent },
    {path : 'ordenllegada', component: OrdenLlegadaComponent },
    {path : 'perfil', component: PerfilComponent },
    {path : 'calendario', component: CalendarioCitasComponent },
    {path : 'citas', component: GestionarCitasComponent },
    {path : 'apropublicaciones', component: AprobarPublicacionesComponent },
    {path : 'contactenosroot', component: ContactenosRootComponent },
    {path : 'slidersroot', component: SlidersRootComponent },
    {path : 'listaPacientes', component: ListadoPacientesComponent },
    {path: '**', component: HomeComponent}

];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
