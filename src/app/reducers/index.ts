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

  [fromTicketConverterFeature.ticketConverterFeatureFeatureKey]: fromTicketConverterFeature.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromTicketConverterFeature.ticketConverterFeatureFeatureKey]: fromTicketConverterFeature.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
