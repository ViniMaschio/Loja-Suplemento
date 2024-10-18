import { Injectable } from '@angular/core';
import { Produto } from '../compronente/produtos/Produto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  suplementos: Produto[] = [
    {
      id: 1,
      nome: 'Whey Protein',
      descricao: 'Proteína de soro de leite',
      preco: 100,
      imagem: 'Whey Protein supplement.png',
      quantidade: 67,
    },
    {
      id: 2,
      nome: 'Creatina',
      descricao: 'Aumenta a força e resistência',
      preco: 50,
      imagem: 'Creatina supplement.png',
      quantidade: 3,
    },
    {
      id: 3,
      nome: 'BCAA',
      descricao: 'Aminoácidos essenciais',
      preco: 70,
      imagem: 'BCAA supplement.png',
      quantidade: 18,
    },
    {
      id: 4,
      nome: 'Multivitamínico',
      descricao: 'Vitaminas e minerais',
      preco: 30,
      imagem: 'Multivitamínico supplement.png',
      quantidade: 2,
    },
    {
      id: 5,
      nome: 'Termogênico',
      descricao: 'Acelera o metabolismo',
      preco: 80,
      imagem: 'Termogênico supplement.png',
      quantidade: 12,
    },
    {
      id: 6,
      nome: 'Glutamina',
      descricao: 'Aminoácido não essencial',
      preco: 60,
      imagem: 'Glutamina supplement.png',
      quantidade: 20,
    },
  ];

  getSuplementos(): Observable<Produto[]> {
    return of(this.suplementos); // Converte o array para um Observable
  }

  getProduto(id: number): Observable<Produto> {
    return of(this.suplementos.find((produto) => produto.id == id)!);
  }
  constructor() {}
}
