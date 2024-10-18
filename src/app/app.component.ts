import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProdtuosComponent } from './compronente/produtos/lista-prodtuos/lista-prodtuos.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListaProdtuosComponent,
    NavBarComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'loja-suplemento';
}
