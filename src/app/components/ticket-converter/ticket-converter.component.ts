import { Component } from '@angular/core';
import { RateService } from 'src/app/services/rate.service';

@Component({
  selector: 'app-ticket-converter',
  templateUrl: './ticket-converter.component.html',
  styleUrls: ['./ticket-converter.component.scss']
})
export class TicketConverterComponent {
  ticketsCount: number = 1;
  costInDoge: number = 0;

  constructor(private rateService: RateService) {}

  updateCostInDoge(): void {
    const ticketPriceUSD = 4;
    this.rateService.getRate('dogecoin').subscribe(rate => {
      const baseCost = ticketPriceUSD * this.ticketsCount;
      const discount = this.ticketsCount >= 2 ? baseCost * 0.05 : 0;
      this.costInDoge = (baseCost - discount) / rate;
    }).unsubscribe;
  }
}
