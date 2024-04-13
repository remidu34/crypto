// src/app/components/ticket-converter/state/ticket.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { RateService } from '../../../../services/rate.service';
import { loadRate, loadRateSuccess, loadRateFailure } from '../actions/ticket-converter-feature.actions';

@Injectable()
export class TicketEffects {

  loadRate$ = createEffect(() => this.actions$.pipe(
    ofType(loadRate),
    mergeMap(() =>
      this.rateService.getRate('dogecoin').pipe(
        map(rate => loadRateSuccess({ rate })),
        catchError(error => of(loadRateFailure({ error })))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private rateService: RateService
  ) {}
}
