import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/user/service/login.service';

@Component({
  selector: 'app-layout-componet',
  templateUrl: './layout-componet.component.html',
  styleUrls: ['./layout-componet.component.scss'],
})
export class LayoutComponetComponent implements OnInit {
  menuItems: any[] = [
    {
      label: 'Inicio',
      route: '/cliente/list',
    },
    { label: 'Lista Cliente', route: '/cliente/list' },
    { label: 'Cadastro Cliente', route: '/cliente/cadastro' },
    { label: 'Mapa Clientes', route: '/cliente/mapaClientes' },
  ];

  public currentUrl: string;

  constructor(
    private router: Router,
    private readonly location: Location,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.location.onUrlChange(() => {
      this.currentUrl = this.location.path();
    });

    this.currentUrl = this.location.path();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }
}
