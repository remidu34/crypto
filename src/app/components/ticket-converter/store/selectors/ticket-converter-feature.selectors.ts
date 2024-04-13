// src/app/components/ticket-converter/state/ticket.selectors.ts
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
