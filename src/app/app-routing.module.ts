import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
  },
  {
    path: 'centros-medicos',
    loadChildren: () => import('./centros-medicos/centros-medicos.module').then( m => m.CentrosMedicosPageModule)
  },

  {
    path: 'especialidad',
    loadChildren: () => import('./especialidad/especialidad.module').then( m => m.EspecialidadPageModule)
  },
  {
    path: 'profesionales',
    loadChildren: () => import('./profesionales/profesionales.module').then( m => m.ProfesionalesPageModule)
  },
  {
    path: 'contactanos',
    loadChildren: () => import('./contactanos/contactanos.module').then( m => m.ContactanosPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
