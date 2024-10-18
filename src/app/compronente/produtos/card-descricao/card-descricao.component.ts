import { Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProdutoService } from '../../../service/produto.service';
import { Subscription } from 'rxjs';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card-descricao',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './card-descricao.component.html',
  styleUrl: './card-descricao.component.scss',
})
export class CardDescricaoComponent implements OnInit {
  produto!: Produto;

  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    let id: number = this.route.snapshot.params['id'];

    this.inscricao = this.produtoService
      .getProduto(id)
      .subscribe((param: Produto) => {
        this.produto = param;
      });
  }
}
