import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDescricaoComponent } from './tela-descricao.component';

describe('TelaDescricaoComponent', () => {
  let component: TelaDescricaoComponent;
  let fixture: ComponentFixture<TelaDescricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaDescricaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaDescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
