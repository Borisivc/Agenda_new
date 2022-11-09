import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EspecialidadComponent } from '../especialidad/especialidad.component';
import { HoraComponent } from '../hora/hora.component';
import { MedicoComponent } from '../medico/medico.component';
import { AgendaPage } from './agenda.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaPage,
    children:[
      {
        path:'hora',
        component: HoraComponent
      },
      {
        path:'medico',
        component: MedicoComponent
      },
      {
        path:'especialidad',
        component: EspecialidadComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaPageRoutingModule {}
