import { Routes, RouterModule } from '@angular/router';
import {NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './componente/usuario/usuario/usuario.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { UsuarioAddComponent } from './componente/usuario/usuario-add/usuario-add.component';
import { NgxPaginationModule } from 'ngx-pagination';
 

export const appRouters: Routes = [

    //{path: 'usuarioList', component: UsuarioComponent},
      {path: 'usuarioAdd', component: UsuarioAddComponent},
      {path: 'usuarioAdd/:id', component: UsuarioAddComponent},
      {path: 'usuarioProduto', component: UsuarioComponent}

  ];
   
   
   

export const routes : ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioAddComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routes,
    NgxPaginationModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
