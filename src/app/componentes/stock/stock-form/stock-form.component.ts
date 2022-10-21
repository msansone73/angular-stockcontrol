import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stock } from 'src/app/models/Stock.model';
import { ValorSaldoServiceService } from 'src/app/service/valor-saldo-service.service';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  constructor(private stockService: StockService,
    private valorService: ValorSaldoServiceService) { }

  @Output() clicarSalvar = new EventEmitter<number>()
  @Input() stockId:string =''


  stock: Stock ={id:0, name:'', ticker:'', stockType:''}

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.stockId=='-1') {
      this.stock.id=0
      this.stock.name=''
      this.stock.ticker=''
      this.stock.stockType='DEFAULT'
    }
    else {
      this.stockService.getStockById(+this.stockId).subscribe(
        r => {
          this.stock=r
        }
      )
    }
  }

  cancelar(){
    this.atualizaLista()
    this.stockId='0'
  }

  salvar(){
    this.valorService.atualizaValor('valor foi salvo')
    if (this.stockId=='-1'){
      this.stockService.salvarStock(this.stock)
      .subscribe(
        r => {
              this.atualizaLista()
              this.stockId='0'
            }
         )
    } else {
      this.stockService.updateStock(this.stock.id!, this.stock)
      .subscribe(
        r => {
              this.atualizaLista()
              this.stockId='0'
            }
         )
    }
  }

  atualizaLista(){
    this.clicarSalvar.emit()
  }

}
