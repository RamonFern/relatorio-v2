import { InfoComponent } from './info/info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NovoRelatorioComponent } from './novo-relatorio/novo-relatorio.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'novo', component: NovoRelatorioComponent},
  {path: 'novo/:id', component: NovoRelatorioComponent},
  {path: 'info/:id', component: InfoComponent},
  {path: 'info', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
