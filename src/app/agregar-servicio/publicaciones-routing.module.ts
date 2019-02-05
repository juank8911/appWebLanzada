import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// componentes
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { HorarioComponent } from './components/horario/horario.component';

const publicacionesRoutes: Routes = [
    {
        path: 'publicaciones',
        component: PublicacionesComponent,
        children: [
            {path: '', redirectTo: 'publicaciones', pathMatch: 'full'},
            {path: 'agregar', component: InformacionComponent},
            {path: 'horario', component: HorarioComponent},
            {path: 'imagenes', component: ImagenesComponent},
         ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(publicacionesRoutes)
    ],
    exports : [
        RouterModule
    ]
})
export class PublicacionesRoutingModule {}
