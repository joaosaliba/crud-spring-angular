import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { MapComponent } from 'src/app/components/map/map.component';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss'],
})
export class ClienteFormComponent implements OnInit {
  clientForm: FormGroup = new FormGroup({
    id: new FormControl(),
    nome: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    cnpj: new FormControl('', [Validators.required, Validators.maxLength(14)]),
    endereco: MapComponent.formGroup,
  });
  endereco: FormGroup;

  constructor(
    private readonly service: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.endereco = this.clientForm.controls['endereco'] as FormGroup;
    const clientId = this.route.snapshot.paramMap.get('id');
    if (clientId) {
      this.service.findById(clientId).subscribe((resp) => {
        this.clientForm.patchValue(resp);
        console.log(this.clientForm.value);
      });
    }
  }

  onSubmit() {
    if (this.clientForm.valid) {
      this.service.save(this.clientForm.value).then(() => {
        this.router.navigate(['/cliente/list']);
      });
    }
  }
}
