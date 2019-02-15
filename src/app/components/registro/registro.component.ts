import { Component, OnInit } from '@angular/core';
import { Registro } from '../../models/registro';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProvedorService } from '../../services/provedor.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [ProvedorService]
})
export class RegistroComponent implements OnInit {
  public status: string;
  public user: Registro;

  constructor(public _provedorService: ProvedorService, private _router: Router, private _route: ActivatedRoute) {
    this.user = new Registro('', '', '', '', '', '', true, false, '', '');

   }

  ngOnInit() {
  }

  registro() {

    if (this.user.pssw = this.user.confirmPsw) {

      this._provedorService.registerProvedor(this.user).subscribe( (response) => {
        console.log(response);

        if (response[0].existe === false) {
          console.log(response[0].mensaje);

          localStorage.setItem('token', JSON.stringify(response[1].token));
         this.identity(response[1].id_usuario);
        } else {

          let campo = response[1];
          if (campo[0] = 'email') {
          this.status = 'email';
        } else {

        }

        }


      }, (err) => {
        console.log(err);
      });

    } else {
      console.log('No coinciden');
    }
  }

  identity(id) {

    console.log(id);

    this._provedorService.getIdentity(id).subscribe( (response) => {
      console.log(response);

      localStorage.setItem('identity', JSON.stringify(response));
      this._router.navigate(['/home']);

       // this._router.navigate(['/home/', response.id_usuario, response.esAdmin ]);

    }, (err) => {
      console.log(err);
    });
}


}
