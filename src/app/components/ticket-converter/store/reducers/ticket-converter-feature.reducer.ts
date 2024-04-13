import { createReducer, on } from '@ngrx/store';
import { loadRateSuccess, updateTicketCount, calculateCost } from '../actions/ticket-converter-feature.actions';

export interface TicketState {
  rate: number;
  count: number;
  cost: number;
  discount: number;
}

export const initialState: TicketState = {
  rate: 0,
  count: 1,
  cost: 0,
  discount: 0
};

export const ticketReducer = createReducer(
  initialState,
  on(loadRateSuccess, (state, { rate }) => ({ ...state, rate })),
  on(updateTicketCount, (state, { count }) => ({ ...state, count })),
  on(calculateCost, state => {
    let cost = state.count * 4;
    let discount = 0;
    if (state.count >= 2) {
      discount = state.count * (4 * 0.05);
    }
    return {
      ...state,
      cost: cost - discount,
      discount: discount
    };
  })
);



export const ticketConverterFeatureFeatureKey = 'ticketConverterFeature';
