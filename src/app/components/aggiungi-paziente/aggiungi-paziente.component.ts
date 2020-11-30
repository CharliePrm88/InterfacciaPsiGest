import { Component, OnInit } from '@angular/core';
import { Paziente } from 'src/app/models/paziente.model';
import { PazienteService } from 'src/app/services/paziente.service';

@Component({
  selector: 'app-aggiungi-paziente',
  templateUrl: './aggiungi-paziente.component.html',
  styleUrls: ['./aggiungi-paziente.component.css']
})
export class AggiungiPazienteComponent implements OnInit {
  paziente: Paziente = {
    cf: '',
    nome: '',
    cognome: '',
    indirizzo: '',
    dataDiNascita: '',
    cittaDiNascita: '',
    email: '',
    professione: '',
    codiceFiscaleProfessionista: '',
    sesso: '',
    statoCivile: '',
  };
  submitted = false;

  constructor(private pazienteService: PazienteService) { }

  ngOnInit(): void {
  }

  salvaPaziente(): void {
    const data = {
      cf: this.paziente.cf,
      nome: this.paziente.nome,
      cognome: this.paziente.cognome,
      indirizzo: this.paziente.indirizzo,
      dataDiNascita: this.paziente.dataDiNascita,
      cittaDiNascita: this.paziente.cittaDiNascita,
      email: this.paziente.email,
      professione: this.paziente.professione,
      codiceFiscaleProfessionista: this.paziente.codiceFiscaleProfessionista,
      sesso: this.paziente.sesso,
      statoCivile: this.paziente.statoCivile,
    };

    this.pazienteService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  nuovoPaziente(): void {
    this.submitted = false;
    this.paziente = {
      cf: '',
    nome: '',
    cognome: '',
    indirizzo: '',
    dataDiNascita: '',
    cittaDiNascita: '',
    email: '',
    professione: '',
    codiceFiscaleProfessionista: '',
    sesso: '',
    statoCivile: '',
    };
  }

}