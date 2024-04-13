import { createAction, props } from '@ngrx/store';

export const loadRate = createAction(
  '[Ticket Converter] Load Rate'
);

export const loadRateSuccess = createAction(
  '[Ticket Converter] Load Rate Success',
  props<{ rate: number }>()
);

export const loadRateFailure = createAction(
  '[Ticket Converter] Load Rate Failure',
  props<{ error: any }>()
);

export const updateTicketCount = createAction(
  '[Ticket Converter] Update Ticket Count',
  props<{ count: number }>()
);

export const calculateCost = createAction(
  '[Ticket Converter] Calculate Cost'
);
