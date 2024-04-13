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
  on(calculateCost, state => {
    let cost = state.count * 4;
    if (state.count >= 2) {
      cost *= 0.95; // Appliquer une réduction de 5% si plus de 2 tickets sont achetés
    }
    return {
      ...state,
      cost: cost / state.rate
    };
  })
);


export const ticketConverterFeatureFeatureKey = 'ticketConverterFeature';
