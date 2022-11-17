import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../configs";
import {IConvertor, ILatest} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClient: HttpClient) {
  }

  getLatest(currency: string, symbols: string): Observable<ILatest> {
    return this.httpClient.get<ILatest>(urls.latest(currency, symbols))
  }

  convertor(amount: number, from: string, to: string): Observable<IConvertor> {
    return this.httpClient.get<IConvertor>(urls.convertor(amount, from, to))
  }
}
