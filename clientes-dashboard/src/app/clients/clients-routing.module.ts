import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

import { ClientsFormComponent } from './clients-form/clients-form.component';
import { ListClientsComponent } from './list-clients/list-clients.component';

import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  { path: '', component:LayoutComponent, canActivate: [AuthGuard], children: [
    { path: 'client', component:ClientsFormComponent },
    { path: 'client/:id', component:ClientsFormComponent },
    { path: 'list-clients', component:ListClientsComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
