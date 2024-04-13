import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-converter',
  templateUrl: './ticket-converter.component.html',
  styleUrls: ['./ticket-converter.component.scss']
})
export class TicketConverterComponent implements OnInit {
  ticketsCount: number = 1;
  totalCostInDoge: number = 0; 

  constructor() { }

  ngOnInit(): void {
    this.updateTotalCost();
  }

  updateTotalCost() {
    this.totalCostInDoge = this.ticketsCount * 10;
  }

  convertToDoge() {
    this.updateTotalCost();
    console.log("Nombre de tickets:", this.ticketsCount, "Coût en Dogecoin:", this.totalCostInDoge);
  }
}
