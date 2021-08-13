import { ListaAgentesComponent } from './lista-agentes/lista-agentes.component';
import { CadAgenteUserComponent } from './cad-agente-user/cad-agente-user.component';
import { NotificarComponent } from './notificar/notificar.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NovoRelatorioComponent } from './novo-relatorio/novo-relatorio.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'home', component: HomeComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'novo', component: NovoRelatorioComponent},
  {path: 'novo/:id', component: NovoRelatorioComponent},
  {path: 'info/:id', component: InfoComponent},
  {path: 'info', component: InfoComponent},
  {path: 'pesquisa', component: PesquisaComponent},
  {path: 'notificar', component: NotificarComponent},
  {path: 'cad', component: CadAgenteUserComponent},
  {path: 'cad/:id', component: CadAgenteUserComponent},
  {path: 'listaAgentes', component: ListaAgentesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
