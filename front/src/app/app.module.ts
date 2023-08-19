import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClienteModule } from './cliente/cliente.module';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { MaterialModule } from './plugin/material-imports';
import { LayoutComponetModule } from './screen/layout-componet.module';
import { LayoutComponetComponent } from './screen/layout-componet/layout-componet.component';
import { UserModule } from './user/user.module';

registerLocaleData(localePt);
@NgModule({
  declarations: [AppComponent, LayoutComponetComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutComponetModule,
    HttpClientModule,
    UserModule,

    ClienteModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, // Adicione o AuthInterceptor aqui
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent],
  exports: [LayoutComponetComponent, LayoutComponetModule, ClienteModule],
})
export class AppModule {}
