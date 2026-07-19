import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotaoComponent } from '../button-component/button-component'; // Ajuste o nome do arquivo se necessário
import { By } from '@angular/platform-browser';

describe('BotaoComponent', () => {
  let component: BotaoComponent;
  let fixture: ComponentFixture<BotaoComponent>;

  // O beforeEach é o método de "Setup" que roda ANTES de cada teste
  beforeEach(async () => {
    //Configura o ambiente simulado para o nosso componente Standalone
    await TestBed.configureTestingModule({
      imports: [BotaoComponent] 
    }).compileComponents();

    // Cria a "casca" do componente (HTML + TypeScript)
    fixture = TestBed.createComponent(BotaoComponent);
    // Pega apenas a instância da classe TypeScript
    component = fixture.componentInstance;
    // Força o Angular a renderizar o HTML pela primeira vez
    fixture.detectChanges();
  });

  // Teste 1: O teste básico de sobrevivência
  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  // Teste 2: Validando o comportamento padrão
  it('deve ter o tipo padrão do botão definido como "button"', () => {
    // Verifica a variável no TypeScript
    expect(component.type).toBe('button');
    
    // Verifica se a tag HTML <button> realmente recebeu o type="button"
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.getAttribute('type')).toBe('button');
  });

  // Teste 3: Validando a mudança de estado (@Input)
  it('deve alterar o tipo do botão no HTML quando receber um novo @Input()', () => {
    // Jeito correto e seguro de alterar um @Input em testes no Angular
    fixture.componentRef.setInput('type', 'submit');
    
    // Avisamos o Angular para atualizar o HTML
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.getAttribute('type')).toBe('submit');
  });
});