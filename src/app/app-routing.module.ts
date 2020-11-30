import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AggiungiPazienteComponent } from './components/aggiungi-paziente/aggiungi-paziente.component';
import { DettaglioPazienteComponent } from './components/dettaglio-paziente/dettaglio-paziente.component';
import { ListaPazienteComponent } from './components/lista-paziente/lista-paziente.component';

const routes: Routes = [
  { path: '', redirectTo: 'anagrafica', pathMatch: 'full' },
  { path: 'anagrafica', component: ListaPazienteComponent }, //aggiungere il component una volta creato
  { path: 'paziente/:cf', component: DettaglioPazienteComponent },
  { path: 'aggiungi-paziente', component: AggiungiPazienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }