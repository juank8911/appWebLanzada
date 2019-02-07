import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// componentes
import { InformacionComponent } from './components/informacion/informacion.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { HorarioComponent } from './components/horario/horario.component';
import { AgregarPublicacionComponent } from './components/agregar-publicacion/agregar-publicacion.component';

const publicacionesRoutes: Routes = [
    {
        path: 'agregar-publicacion',
        component: AgregarPublicacionComponent,
        children: [
            {path: '', redirectTo: 'informacion', pathMatch: 'full'},
            {path: 'informacion', component: InformacionComponent},
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
