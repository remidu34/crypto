import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadRate, updateTicketCount, calculateCost } from './store/actions/ticket-converter-feature.actions';
import { selectTicketCost, selectTicketCount } from './store/selectors/ticket-converter-feature.selectors';
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

  constructor(private store: Store<{ ticket: TicketState }>) {
    this.ticketState$ = this.store.select('ticket');
    this.ticketState$.subscribe(state => console.log('Ticket state:', state));
    this.store.dispatch(loadRate());

  }
  fetchUsdToDogeRate() {
    this.store.dispatch(loadRate());
  }

  updateTicketsCount(newCount: number) {
    this.store.dispatch(updateTicketCount({  count: newCount }));
    this.store.dispatch(calculateCost());
  }
}
