import { Routes, RouterModule } from '@angular/router';
import {NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './componente/usuario/usuario/usuario.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

export const appRouters: Routes = [

       {path: 'usuarioList', component: UsuarioComponent}
];

export const routes : ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routes 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
