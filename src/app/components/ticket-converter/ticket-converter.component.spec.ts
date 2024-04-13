import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketConverterComponent } from './ticket-converter.component';

describe('TicketConverterComponent', () => {
  let component: TicketConverterComponent;
  let fixture: ComponentFixture<TicketConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
