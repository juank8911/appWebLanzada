import { Component, OnInit } from '@angular/core';
import CryptoJS from 'crypto-js';
import { Provedor } from '../../models/provedor';
import { FormControl } from '@angular/forms';
import { Member } from '../../models/member';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProvedorService } from '../../services/provedor.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ProvedorService]
})
export class LoginComponent implements OnInit {
  public user: Member;
  public status: string;



  constructor(private _router: Router, private _route: ActivatedRoute, private _provedorService: ProvedorService) {

    this.user = new Member('', '');
  }

  ngOnInit() {
  }

  login(loginForm) {

    let password = CryptoJS.SHA512(this.user.pssw).toString(CryptoJS.enc.Hex);

    this._provedorService.postLogin(this.user.email, password).subscribe((response) => {

      console.log(response);

      if (response.esAdmin === 2) {
        this.status = 'login_user';

      } else {

      if (response.login === true) {

        localStorage.setItem('token', JSON.stringify(response.token));
        this.identity(response.id_usuario);
      } else {
        this.status = 'login_false';
      }

      }

    }, (err) => {
      console.log(err);
      this.status = 'error';
    });

    // this._router.navigate(['/home']);

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

  goToRegister() {
    this._router.navigate(['/registro']);
   }


}
