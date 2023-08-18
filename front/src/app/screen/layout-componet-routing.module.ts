import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormComponent } from '../components/cliente-form/cliente-form.component';

const routes: Routes = [
{path:'cadastro',
  component:  ClienteFormComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutComponetRoutingModule { }
