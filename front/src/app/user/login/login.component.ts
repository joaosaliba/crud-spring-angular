import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  backgroundImageUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private readonly service: LoginService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async login() {
    if (this.loginForm.valid) {
      await this.service.login(this.loginForm.value).then(() => {
        this.router.navigate(['cliente/list']);
      });
    }
  }
}
