import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTicketConverterFeature from '../components/ticket-converter/store/reducers/ticket-converter-feature.reducer';

export interface State {

  [fromTicketConverterFeature.ticketConverterFeatureFeatureKey]: fromTicketConverterFeature.TicketState;
}

export const reducers: ActionReducerMap<State> = {

  [fromTicketConverterFeature.ticketConverterFeatureFeatureKey]: fromTicketConverterFeature.ticketReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
