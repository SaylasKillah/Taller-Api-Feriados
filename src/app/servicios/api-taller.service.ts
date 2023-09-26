import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feriados } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiTallerService {

  constructor(private httpclient: HttpClient) { }

  Feriados(){
    return this.httpclient.get<Feriados>('https://api.victorsanmartin.com/feriados/en.json') 
}
}
