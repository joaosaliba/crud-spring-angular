import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClientesOnMapComponent } from './components/clientes-on-map/clientes-on-map.component';
import { LayoutComponetComponent } from './screen/layout-componet/layout-componet.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: '', loadChildren: () => UserModule },
  {
    path: '',
    component: LayoutComponetComponent,
    children: [
      { path: 'list', component: ClienteListComponent, pathMatch: 'full' },
      { path: 'cadastro', component: ClienteFormComponent, pathMatch: 'full' },
      {
        path: 'mapaClientes',
        component: ClientesOnMapComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
