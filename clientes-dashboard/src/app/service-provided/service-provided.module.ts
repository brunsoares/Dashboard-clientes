import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';


import { ServiceProvidedRoutingModule } from './service-provided-routing.module';
import { ListServiceProvidedComponent } from './list-service-provided/list-service-provided.component';
import { ServiceProvidedFormComponent } from './service-provided-form/service-provided-form.component';


@NgModule({
  declarations: [ListServiceProvidedComponent, ServiceProvidedFormComponent],
  imports: [
    CommonModule,
    ServiceProvidedRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ListServiceProvidedComponent,
    ServiceProvidedFormComponent
  ]
})
export class ServiceProvidedModule { }
