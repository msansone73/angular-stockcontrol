import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { ValorSaldoServiceService } from 'src/app/service/valor-saldo-service.service';
import { StockService } from 'src/app/services/stock.service';
import { Stock } from '../../../models/Stock.model'

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit, OnChanges {

  stocks: any
  @Input() nome: string=''
  @Input() atualizarLista: String='0'

  menssagem =''

  @Output() clicarEditar = new EventEmitter<number>()

  constructor(private stockService : StockService,
    private valorService:ValorSaldoServiceService) {
    this.getStocks()
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.atualizarLista=''
    this.filtrar()
  }



  getStocks()  {
    return this.stockService.getStocks().subscribe((res: Stock[]) => {
      this.stocks = res
    })
  }

  ngOnInit() {
    this.valorService.atualizar.subscribe(
      s=> this.menssagem=s
    )
  }

  apagaStock(id: any){
    this.stockService.deleteStock(id).subscribe(
      r => {
        this.getStocks()
      }
    )
  }

  editaStock(id: number){
    this.clicarEditar.emit(id)
  }

  filtrar(){
    if (this.nome.trim()!='') {
      this.stockService.getStocks().subscribe((
        res: Stock[]) => {
          this.stocks = res.filter( r => r.name.toUpperCase().indexOf(this.nome.toUpperCase())!=-1)
        }
      )
    } else{
      this.getStocks()
    }
  }

  limpar(){
    this.nome=''
    this.getStocks()
  }

}
