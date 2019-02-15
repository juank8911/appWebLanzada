import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Global } from './global';


@Injectable( )
export class MedicoService {
    public url;

    constructor(public http: HttpClient, public global: Global) {
        this.url = this.global.apiUrl;
    }

    getInfoMedico(id) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.get(this.url + '/medicosm/' + id , {headers : headers});
      }
}
