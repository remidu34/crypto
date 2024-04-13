import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRankComponent } from './exchange-rank.component';

describe('ExchangeRankComponent', () => {
  let component: ExchangeRankComponent;
  let fixture: ComponentFixture<ExchangeRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeRankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
