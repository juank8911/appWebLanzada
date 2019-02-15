import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Global } from '../../services/global';
import { Provedor } from '../../models/provedor';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [UserService, Global]
})
export class PerfilComponent implements OnInit {
  public identity;
  public provedor: Provedor;


  constructor(public _userService: UserService, public global: Global) {
    this.provedor = new Provedor ('' , '', '', '', '', '', '', '', '', '', '', '');

  }

  ngOnInit() {

    this.getIdentity();
  }

  getIdentity() {
    this.identity = this._userService.getIdentity();

    console.log(this.identity);
  }
}
