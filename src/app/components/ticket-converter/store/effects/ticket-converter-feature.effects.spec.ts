import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TicketConverterFeatureEffects } from './ticket-converter-feature.effects';

describe('TicketConverterFeatureEffects', () => {
  let actions$: Observable<any>;
  let effects: TicketConverterFeatureEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TicketConverterFeatureEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TicketConverterFeatureEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
