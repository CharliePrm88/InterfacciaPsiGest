import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AggiungiPazienteComponent } from './components/aggiungi-paziente/aggiungi-paziente.component';
import { DettaglioPazienteComponent } from './components/dettaglio-paziente/dettaglio-paziente.component';
import { ListaPazienteComponent } from './components/lista-paziente/lista-paziente.component';

@NgModule({
  declarations: [
    AppComponent,
    AggiungiPazienteComponent,
    DettaglioPazienteComponent,
    ListaPazienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
