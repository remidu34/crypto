import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadRate, updateTicketCount, calculateCost } from './store/actions/ticket-converter-feature.actions';
import { selectTicketCost, selectTicketCount, selectCostPerTicket, selectDiscount, selectTotalDiscount } from './store/selectors/ticket-converter-feature.selectors';
import { TicketState } from './store/reducers/ticket-converter-feature.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ticket-converter',
  templateUrl: './ticket-converter.component.html',
  styleUrls: ['./ticket-converter.component.scss']
})
export class TicketConverterComponent {
  ticketState$: Observable<TicketState>;

  ticketInput: number = 1;

  ticketsCount$ = this.store.select(selectTicketCount);
  costInDoge$ = this.store.select(selectTicketCost);
  costPerTicket$ = this.store.select(selectCostPerTicket);
  discount$ = this.store.select(selectDiscount);
  totalDiscount$ = this.store.select(selectTotalDiscount); // Ajoutez ce sélecteur

  constructor(private store: Store<{ ticket: TicketState }>) {
    this.ticketState$ = this.store.select('ticket');
    this.store.dispatch(loadRate());
  }

  updateTicketsCount(newCount: number) {
    this.store.dispatch(updateTicketCount({ count: newCount }));
    this.store.dispatch(calculateCost());
  }
}
