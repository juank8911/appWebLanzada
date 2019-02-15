import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ProvedorService } from '../../services/provedor.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-gestionar-medicos',
  templateUrl: './gestionar-medicos.component.html',
  styleUrls: ['./gestionar-medicos.component.css'],
  providers : [UserService, ProvedorService, Global]
})
export class GestionarMedicosComponent implements OnInit {
  public identity;
  public medicos;

  constructor(public _userService: UserService, public _provedorService: ProvedorService, public global: Global,
    private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getIdentity();
  }

  getIdentity() {
    this.identity = this._userService.getIdentity();
    this.getMedicos(this.identity.id_provedor);
  }

  getMedicos(id) {

    this._provedorService.getMedicosProvedor(id).subscribe((response) => {
      this.medicos = response;
      console.log(this.medicos);
    }, (err) => {
      console.log(err);
    });
  }

  verMedico(id) {
    this._router.navigate( ['/vermedico', id]);
  }

  deleteMedico(id) {
    console.log(id);
  }

}
