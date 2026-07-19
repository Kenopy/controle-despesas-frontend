import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 


type VarianteBotao = 'primario' | 'secundario' | 'navbar';

@Component({
  selector: 'app-botao',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './button-component.html',
  styleUrl: './button-component.css'
})
export class BotaoComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  
  @Input() variante: VarianteBotao = 'primario'; 

  private dicionarioDeClasses: Record<VarianteBotao, string> = {
    'navbar': `relative bg-transparent hover:bg-gray-700 text-texto transition-colors duration-200
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-lineButton
        after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left`,
    
    'primario': `bg-backButton text-texto hover:bg-lineButton border-transparent shadow-md transition-all duration-200`,
    
    'secundario': `bg-transparent border border-texto/20 text-texto hover:bg-texto/10 transition-colors duration-200`
  };


  get classesDaVariante(): string {
    return this.dicionarioDeClasses[this.variante];
  }
}