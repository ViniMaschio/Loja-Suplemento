import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../../service/produto.service';
import { Subscription } from 'rxjs';
import { Produto } from '../Produto';
import { CardProdutoComponent } from '../card-produto/card-produto.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-prodtuos',
  standalone: true,
  imports: [CardProdutoComponent, CommonModule, FormsModule],
  templateUrl: './lista-prodtuos.component.html',
  styleUrl: './lista-prodtuos.component.scss',
})
export class ListaProdtuosComponent implements OnInit {
  constructor(private produtoServico: ProdutoService) {
    this.inscricao = this.produtoServico
      .getSuplementos()
      .subscribe((param: Produto[]) => {
        this.produtos = param;
      });
  }

  inscricao!: Subscription;
  produtos: Produto[] = [];

  prod: Produto[] = [
    {
      id: 1,
      nome: 'Whey Protein',
      descricao: 'Proteína de soro de leite',
      preco: 100,
      imagem: 'assets/whey.jpg',
      quantidade: 0,
    },
  ];

  ngOnInit() {}

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
