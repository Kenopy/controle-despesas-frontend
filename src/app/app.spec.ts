import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

it('deve renderizar a navbar na tela principal', async () => {
    // 1. Cria a casca do componente App (Isso resolve o erro do fixture!)
    const fixture = TestBed.createComponent(App);
    
    // 2. Força o Angular a renderizar o HTML para a Navbar aparecer
    fixture.detectChanges(); 

    // 3. Aguarda tudo estabilizar e faz a verificação
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-navbar')).toBeTruthy();
  });
});
