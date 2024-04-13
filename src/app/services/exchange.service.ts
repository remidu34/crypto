import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Exchange } from '../models/exchange';
import { ApiResponse } from '../models/api-response'; 

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  private baseUrl = 'https://api.coincap.io/v2';

  constructor(private http: HttpClient) { }

  getExchanges(): Observable<Exchange[]> {
    return this.http.get<ApiResponse<Exchange[]>>(`${this.baseUrl}/exchanges`)
      .pipe(
        map(response => response.data)
      );
  }
}
