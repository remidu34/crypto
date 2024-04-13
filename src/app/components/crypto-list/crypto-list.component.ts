import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto.service';
import { CryptoAsset } from 'src/app/models/crypto';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent implements OnInit {
  cryptos: CryptoAsset[] = [];

  constructor(private cryptoService: CryptoService) { }

  ngOnInit() {
    this.cryptoService.getAssets().subscribe(data => {
      this.cryptos = data.filter((asset: CryptoAsset) => ['bitcoin', 'ethereum', 'dogecoin'].includes(asset.id));
    }).unsubscribe;
  }
}
