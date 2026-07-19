import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { phosphorMoon, phosphorWallet} from '@ng-icons/phosphor-icons/regular';
import { BotaoComponent } from '../button-component/button-component'
@Component({
  selector: 'app-navbar', 
  standalone: true,       
  imports: [NgIconComponent, BotaoComponent], 
  providers: [provideIcons({ phosphorMoon, phosphorWallet })], 
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  // Implementar a lógica do botão de alternar tema
} 