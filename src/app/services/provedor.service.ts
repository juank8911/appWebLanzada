import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Global } from './global';
import { Provedor } from '../models/provedor';

@Injectable( )
export class ProvedorService {
    public url;

    constructor(public http: HttpClient, public global: Global) {
        this.url = this.global.apiUrl;
    }

    postLogin(email , pssw): Observable<any> {

        let datos = {email : email, pssw: pssw };
        let headers = new HttpHeaders().set('Content-Type', 'application/json');


        return this.http.post(this.url + '/login', datos, {headers : headers});
    }

    getIdentity(id): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.get(this.url + '/provedores/' + id , {headers : headers});

    }
}
