import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Global } from './global';


@Injectable( )
export class UserService {
    public identity;

    getIdentity() {
        let identity_ls = JSON.parse(localStorage.getItem('identity'));

        if (identity_ls !== 'undefined') {
            this.identity = identity_ls;
        } else {
            this.identity = null;
        }

        return this.identity;
    }

}
