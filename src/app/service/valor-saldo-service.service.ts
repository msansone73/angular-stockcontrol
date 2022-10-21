import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export  class  ValorSaldoServiceService {

  constructor() { }

  private static valor:string =''

  public atualizar = new EventEmitter<string>()


  public atualizaValor(val:string ) {
    ValorSaldoServiceService.valor =val
    this.atualizar.emit(val)
  }

}
