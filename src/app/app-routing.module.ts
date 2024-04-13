import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { ExchangeRankComponent } from './components/exchange-rank/exchange-rank.component';
import { TicketConverterComponent } from './components/ticket-converter/ticket-converter.component';
import { EffectsModule } from '@ngrx/effects';
import { TicketConverterFeatureEffects } from './components/ticket-converter/store/effects/ticket-converter-feature.effects';

const routes: Routes = [
  { path: '', redirectTo: '/cryptos', pathMatch: 'full' },
  { path: 'cryptos', component: CryptoListComponent },
  { path: 'exchanges', component: ExchangeRankComponent },
  { path: 'converter', component: TicketConverterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), EffectsModule.forRoot([TicketConverterFeatureEffects])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
