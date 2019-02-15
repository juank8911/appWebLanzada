import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../services/medico.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ver-perfil-medico',
  templateUrl: './ver-perfil-medico.component.html',
  styleUrls: ['./ver-perfil-medico.component.css'],
  providers: [MedicoService]
})
export class VerPerfilMedicoComponent implements OnInit {
  public infoMedico;

  constructor(public _medicoService: MedicoService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.loadPage();
  }

  loadPage() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this.getInfoMedico(id);
    });
  }

  getInfoMedico(id) {

    this._medicoService.getInfoMedico(id).subscribe( (response) => {
      this.infoMedico = response[0];
      console.log(this.infoMedico);
    }, (err) => {
      console.log(err);
    });
  }

}
