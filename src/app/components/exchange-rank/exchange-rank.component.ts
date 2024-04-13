import { Component, OnInit } from '@angular/core';
import { ExchangeService } from 'src/app/services/exchange.service';

@Component({
  selector: 'app-exchange-rank',
  templateUrl: './exchange-rank.component.html',
  styleUrls: ['./exchange-rank.component.scss']
})
export class ExchangeRankComponent implements OnInit {
  topExchange: any;

  constructor(private exchangeService: ExchangeService) { }

  ngOnInit(): void {
    this.loadTopExchange();
  }

  loadTopExchange(): void {
    this.exchangeService.getExchanges().subscribe(exchanges => {
      console.log(exchanges)
      this.topExchange = exchanges.sort((a, b) => parseFloat(b.volumeUsd24Hr) - parseFloat(a.volumeUsd24Hr))[0];
    }, error => {
      console.error('Erreur lors du chargement des échanges:', error);
    });
  }

}

