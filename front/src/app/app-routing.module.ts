import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteModule } from './cliente/cliente.module';
import { LayoutComponetComponent } from './screen/layout-componet/layout-componet.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: '', loadChildren: () => UserModule },
  {
    path: '',
    component: LayoutComponetComponent,
    children: [{ path: 'cliente', loadChildren: () => ClienteModule }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
