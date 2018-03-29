import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase';

  public rodadaFrase: Frase;
  public rodada: number = 0;

  public resposta: string = '';
  public progresso: number = 0;
  public tentativas: number = 4;

  @Output() public encerrarJogo = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {}

  public atualizaResposta(e: Event): void {
    this.resposta = (<HTMLInputElement>e.target).value;
  }

  public verificarResposta(): void {
    if(this.resposta == this.rodadaFrase.frasePtBr) {

      this.rodada++;
      this.progresso += 100 / this.frases.length;

      if (this.rodada < this.frases.length) {
        this.atualizaRodada();
      } else {
        this.encerrarJogo.emit('vitoria');
      }
    } else {
      this.tentativas--;
      if (this.tentativas < 0) {
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  private atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
    this.progresso = 0;
  }

}
