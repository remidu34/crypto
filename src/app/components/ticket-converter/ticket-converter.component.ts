import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadRate, updateTicketCount, calculateCost } from './store/actions/ticket-converter-feature.actions';
import { selectTicketCost, selectTicketCount } from './store/selectors/ticket-converter-feature.selectors';
import { TicketState } from './store/reducers/ticket-converter-feature.reducer';

@Component({
  selector: 'app-ticket-converter',
  templateUrl: './ticket-converter.component.html',
  styleUrls: ['./ticket-converter.component.scss']
})
export class TicketConverterComponent {
  ticketInput: number = 1; // Initialise ticketInput

  constructor(private store: Store<{ ticket: TicketState }>) {}

  updateTicketsCount() {
    this.store.dispatch(updateTicketCount({ count: this.ticketInput }));
    this.store.dispatch(calculateCost());
  }

  ngOnInit() {
    this.updateTicketsCount();
  }
}
