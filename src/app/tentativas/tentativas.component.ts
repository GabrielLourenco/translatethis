import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true), new Coracao(true)
  ];


  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.tentativas != this.coracoes.length) {
      let i = this.coracoes.length - this.tentativas - 1 //4 - 4
      if (i >= 0) {
        this.coracoes[i].cheio = false;
      }
    }
    if (this.tentativas == this.coracoes.length) {
      this.coracoes.map((s2) => s2.cheio = true )
    }
  }

}
