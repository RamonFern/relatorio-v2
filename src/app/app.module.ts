import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NovoRelatorioComponent } from './novo-relatorio/novo-relatorio.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';
import { InicioComponent } from './inicio/inicio.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { NotificarComponent } from './notificar/notificar.component';
import { CadAgenteUserComponent } from './cad-agente-user/cad-agente-user.component';
import { ListaAgentesComponent } from './lista-agentes/lista-agentes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NovoRelatorioComponent,
    NavComponent,
    InfoComponent,
    InicioComponent,
    PesquisaComponent,
    NotificarComponent,
    CadAgenteUserComponent,
    ListaAgentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
