import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// componentes

import { InformacionComponent } from './components/informacion/informacion.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { HorarioComponent } from './components/horario/horario.component';
import { AgregarPublicacionComponent } from './components/agregar-publicacion/agregar-publicacion.component';


// rutas

import { PublicacionesRoutingModule } from './publicaciones-routing.module';
import { appRoutingProviders } from '../app.routing';



@NgModule({
    declarations: [
        InformacionComponent,
        ImagenesComponent,
        HorarioComponent,
        AgregarPublicacionComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        PublicacionesRoutingModule,
        appRoutingProviders
    ],
    exports : [
        InformacionComponent,
        ImagenesComponent,
        HorarioComponent,
        AgregarPublicacionComponent
    ],
    providers : [
    ]
})
export class PublicacionesModule {}



// [ ]
