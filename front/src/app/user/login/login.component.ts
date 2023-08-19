import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

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

    this.loadRandomBackgroundImage();
  }

  async login() {
    if (this.loginForm.valid) {
      await this.service.login(this.loginForm.value).then(() => {
        this.router.navigate(['/list']);
      });
    }
  }
  loadRandomBackgroundImage() {
    const randomImageId = Math.floor(Math.random() * 1000); // You can adjust the range
    this.backgroundImageUrl = `https://picsum.photos/id/${randomImageId}/1200/800`;
  }
}
