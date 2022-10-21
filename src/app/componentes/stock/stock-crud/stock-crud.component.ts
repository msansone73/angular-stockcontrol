import { formatCurrency } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { StockListComponent } from '../stock-list/stock-list.component';

@Component({
  selector: 'app-stock-crud',
  templateUrl: './stock-crud.component.html',
  styleUrls: ['./stock-crud.component.css']
})
export class StockCrudComponent implements OnInit {

  constructor() { }

  mostraForm: string='none'
  idStockEdit: number=0
  atualizarLista: number=0

  ngOnInit(): void {
  }

  ativaEdicao(id:number){
    this.mostraForm='block'
    this.idStockEdit=id

  }

  refreshList(){
    this.atualizarLista++
  }

  novaAcao(){
    this.idStockEdit=-1
  }

}
