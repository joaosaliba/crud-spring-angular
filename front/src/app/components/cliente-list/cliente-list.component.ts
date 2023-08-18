import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'nome', 'cnpj','latitude', 'longitude'];

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
    this.pageSize = event.pageSize
    this.pageIndex = event.pageIndex;
    this.loadData()
  }

  loadData() {
    this.dataService.getData(this.paginator.pageIndex, this.paginator.pageSize)
      .subscribe(data =>{
        console.log(data)
        this.totalItemCount= data.totalElements
        this.dataSource.data = data.content});
  }

}
