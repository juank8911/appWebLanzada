import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// componentes

import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { HorarioComponent } from './components/horario/horario.component';


// rutas

import { PublicacionesRoutingModule } from './publicaciones-routing.module';

@NgModule({
    declarations: [
        PublicacionesComponent,
        InformacionComponent,
        ImagenesComponent,
        HorarioComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        PublicacionesRoutingModule,
    ],
    exports : [
        PublicacionesComponent,
        InformacionComponent,
        ImagenesComponent,
        HorarioComponent
    ],
    providers : [
    ]
})
export class PublicacionesModule {}



// [ ]
