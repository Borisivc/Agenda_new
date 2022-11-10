import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HoraComponent } from '../hora/hora.component';
import { ProcedimientosComponent } from '../procedimientos/procedimientos.component';
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
        path:'procedimientos',
        component: ProcedimientosComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaPageRoutingModule {}
