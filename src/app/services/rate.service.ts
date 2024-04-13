import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  private baseUrl = 'https://api.coincap.io/v2/rates';

  constructor(private http: HttpClient) { }

  getRate(currencyId: string): Observable<number> {
    return this.http.get<{ data: any }>(`${this.baseUrl}/${currencyId}`).pipe(
      map(response => parseFloat(response.data.rateUsd))
    );
  }
}
