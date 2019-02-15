import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ProvedorService } from '../../services/provedor.service';
import { appRoutingProviders } from 'src/app/app.routing';
import { Global } from '../../services/global';

@Component({
  selector: 'app-gestionar-publicaciones',
  templateUrl: './gestionar-publicaciones.component.html',
  styleUrls: ['./gestionar-publicaciones.component.css'],
  providers : [UserService, ProvedorService, Global]
})
export class GestionarPublicacionesComponent implements OnInit {
  public identity;
  public publications;

  constructor(public _userService: UserService, public _provedorService: ProvedorService, public global: Global) { }

  ngOnInit() {
    this.getIdentity();
  }

  getIdentity() {
    this.identity = this._userService.getIdentity();
    this.getPublications(this.identity.id_provedor);
  }

  getPublications(id) {

    this._provedorService.getPublications(id).subscribe( (response) => {
        this.publications = response;
        console.log(this.publications);
    }, (err) => {
      console.log(err);
    });
  }

}
