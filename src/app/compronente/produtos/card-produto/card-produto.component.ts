import { Component, Input } from '@angular/core';
import { Produto } from '../Produto';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.scss',
})
export class CardProdutoComponent {
  @Input() produto!: Produto;
}
