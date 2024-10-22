import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  private apiKey = '0f266bd99ef61db5975a378d';
  private apiUrl = 'https://v6.exchangerate-api.com/v6';

  constructor(private http: HttpClient) {}

  getExchangeRate(from: string, to: string): Observable<number> {
    const url = `${this.apiUrl}/${this.apiKey}/latest/${from}`;
    return this.http.get<any>(url).pipe(
      map(response => response.conversion_rates[to])
    );
  }
}
