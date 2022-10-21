import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/Stock.model';
import { StockType } from 'src/app/models/StockType.model';

@Component({
  selector: 'app-consolidado-carteira',
  templateUrl: './consolidado-carteira.component.html',
  styleUrls: ['./consolidado-carteira.component.css']
})
export class ConsolidadoCarteiraComponent implements OnInit {

  stock : Stock[] = [
                    {id:1, name:'Petro', ticker: 'PETR4', stockType: 'Default'},
                    {id:2, name:'Vale', ticker: 'VALE4', stockType: 'StockType.Default'},
                  ];

  constructor() { }

  ngOnInit(): void {
  }

}
