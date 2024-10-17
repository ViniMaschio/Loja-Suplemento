import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProdtuosComponent } from './compronente/produtos/lista-prodtuos/lista-prodtuos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaProdtuosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'loja-suplemento';
}
