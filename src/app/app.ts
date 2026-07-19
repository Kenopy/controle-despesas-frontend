import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { NavbarComponent} from './feature/despesas/components/navbar/navbar';
import { SectionInicialComponent } from './feature/despesas/components/section-inicial-component/section-inicial-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, SectionInicialComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('controle-financeiro-web');
}
