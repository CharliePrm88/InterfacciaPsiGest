import { Component, OnInit } from '@angular/core';
import { Paziente } from 'src/app/models/paziente.model';
import { PazienteService } from 'src/app/services/paziente.service';

@Component({
  selector: 'app-lista-paziente',
  templateUrl: './lista-paziente.component.html',
  styleUrls: ['./lista-paziente.component.css']
})
export class ListaPazienteComponent implements OnInit {
  pazienti?: Paziente[];
  currentPaziente?: Paziente;
  currentIndex = -1;
  cognome = '';

  constructor(private pazienteService: PazienteService) { }

  ngOnInit(): void {
    this.recuperaPazienti();
  }

  recuperaPazienti(): void {
    this.pazienteService.getAll()
      .subscribe(
        data => {
          this.pazienti = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  aggiornaLista(): void {
    this.recuperaPazienti();
    this.currentPaziente = undefined;
    this.currentIndex = -1;
  }

  setActivePaziente(paziente: Paziente, index: number): void {
    this.currentPaziente = paziente;
    this.currentIndex = index;
  }

  rimuoviTuttiIPazienti(): void {
    this.pazienteService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.aggiornaLista();
        },
        error => {
          console.log(error);
        });
  }

  trovaPaziente(): void {
    this.pazienteService.trovaPerCognome(this.cognome)
      .subscribe(
        data => {
          this.pazienti = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}