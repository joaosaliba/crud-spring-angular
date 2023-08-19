import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../plugin/material-imports';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [LoginComponent],
})
export class UserModule {}
