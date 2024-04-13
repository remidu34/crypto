import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TicketState } from '../reducers/ticket-converter-feature.reducer';

export const selectTicketFeature = createFeatureSelector<TicketState>('ticket');

export const selectTicketCount = createSelector(
  selectTicketFeature,
  (state: TicketState) => state.count
);

export const selectTicketCost = createSelector(
  selectTicketFeature,
  (state: TicketState) => state.cost
);

export const selectCostPerTicket = createSelector(
  selectTicketFeature,
  (state: TicketState) => state.cost / state.count
);

export const selectDiscount = createSelector(
  selectTicketFeature,
  (state: TicketState) => {
    return state.discount;
  }
);

export const selectTotalDiscount = createSelector(
  selectTicketFeature,
  (state: TicketState) => {
    let discount = 0;
    if (state.count >= 2) {
      discount = state.count * 0.05 * 4;
    }
    return discount;
  }
);
