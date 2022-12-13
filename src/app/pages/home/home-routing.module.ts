import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
  {
    path: 'casa',
    loadChildren: () => import('../casa/casa.module').then( m => m.CasaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./../../pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'horas',
    loadChildren: () => import('./../../pages/horas/horas.module').then( m => m.HorasPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./../../pages/maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'consultas',
    loadChildren: () => import('./../../pages/consultas/consultas.module').then( m => m.ConsultasPageModule)
  },
 ]
  
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
