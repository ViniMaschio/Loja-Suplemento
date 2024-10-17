import { RouterModule, Routes } from '@angular/router';
import { ListaProdtuosComponent } from './compronente/produtos/lista-prodtuos/lista-prodtuos.component';
import { CardDescricaoComponent } from './compronente/produtos/card-descricao/card-descricao.component';

export const routes: Routes = [
  {
    path: 'produto/:id',
    title: 'Loja Suplementos - Descricao',
    component: CardDescricaoComponent,
  },
  {
    path: 'produto',
    title: 'Loja Suplementos - Produtos',
    component: ListaProdtuosComponent,
  },
  { path: '', redirectTo: 'produto', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: 'produto',
    pathMatch: 'full',
  },
];
