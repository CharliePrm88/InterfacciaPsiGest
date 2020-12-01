import { Component, OnInit } from '@angular/core';
import { PazienteService } from 'src/app/services/paziente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Paziente } from 'src/app/models/paziente.model';

@Component({
  selector: 'app-dettaglio-paziente',
  templateUrl: './dettaglio-paziente.component.html',
  styleUrls: ['./dettaglio-paziente.component.css']
})
export class DettaglioPazienteComponent implements OnInit {
  currentPaziente: Paziente = {
    cf: '',
    nome: '',
    cognome: '',
    indirizzo: '',
    dataDiNascita: '',
    cittaDiNascita: '',
    email: '',
    professione: '',
    //codiceFiscaleProfessionista: '',
    sesso: '',
    statoCivile: '',
  };
  message = '';

  constructor(
    private pazienteService: PazienteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.prendiPaziente(this.route.snapshot.params.cf);
  }

  prendiPaziente(cf: string): void {
    this.pazienteService.get(cf)
      .subscribe(
        data => {
          this.currentPaziente = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

 /* aggiornaPaziente(status: boolean): void {
    const data = {
      cf: this.currentPaziente.cf,
      nome: this.currentPaziente.nome,
      cognome: this.currentPaziente.cognome,
      indirizzo: this.currentPaziente.indirizzo,
    dataDiNascita: this.currentPaziente.dataDiNascita,
    cittaDiNascita: this.currentPaziente.cittaDiNascita,
    email: this.currentPaziente.email,
    professione: this.currentPaziente.professione,
    sesso: this.currentPaziente.sesso,
    statoCivile: this.currentPaziente.statoCivile,

    };

    this.pazienteService.update(this.currentPaziente.cf, data)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }
*/
  updatePaziente(): void {
    this.pazienteService.update(this.currentPaziente.cf, this.currentPaziente)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  eliminaPaziente(): void {
    this.pazienteService.delete(this.currentPaziente.cf)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/anagrafica']);
        },
        error => {
          console.log(error);
        });
  }
}