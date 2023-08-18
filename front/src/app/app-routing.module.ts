import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { LayoutComponetComponent } from './screen/layout-componet/layout-componet.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponetComponent,
    children: [
      { path: 'cadastro', component: ClienteFormComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
