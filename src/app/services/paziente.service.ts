import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paziente } from '../models/paziente.model';

const baseUrl = 'http://localhost:8080/api/paziente'; //IMPORTANTE

@Injectable({
  providedIn: 'root'
})
export class PazienteService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Paziente[]> {
    return this.http.get<Paziente[]>(baseUrl);
  }

  get(cf: any): Observable<any> {
    return this.http.get(`${baseUrl}/${cf}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(cf: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${cf}`, data);
  }

  delete(cf: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${cf}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  trovaPerCognome(cognome: any): Observable<Paziente[]> {
    return this.http.get<Paziente[]>(`${baseUrl}?cognome=${cognome}`);
  }
}
