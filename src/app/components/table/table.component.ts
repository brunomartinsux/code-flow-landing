import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  orders: any[] = [
    {status: 'accepted', selected: false, phones: ['47997086040', '4830271791', '4797086040'], emails: ['macaco-roxo@gmail.com'], name: 'Anna Maria Harger'},
    {status: 'refused', selected: false, phones: ['47997086040', '4830271791', '4797086040'], emails: ['macaco-roxo@gmail.com'], name: 'METALNEY Industria de Judeu'},
    {status: 'onGoing', selected: false, phones: ['47997086040', '4797086040'], emails: ['macaco-roxo@gmail.com', 'macaco-roxo@gmail.com'], name: 'TUPY Cooperativa da Recreação'},
    {status: 'noContact', selected: false, phones: ['47997086040'], emails: ['macaco-roxo@gmail.com'], name: 'Atelieware Contrução de Software Que Quebra na Mão do Cliente'},
  ];

  filterState = {
    name: false,
    cnpj: false,
    debt: false,
    status: '',
    update: false,
  }


  constructor() { }

  ngOnInit(): void {
  }

}
