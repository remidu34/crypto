import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../models/api-response';
@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private baseUrl = 'https://api.coincap.io/v2';

  constructor(private http: HttpClient) { }

  getAssets(): Observable<any> {
    return this.http.get<ApiResponse<any>>(`${this.baseUrl}/assets`).pipe(
      map(response => response.data)
    );
  }

  getAssetById(id: string): Observable<any> {
    return this.http.get<ApiResponse<any>>(`${this.baseUrl}/assets/${id}`).pipe(
      map(response => response.data)
    );
  }
}
