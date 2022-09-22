import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { ClientsModule } from './clients/clients.module';

import { ClientService } from './client.service';
import { ServiceProvidedModule } from './service-provided/service-provided.module';
import { ServiceProvidedService } from './service-provided.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientsModule,
    ServiceProvidedModule
  ],
  providers: [
    ClientService,
    ServiceProvidedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
