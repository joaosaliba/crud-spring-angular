import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/service/cliente.service';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {
  clientForm: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    cnpj: new FormControl('', [Validators.required, Validators.maxLength(14)]),
    endereco:MapComponent.formGroup
  });
  endereco: FormGroup  ;

  constructor(
    private readonly service: ClienteService) {}

  ngOnInit(): void {
  


   
    this.endereco= this.clientForm.controls['endereco'] as FormGroup
  }

  onSubmit() {
    if (this.clientForm.valid) {
      this.service.save(this.clientForm.value)
      console.log(this.clientForm.value);


    }
  }

}
