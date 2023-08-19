import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClientesOnMapComponent } from './clientes-on-map/clientes-on-map.component';

const routes: Routes = [
  { path: 'list', component: ClienteListComponent, pathMatch: 'full' },
  { path: 'cadastro', component: ClienteFormComponent, pathMatch: 'full' },
  {
    path: 'mapaClientes',
    component: ClientesOnMapComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
