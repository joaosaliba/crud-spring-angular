import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from '../components/map/map.component';
import { MaskModule } from '../plugin/mask.module';
import { MaterialModule } from '../plugin/material-imports';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClientesOnMapComponent } from './clientes-on-map/clientes-on-map.component';

@NgModule({
  declarations: [
    ClienteFormComponent,
    ClienteListComponent,
    ClientesOnMapComponent,
    MapComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ClienteRoutingModule,
    MaskModule,
  ],
  exports: [ClienteFormComponent, ClienteListComponent, ClientesOnMapComponent],
})
export class ClienteModule {}
