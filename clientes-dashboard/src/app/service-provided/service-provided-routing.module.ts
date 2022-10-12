import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { ListServiceProvidedComponent } from './list-service-provided/list-service-provided.component';
import { ServiceProvidedFormComponent } from './service-provided-form/service-provided-form.component';


const routes: Routes = [
  { path: '', component:LayoutComponent, canActivate: [AuthGuard], children: [
    {path: 'service-provided', component: ServiceProvidedFormComponent},
    {path: 'list-service-provided', component: ListServiceProvidedComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceProvidedRoutingModule { }
