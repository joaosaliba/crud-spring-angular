import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from 'src/app/cliente/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss'],
})
export class ClienteListComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  cnpjFilter = new FormControl('');
  nomeFilter = new FormControl('');

  displayedColumns: string[] = [
    'id',
    'Nome',
    'CNPJ',
    'Latitude',
    'Longitude',
    'acao',
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  totalItemCount: number = 0;
  pageSize: number = 10;
  pageIndex: number = 0;
  constructor(private dataService: ClienteService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.loadData();
  }
  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.loadData();
  }

  loadData() {
    this.dataService
      .getData(
        this.paginator.pageIndex,
        this.paginator.pageSize,
        this.cnpjFilter.value,
        this.nomeFilter.value
      )
      .subscribe((data) => {
        this.totalItemCount = data.totalElements;
        this.dataSource.data = data.content;
      });
  }

  limparFiltrosEBuscar() {
    this.cnpjFilter.setValue('');
    this.nomeFilter.setValue('');
    this.loadData();
  }

  excluirCliente(clienteId: number) {
    this.dataService.delete(clienteId).subscribe((res) => {
      this.loadData();
      console.log(`Excluindo cliente com ID: ${clienteId}`);
    });
  }
}
