import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Stock } from '../models/Stock.model'
import { retry, catchError } from 'rxjs/operators';
import { StockType } from '../models/StockType.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Accept','*/*')
  .set('Cache-Control','no-cache')


  private url: string =environment.apiUrl+'/stock'

  constructor( private httpClient : HttpClient) { }

  getStocks():Observable<Stock[]>  {
    return this.httpClient.get<Stock[]>(this.url)
  }

  getStockById(id:number): Observable<Stock> {
    return this.httpClient.get<Stock>(this.url+'/'+id)
  }

  updateStock(id:number, stock: Stock): Observable<Stock>{
    const body = JSON.stringify(stock);
    return this.httpClient.put<Stock>(this.url+'/'+id, body , {'headers':this.headers})
  }

  deleteStock(id: number) : Observable<any> {
    return this.httpClient.delete(this.url+"/"+id, {'headers':this.headers})
  }

  salvarStock(stock: Stock) : Observable<Stock>{
    const body = JSON.stringify(stock);
    return this.httpClient.post<Stock>(this.url, body , {'headers':this.headers})
  }

}
