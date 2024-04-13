// src/app/components/ticket-converter/state/ticket.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { loadRateSuccess, updateTicketCount, calculateCost } from '../actions/ticket-converter-feature.actions';

export interface TicketState {
  rate: number;
  count: number;
  cost: number;
}

export const initialState: TicketState = {
  rate: 0,
  count: 1,
  cost: 0
};

export const ticketReducer = createReducer(
  initialState,
  on(loadRateSuccess, (state, { rate }) => ({ ...state, rate })),
  on(updateTicketCount, (state, { count }) => ({ ...state, count })),
  on(calculateCost, state => ({
    ...state,
    cost: (state.count * 4 * (state.count >= 2 ? 0.95 : 1)) / state.rate
  }))
);
