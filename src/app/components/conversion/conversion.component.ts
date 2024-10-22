import { Component } from '@angular/core';
import { ExchangeRateService } from '../../services/exchange-rate.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent {
  amount: number = 1;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  convertedAmount: number | null = null;

  constructor(private exchangeRateService: ExchangeRateService) {}

  convert() {
    this.exchangeRateService.getExchangeRate(this.fromCurrency, this.toCurrency)
      .subscribe((rate: number) => {
        this.convertedAmount = this.amount * rate;
      });
  }
}
