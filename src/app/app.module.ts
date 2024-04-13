import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { ExchangeRankComponent } from './components/exchange-rank/exchange-rank.component';
import { TicketConverterComponent } from './components/ticket-converter/ticket-converter.component';

//Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ticketReducer } from './components/ticket-converter/store/reducers/ticket-converter-feature.reducer';
import { TicketEffects } from './components/ticket-converter/store/effects/ticket-converter-feature.effects';

@NgModule({
  declarations: [
    AppComponent,
    CryptoListComponent,
    ExchangeRankComponent,
    TicketConverterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot({ ticket: ticketReducer }),
    EffectsModule.forRoot([TicketEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
