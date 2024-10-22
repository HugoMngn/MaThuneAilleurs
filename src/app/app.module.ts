import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConversionComponent } from './components/conversion/conversion.component'; // Import du composant
import { ExchangeRateService } from './services/exchange-rate.service'; // Import du service

@NgModule({
  declarations: [
    AppComponent,
    ConversionComponent // Ajout du composant ici
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Nécessaire pour les appels HTTP
    FormsModule // Nécessaire pour ngModel
  ],
  providers: [ExchangeRateService], // Ajout du service ici
  bootstrap: [AppComponent]
})
export class AppModule { }
