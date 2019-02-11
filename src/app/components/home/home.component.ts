import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProvedorService } from '../../services/provedor.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProvedorService, Global]
})
export class HomeComponent implements OnInit {
  public admin: string;
  public data_provedor;

  constructor(private _route: ActivatedRoute, private _router: Router, public _provedorService: ProvedorService, public global: Global) {

   }

  ngOnInit() {
    this.loadPage();
  }

  loadPage() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      let esAdmin = params['esAdmin'];

      if (esAdmin = 1) {
        this.admin = 'admin';
      }

      if (esAdmin = 3) {
        this.admin = 'medico';
      }

      this.identity(id);
    });

  }

  identity(id) {

      console.log(id);

      this._provedorService.getIdentity(id).subscribe( (response) => {
        console.log(response);
        this.data_provedor = response;

      }, (err) => {
        console.log(err);
      });

  }

}
