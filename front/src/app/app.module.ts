import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClientesOnMapComponent } from './components/clientes-on-map/clientes-on-map.component';
import { MapComponent } from './components/map/map.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { MaterialModule } from './plugin/material-imports';
import { LayoutComponetModule } from './screen/layout-componet.module';
import { LayoutComponetComponent } from './screen/layout-componet/layout-componet.component';
import { UserModule } from './user/user.module';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ClienteFormComponent,
    LayoutComponetComponent,
    ClienteListComponent,
    ClientesOnMapComponent,
  ],
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
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, // Adicione o AuthInterceptor aqui
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    provideNgxMask(),
  ],
  bootstrap: [AppComponent],
  exports: [
    MapComponent,
    ClienteFormComponent,
    LayoutComponetComponent,
    LayoutComponetModule,
    ClienteListComponent,
    ClientesOnMapComponent,
  ],
})
export class AppModule {}
