import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { MapComponent } from './components/map/map.component';
import { MaterialModule } from './plugin/material-imports';
import { LayoutComponetModule } from './screen/layout-componet.module';
import { LayoutComponetComponent } from './screen/layout-componet/layout-componet.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ClienteFormComponent,
    LayoutComponetComponent,
    ClienteListComponent,
    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, 
    FormsModule,
    ReactiveFormsModule,
    LayoutComponetModule,
    HttpClientModule
   ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MapComponent,
    ClienteFormComponent,
    LayoutComponetComponent,
    LayoutComponetModule,
    ClienteListComponent

  ]
})
export class AppModule { }
